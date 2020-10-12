// package: matrix
// file: matrix.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GetAccessTokenRequest extends jspb.Message { 
    getHomeserver(): string;
    setHomeserver(value: string): GetAccessTokenRequest;

    getUsername(): string;
    setUsername(value: string): GetAccessTokenRequest;

    getPassword(): string;
    setPassword(value: string): GetAccessTokenRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAccessTokenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAccessTokenRequest): GetAccessTokenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAccessTokenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAccessTokenRequest;
    static deserializeBinaryFromReader(message: GetAccessTokenRequest, reader: jspb.BinaryReader): GetAccessTokenRequest;
}

export namespace GetAccessTokenRequest {
    export type AsObject = {
        homeserver: string,
        username: string,
        password: string,
    }
}

export class GetAccessTokenResponse extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): GetAccessTokenResponse;

    getHomeServer(): string;
    setHomeServer(value: string): GetAccessTokenResponse;

    getAccessToken(): string;
    setAccessToken(value: string): GetAccessTokenResponse;

    getDeviceId(): string;
    setDeviceId(value: string): GetAccessTokenResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAccessTokenResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetAccessTokenResponse): GetAccessTokenResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAccessTokenResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAccessTokenResponse;
    static deserializeBinaryFromReader(message: GetAccessTokenResponse, reader: jspb.BinaryReader): GetAccessTokenResponse;
}

export namespace GetAccessTokenResponse {
    export type AsObject = {
        userId: string,
        homeServer: string,
        accessToken: string,
        deviceId: string,
    }
}

export class StartSessionRequest extends jspb.Message { 
    getSessionId(): string;
    setSessionId(value: string): StartSessionRequest;

    getHomeserver(): string;
    setHomeserver(value: string): StartSessionRequest;

    getUserId(): string;
    setUserId(value: string): StartSessionRequest;

    getDisplayName(): string;
    setDisplayName(value: string): StartSessionRequest;

    getDeviceId(): string;
    setDeviceId(value: string): StartSessionRequest;

    getAccessToken(): string;
    setAccessToken(value: string): StartSessionRequest;

    getInitialPresence(): Presence;
    setInitialPresence(value: Presence): StartSessionRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartSessionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StartSessionRequest): StartSessionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartSessionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartSessionRequest;
    static deserializeBinaryFromReader(message: StartSessionRequest, reader: jspb.BinaryReader): StartSessionRequest;
}

export namespace StartSessionRequest {
    export type AsObject = {
        sessionId: string,
        homeserver: string,
        userId: string,
        displayName: string,
        deviceId: string,
        accessToken: string,
        initialPresence: Presence,
    }
}

export class JoinRoomRequest extends jspb.Message { 
    getSessionId(): string;
    setSessionId(value: string): JoinRoomRequest;

    getRoomId(): string;
    setRoomId(value: string): JoinRoomRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JoinRoomRequest.AsObject;
    static toObject(includeInstance: boolean, msg: JoinRoomRequest): JoinRoomRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JoinRoomRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JoinRoomRequest;
    static deserializeBinaryFromReader(message: JoinRoomRequest, reader: jspb.BinaryReader): JoinRoomRequest;
}

export namespace JoinRoomRequest {
    export type AsObject = {
        sessionId: string,
        roomId: string,
    }
}

export class JoinRoomResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JoinRoomResponse.AsObject;
    static toObject(includeInstance: boolean, msg: JoinRoomResponse): JoinRoomResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JoinRoomResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JoinRoomResponse;
    static deserializeBinaryFromReader(message: JoinRoomResponse, reader: jspb.BinaryReader): JoinRoomResponse;
}

export namespace JoinRoomResponse {
    export type AsObject = {
    }
}

export class LeaveRequest extends jspb.Message { 
    getSessionId(): string;
    setSessionId(value: string): LeaveRequest;

    getRoomId(): string;
    setRoomId(value: string): LeaveRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LeaveRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LeaveRequest): LeaveRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LeaveRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LeaveRequest;
    static deserializeBinaryFromReader(message: LeaveRequest, reader: jspb.BinaryReader): LeaveRequest;
}

export namespace LeaveRequest {
    export type AsObject = {
        sessionId: string,
        roomId: string,
    }
}

