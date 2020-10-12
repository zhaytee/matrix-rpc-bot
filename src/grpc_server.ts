import * as grpc from "@grpc/grpc-js";
import * as pb_matrix from "../proto/compiled/typescript/matrix_pb";
import * as grpc_matrix from "../proto/compiled/typescript/matrix_grpc_pb";
import logger from "./logger";
import Session, { Event } from "./session";
import { matrixMsgtypeToPbMsgtype, matrixPresenceToPbPresence, pbPresenceToMatrixPresence } from "./grpc_types";

const sessions = new Map<string, Session>();
const getSession = (sessionId?: string) => sessions.get(sessionId || "default");

class ServerImpl implements grpc_matrix.IMatrixServer {
    public startSession(
        call: grpc.ServerWritableStream<pb_matrix.StartSessionRequest, pb_matrix.SessionEvent>,
    ) {
        const req = call.request;
        logger.info(`Initiating event stream to session "${req.getSessionId()}"`);
        const newSession = new Session(
            req.getSessionId(),
            req.getHomeserver(),
            req.getUserId(),
            req.getDeviceId(),
            req.getAccessToken(),
            req.getDisplayName(),
            pbPresenceToMatrixPresence(req.getInitialPresence()),
            (matrixEvent: Event) => {
                logger.debug("Processing new Matrix event", { sessionId: req.getSessionId(), event: matrixEvent });

                const pbEvent = new pb_matrix.SessionEvent();

                switch (matrixEvent.type) {
                    case "x.ready": {
                        const content = new pb_matrix.XReady();
                        pbEvent.setXReady(content);
                        break;
                    }
                    case "m.room.message": {
                        const content = new pb_matrix.MRoomMessage();
                        content.setMsgtype(matrixMsgtypeToPbMsgtype(matrixEvent.content["msgtype"]));
                        content.setBody(matrixEvent.content["body"]);
                        pbEvent.setMRoomMessage(content);
                        break;
                    }
                    case "m.typing": {
                        const content = new pb_matrix.MTyping();
                        content.setUserIdsList(matrixEvent.content["user_ids"]);
                        pbEvent.setMTyping(content);
                        break;
                    }
                    case "m.presence": {
                        const content = new pb_matrix.MPresence();
                        content.setCurrentlyActive(matrixEvent.content["currently_active"]);
                        content.setLastActiveAgo(matrixEvent.content["last_active_ago"]);
                        content.setPresence(matrixPresenceToPbPresence(matrixEvent.content["presence"]));
                        pbEvent.setMPresence(content);
                        break;
                    }
                    case "m.receipt": {
                        // TODO
                    }
                    default: {
                        logger.warn(`Skipping unhandled Matrix event type: ${matrixEvent.type}`, { sessionId: req.getSessionId() });
                        return;
                    }
                }

                // common fields
                pbEvent.setSessionId(matrixEvent.sessionId);
                pbEvent.setSender(matrixEvent.sender);
                pbEvent.setRoomId(matrixEvent.roomId);
                pbEvent.setEventId(matrixEvent.id);

                call.write(pbEvent);
            }
        );
        sessions.set(req.getSessionId() || "default", newSession);
    }

    public async getAccessToken(
        call: grpc.ServerUnaryCall<pb_matrix.GetAccessTokenRequest, pb_matrix.GetAccessTokenResponse>,
        callback: grpc.sendUnaryData<pb_matrix.GetAccessTokenResponse>,
    ) {
        const loginResult = await Session.getAccessToken(
            call.request.getUsername(),
            call.request.getPassword(),
            call.request.getHomeserver(),
        )
        const resp = new pb_matrix.GetAccessTokenResponse();
        resp.setAccessToken(loginResult["access_token"]);
        resp.setDeviceId(loginResult["device_id"]);
        resp.setHomeServer(loginResult["home_server"]);
        resp.setUserId(loginResult["user_id"]);
        callback(null, resp);
    }

    public async joinRoom(
        call: grpc.ServerUnaryCall<pb_matrix.JoinRoomRequest, pb_matrix.JoinRoomResponse>,
        callback: grpc.sendUnaryData<pb_matrix.JoinRoomResponse>,
    ) {
        const sess = getSession(call.request.getSessionId());
        try {
            await sess.joinRoom(call.request.getRoomId());
        } catch (ex) {
            const grpcErr = new grpc.StatusBuilder()
                .withCode(grpc.status.INTERNAL)
                .withDetails(ex)
                .build();
            callback(grpcErr, null);
        }
        const resp = new pb_matrix.JoinRoomResponse();
        callback(null, resp);
    }

    public async leave(
        call: grpc.ServerUnaryCall<pb_matrix.LeaveRequest, pb_matrix.LeaveResponse>,
        callback: grpc.sendUnaryData<pb_matrix.LeaveResponse>,
    ) {
        const sess = getSession(call.request.getSessionId());
        try {
            await sess.leave(call.request.getRoomId());
        } catch (ex) {
            const grpcErr = new grpc.StatusBuilder()
                .withCode(grpc.status.INTERNAL)
                .withDetails(ex)
                .build();
            callback(grpcErr, null);
        }
        const resp = new pb_matrix.LeaveResponse();
        callback(null, resp);
    }

    public async sendTextMessage(
        call: grpc.ServerUnaryCall<pb_matrix.SendTextMessageRequest, pb_matrix.SendTextMessageResponse>,
        callback: grpc.sendUnaryData<pb_matrix.SendTextMessageResponse>,
    ) {
        const sess = getSession(call.request.getSessionId());
        try {
            await sess.sendTextMessage(call.request.getRoomId(), call.request.getBody());
        } catch (ex) {
            const grpcErr = new grpc.StatusBuilder()
                .withCode(grpc.status.INTERNAL)
                .withDetails(ex)
                .build();
            callback(grpcErr, null);
        }
        const resp = new pb_matrix.SendTextMessageResponse();
        callback(null, resp);
    }

    public async sendReadReceipt(
        call: grpc.ServerUnaryCall<pb_matrix.SendReadReceiptRequest, pb_matrix.SendReadReceiptResponse>,
        callback: grpc.sendUnaryData<pb_matrix.SendReadReceiptResponse>,
    ) {
        const sess = getSession(call.request.getSessionId());
        try {
            await sess.sendReadReceipt(call.request.getEventId());
        } catch (ex) {
            console.log("sendReadReceipt blew up:");
            console.log(require("util").inspect(ex));
            // logger.error(ex);
            const grpcErr = new grpc.StatusBuilder()
                .withCode(grpc.status.INTERNAL)
                .withDetails(ex)
                .build();
            callback(grpcErr, null);
        }
        const resp = new pb_matrix.SendReadReceiptResponse();
        callback(null, resp);
    }
}

export function startServer() {
    const bindEndpoint = process.env["MATRIX_BIND_ADDRESS"] || "0.0.0.0:58558";

    const server = new grpc.Server();

    // FIXME: "as any" shuts TS up, not sure what's up there
    server.addService(grpc_matrix.MatrixService, new ServerImpl() as any);

    server.bindAsync(bindEndpoint, grpc.ServerCredentials.createInsecure(), (err, port) => {
        if (err) {
            logger.error(err);
            process.exit(1);
        }
        server.start();
        logger.info(`Serving Matrix RPC at ${bindEndpoint}`);
    });
}