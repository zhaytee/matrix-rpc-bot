// Order matters here
global.Olm = require("olm");
import * as matrix from "matrix-js-sdk";

import "source-map-support/register";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import logger from "./logger";
import Session, { Event } from "./session";

const sessions = new Map<string, Session>();
const getSession = req => sessions.get(req["session_id"] || "default");

async function wrapExec(cb, f) {
    let result;
    try {
        result = await f();
    } catch (e) {
        console.error(e);
        e.code = grpc.status.INTERNAL;
        cb(e, null);
        return;
    }
    cb(null, result);
}

const grpcFuncs = {
    startSession(call) {
        const req = call.request;
        const newSession = new Session(
            req["session_id"],
            req["homeserver"],
            req["user_id"],
            req["device_id"],
            req["access_token"],
            req["display_name"],
            req["initial_presence"],
            (event: Event) => {
                let toSend = {
                    session_id: event.sessionId,
                    type: event.type,
                    sender: event.sender,
                    room_id: event.roomId,
                    [event.type.replace(/\./g, "_")]: event.content,
                    event_id: event.id,
                };
                logger.debug("Sending event", { event: toSend });
                call.write(toSend);
            }
        );
        sessions.set(req["session_id"] || "default", newSession);
    },

    async getAccessToken({ request }, cb) {
        wrapExec(cb, () => Session.getAccessToken(request["username"], request["password"], request["homeserver"]));
    },

    async joinRoom({ request }, cb) {
        wrapExec(cb, () => getSession(request).joinRoom(request["room_id"]));
    },

    async leave({ request }, cb) {
        wrapExec(cb, () => getSession(request).leave(request["room_id"]));
    },

    async sendTextMessage({ request }, cb) {
        wrapExec(cb, () => getSession(request).sendTextMessage(request["room_id"], request["body"]));
    },

    async sendReadReceipt({ request }, cb) {
        wrapExec(cb, () => getSession(request).sendReadReceipt(request["event_id"]));
    },
};


const packageDefinition = protoLoader.loadSync(
    "./proto/matrix.proto",
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    },
);
const matrixProto: any = grpc.loadPackageDefinition(packageDefinition).matrix;
const server = new grpc.Server();
server.addService(matrixProto.Matrix.service, grpcFuncs);
const bindEndpoint = process.env["MATRIX_BIND_ADDRESS"] || "0.0.0.0:58558";
server.bindAsync(bindEndpoint, grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
        logger.error(err);
        process.exit(1);
    }
    server.start();
    logger.info(`Serving Matrix RPC at ${bindEndpoint}`);
});