export class LeaveResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LeaveResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LeaveResponse): LeaveResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LeaveResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LeaveResponse;
    static deserializeBinaryFromReader(message: LeaveResponse, reader: jspb.BinaryReader): LeaveResponse;
}

export namespace LeaveResponse {
    export type AsObject = {
    }
}

export class SendTextMessageRequest extends jspb.Message { 
    getSessionId(): string;
    setSessionId(value: string): SendTextMessageRequest;

    getRoomId(): string;
    setRoomId(value: string): SendTextMessageRequest;

    getBody(): string;
    setBody(value: string): SendTextMessageRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendTextMessageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SendTextMessageRequest): SendTextMessageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendTextMessageRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendTextMessageRequest;
    static deserializeBinaryFromReader(message: SendTextMessageRequest, reader: jspb.BinaryReader): SendTextMessageRequest;
}

export namespace SendTextMessageRequest {
    export type AsObject = {
        sessionId: string,
        roomId: string,
        body: string,
    }
}

export class SendTextMessageResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendTextMessageResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SendTextMessageResponse): SendTextMessageResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendTextMessageResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendTextMessageResponse;
    static deserializeBinaryFromReader(message: SendTextMessageResponse, reader: jspb.BinaryReader): SendTextMessageResponse;
}

export namespace SendTextMessageResponse {
    export type AsObject = {
    }
}

export class SendReadReceiptRequest extends jspb.Message { 
    getSessionId(): string;
    setSessionId(value: string): SendReadReceiptRequest;

    getEventId(): string;
    setEventId(value: string): SendReadReceiptRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendReadReceiptRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SendReadReceiptRequest): SendReadReceiptRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendReadReceiptRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendReadReceiptRequest;
    static deserializeBinaryFromReader(message: SendReadReceiptRequest, reader: jspb.BinaryReader): SendReadReceiptRequest;
}

export namespace SendReadReceiptRequest {
    export type AsObject = {
        sessionId: string,
        eventId: string,
    }
}

export class SendReadReceiptResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendReadReceiptResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SendReadReceiptResponse): SendReadReceiptResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendReadReceiptResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendReadReceiptResponse;
    static deserializeBinaryFromReader(message: SendReadReceiptResponse, reader: jspb.BinaryReader): SendReadReceiptResponse;
}

export namespace SendReadReceiptResponse {
    export type AsObject = {
    }
}

export class Receipt extends jspb.Message { 
    getKind(): Receipt.Kind;
    setKind(value: Receipt.Kind): Receipt;

    getEventId(): string;
    setEventId(value: string): Receipt;

    getUserId(): string;
    setUserId(value: string): Receipt;

    getTimestamp(): number;
    setTimestamp(value: number): Receipt;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Receipt.AsObject;
    static toObject(includeInstance: boolean, msg: Receipt): Receipt.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Receipt, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Receipt;
    static deserializeBinaryFromReader(message: Receipt, reader: jspb.BinaryReader): Receipt;
}

export namespace Receipt {
    export type AsObject = {
        kind: Receipt.Kind,
        eventId: string,
        userId: string,
        timestamp: number,
    }

    export enum Kind {
    KIND_UNSPECIFIED = 0,
    KIND_M_READ = 1,
    }

}

export class SessionEvent extends jspb.Message { 
    getSessionId(): string;
    setSessionId(value: string): SessionEvent;

    getSender(): string;
    setSender(value: string): SessionEvent;

    getRoomId(): string;
    setRoomId(value: string): SessionEvent;

    getEventId(): string;
    setEventId(value: string): SessionEvent;


    hasMRoomMessage(): boolean;
    clearMRoomMessage(): void;
    getMRoomMessage(): MRoomMessage | undefined;
    setMRoomMessage(value?: MRoomMessage): SessionEvent;


    hasMTyping(): boolean;
    clearMTyping(): void;
    getMTyping(): MTyping | undefined;
    setMTyping(value?: MTyping): SessionEvent;


    hasMPresence(): boolean;
    clearMPresence(): void;
    getMPresence(): MPresence | undefined;
    setMPresence(value?: MPresence): SessionEvent;


    hasXReady(): boolean;
    clearXReady(): void;
    getXReady(): XReady | undefined;
    setXReady(value?: XReady): SessionEvent;


    hasMReceipt(): boolean;
    clearMReceipt(): void;
    getMReceipt(): MReceipt | undefined;
    setMReceipt(value?: MReceipt): SessionEvent;


