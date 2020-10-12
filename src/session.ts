import * as util from "util";
import * as os from "os";
import * as path from "path";
import * as fs from "fs";
import * as nodeLocalStorage from "node-localstorage";
import { v4 as uuidv4 } from "uuid";
import autoBind from "auto-bind";
import LRU from "lru-cache";
import matrix from "matrix-js-sdk";
import { LocalStorageCryptoStore } from "matrix-js-sdk/lib/crypto/store/localStorage-crypto-store";
import { WebStorageSessionStore } from "matrix-js-sdk/lib/store/session/webstorage";
import { MemoryStore } from "matrix-js-sdk/lib/store/memory";

import logger from "./logger";

export interface Event {
    id: string;
    sessionId: string;
    type: string;
    sender: string;
    roomId: string;
    content: object;
}

type EventCallbackFunc = (event: Event) => void;

export default class Session {
    static MAX_CACHED_EVENTS = 50;

    public static async getAccessToken(username: string, password: string, homeserverEndpoint: string) {
        const tempClient = matrix.createClient(homeserverEndpoint);
        return tempClient.loginWithPassword(username, password);
    }

    // TODO: Eugh...
    protected static createClient(
        sessionId: string,
        homeserver: string,
        userId: string,
        deviceId: string,
        accessToken: string,
        syncEventHandler: Function,
    ) {
        const deviceDesc = `matrix-rpc-bot-${sessionId}-${deviceId}`;
        let localStoragePath;
        if (process.platform === "win32") {
            localStoragePath = path.resolve(path.join(os.homedir(), "Local", deviceDesc));
        } else {
            localStoragePath = path.resolve(path.join(os.homedir(), ".local", deviceDesc));
        }
        logger.info("Persisting runtime data", { localStoragePath, sessionId });
        fs.mkdirSync(localStoragePath, { recursive: true });
        const localStorage = new nodeLocalStorage.LocalStorage(localStoragePath);

        // TODO: (upstream) global state race condition
        matrix.setCryptoStoreFactory(() => new LocalStorageCryptoStore(localStorage));

        const result = matrix.createClient({
            baseUrl: homeserver,
            sessionStore: new WebStorageSessionStore(localStorage),
            store: new MemoryStore({ localStorage }),
            deviceId: deviceId,
            userId: userId,
            accessToken: accessToken,
        });

        // Must be called after createClient
        // Really should wait for this to finish before proceeding...
        result.initCrypto();

        result.on("sync", syncEventHandler);

        return result
    }


    private _id: string;
    private _client;
    private _eventCache: LRU;
    private _displayName: string;
    private _initialPresence: string;
    private _eventCallback: EventCallbackFunc;

    get id() {
        return this._id;
    }

    constructor(
        sessionId: string,
        homeserver: string,
        userId: string,
        deviceId: string,
        accessToken: string,
        displayName: string,
        initialPresence: string,
        eventCallback: EventCallbackFunc,
    ) {
        this._displayName = displayName;
        this._initialPresence = initialPresence;
        this._eventCallback = eventCallback;
        this._eventCache = new LRU(Session.MAX_CACHED_EVENTS);
        this._id = sessionId || "default";

        // Order matters here... >_<
        autoBind(this);

        this._client = Session.createClient(
            this._id, homeserver, userId, deviceId, accessToken, this.handleSync,
        );
        logger.info("New session created", { homeserver, userId, deviceId, sessionId: this._id });

        // Delay startClient() to give initCrypto() a little room to breathe
        // This will delay first event delivery, but shouldn't cause any real problems
        setTimeout((() => { this._client.startClient() }).bind(this), 500);
    }

    public dispose() {
        if (this._client) {
            this._client.stopClient();
            this._client.removeAllListeners();
            this._client = null;
        }
        this._eventCache = null;
        this._eventCallback = null;
        logger.debug("Session disposed");
    }

    handleSync(state, prevState, data) {
        logger.debug("Syncing", { state });
        if (state === "PREPARED" && prevState === null) {
            this._client.setDeviceDetails(this._client.deviceId, "matrix-rpc-bot");
            this._client.setDisplayName(this._displayName);
            this._client.setPresence({
                presence: this._initialPresence,
            });
            logger.debug("Initial sync complete");

            this._client.on("event", this.handleEvent);
            this._client.on("Event.decrypted", this.handleEventDecrypted)

            // Fake an event indicating that the client is ready to be used
            this._eventCallback({
                id: uuidv4(),
                sessionId: this._id,
                type: "x.ready",
                sender: "",
                roomId: "",
                content: {},
            })
        }
    }

    handleEvent(event) {
        if (event.isEncrypted()) {
            // Will handle it later in Event.decrypted handler
            return;
        }

        this._eventCache.set(event.getId(), event);

        this._eventCallback({
            id: event.getId(),
            sessionId: this._id,
            type: event.getType(),
            sender: event.getSender(),
            roomId: event.getRoomId(),
            content: event.getContent(),
        });
    }

    handleEventDecrypted(event) {
        if (event.isDecryptionFailure()) {
            logger.warn("Decryption failure", { event });
            return;
        }

        this._eventCache.set(event.getId(), event);

        this._eventCallback({
            id: event.getId(),
            sessionId: this._id,
            type: event.getType(),
            sender: event.getSender(),
            roomId: event.getRoomId(),
            content: event.getContent(),
        });
    }

    async joinRoom(roomIdOrAlias) {
        return this._client.joinRoom(roomIdOrAlias);
    }

    async leave(roomId) {
        return this._client.leave(roomId);
    }

    // javascript why do you hate us so
    async sendTextMessage(roomId, body) {
        return new Promise((resolve, reject) => {
            this._client.sendTextMessage(roomId, body)
                .then(resolve)
                .catch((err) => {
                    Object.keys(err.devices).forEach((userId) => {
                        Object.keys(err.devices[userId]).map((deviceId) => {
                            this._client.setDeviceKnown(userId, deviceId, true);
                        });
                    });
                    // Try again
                    this._client.sendTextMessage(roomId, body)
                        .then(resolve)
                        .catch(reject);
                });
        });
    }

    async sendReadReceipt(eventId) {
        const event = this._eventCache.get(eventId);
        if (!event) {
            return {};
        }
        // Hopefully this function will eventually just accept an eventId
        return this._client.sendReadReceipt(event);
    }
}