    getContentCase(): SessionEvent.ContentCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SessionEvent.AsObject;
    static toObject(includeInstance: boolean, msg: SessionEvent): SessionEvent.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SessionEvent, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SessionEvent;
    static deserializeBinaryFromReader(message: SessionEvent, reader: jspb.BinaryReader): SessionEvent;
}

export namespace SessionEvent {
    export type AsObject = {
        sessionId: string,
        sender: string,
        roomId: string,
        eventId: string,
        mRoomMessage?: MRoomMessage.AsObject,
        mTyping?: MTyping.AsObject,
        mPresence?: MPresence.AsObject,
        xReady?: XReady.AsObject,
        mReceipt?: MReceipt.AsObject,
    }

    export enum ContentCase {
        CONTENT_NOT_SET = 0,
    
    M_ROOM_MESSAGE = 6,

    M_TYPING = 7,

    M_PRESENCE = 8,

    X_READY = 9,

    M_RECEIPT = 10,

    }

}

export class MRoomMessage extends jspb.Message { 
    getBody(): string;
    setBody(value: string): MRoomMessage;

    getMsgtype(): Msgtype;
    setMsgtype(value: Msgtype): MRoomMessage;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MRoomMessage.AsObject;
    static toObject(includeInstance: boolean, msg: MRoomMessage): MRoomMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MRoomMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MRoomMessage;
    static deserializeBinaryFromReader(message: MRoomMessage, reader: jspb.BinaryReader): MRoomMessage;
}

export namespace MRoomMessage {
    export type AsObject = {
        body: string,
        msgtype: Msgtype,
    }
}

export class MTyping extends jspb.Message { 
    clearUserIdsList(): void;
    getUserIdsList(): Array<string>;
    setUserIdsList(value: Array<string>): MTyping;
    addUserIds(value: string, index?: number): string;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MTyping.AsObject;
    static toObject(includeInstance: boolean, msg: MTyping): MTyping.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MTyping, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MTyping;
    static deserializeBinaryFromReader(message: MTyping, reader: jspb.BinaryReader): MTyping;
}

export namespace MTyping {
    export type AsObject = {
        userIdsList: Array<string>,
    }
}

export class MPresence extends jspb.Message { 
    getLastActiveAgo(): number;
    setLastActiveAgo(value: number): MPresence;

    getPresence(): Presence;
    setPresence(value: Presence): MPresence;

    getCurrentlyActive(): boolean;
    setCurrentlyActive(value: boolean): MPresence;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MPresence.AsObject;
    static toObject(includeInstance: boolean, msg: MPresence): MPresence.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MPresence, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MPresence;
    static deserializeBinaryFromReader(message: MPresence, reader: jspb.BinaryReader): MPresence;
}

export namespace MPresence {
    export type AsObject = {
        lastActiveAgo: number,
        presence: Presence,
        currentlyActive: boolean,
    }
}

export class XReady extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): XReady.AsObject;
    static toObject(includeInstance: boolean, msg: XReady): XReady.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: XReady, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): XReady;
    static deserializeBinaryFromReader(message: XReady, reader: jspb.BinaryReader): XReady;
}

export namespace XReady {
    export type AsObject = {
    }
}

export class MReceipt extends jspb.Message { 
    clearReceiptsList(): void;
    getReceiptsList(): Array<Receipt>;
    setReceiptsList(value: Array<Receipt>): MReceipt;
    addReceipts(value?: Receipt, index?: number): Receipt;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MReceipt.AsObject;
    static toObject(includeInstance: boolean, msg: MReceipt): MReceipt.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MReceipt, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MReceipt;
    static deserializeBinaryFromReader(message: MReceipt, reader: jspb.BinaryReader): MReceipt;
}

export namespace MReceipt {
    export type AsObject = {
        receiptsList: Array<Receipt.AsObject>,
    }
}

export enum Presence {
    PRESENCE_UNSPECIFIED = 0,
    PRESENCE_ONLINE = 1,
    PRESENCE_OFFLINE = 2,
    PRESENCE_UNAVAILABLE = 3,
}

export enum Msgtype {
    MSGTYPE_UNSPECIFIED = 0,
    MSGTYPE_M_TEXT = 1,
    MSGTYPE_M_EMOTE = 2,
}
