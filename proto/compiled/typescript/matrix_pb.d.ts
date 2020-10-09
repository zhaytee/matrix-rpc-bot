// package: matrix
// file: matrix.proto

import * as jspb from "google-protobuf";

export class GetAccessTokenRequest extends jspb.Message {
  getHomeserver(): string;
  setHomeserver(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

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
  setUserId(value: string): void;

  getHomeServer(): string;
  setHomeServer(value: string): void;

  getAccessToken(): string;
  setAccessToken(value: string): void;

  getDeviceId(): string;
  setDeviceId(value: string): void;

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
  setSessionId(value: string): void;

  getHomeserver(): string;
  setHomeserver(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getDeviceId(): string;
  setDeviceId(value: string): void;

  getAccessToken(): string;
  setAccessToken(value: string): void;

  getInitialPresence(): string;
  setInitialPresence(value: string): void;

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
    initialPresence: string,
  }
}

export class JoinRoomRequest extends jspb.Message {
  getSessionId(): string;
  setSessionId(value: string): void;

  getRoomId(): string;
  setRoomId(value: string): void;

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
  setSessionId(value: string): void;

  getRoomId(): string;
  setRoomId(value: string): void;

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
  setSessionId(value: string): void;

  getRoomId(): string;
  setRoomId(value: string): void;

  getBody(): string;
  setBody(value: string): void;

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
  setSessionId(value: string): void;

  getEventId(): string;
  setEventId(value: string): void;

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

export class SessionEvent extends jspb.Message {
  getSessionId(): string;
  setSessionId(value: string): void;

  getType(): string;
  setType(value: string): void;

  getSender(): string;
  setSender(value: string): void;

  getRoomId(): string;
  setRoomId(value: string): void;

  getEventId(): string;
  setEventId(value: string): void;

  hasMRoomMessage(): boolean;
  clearMRoomMessage(): void;
  getMRoomMessage(): MRoomMessage | undefined;
  setMRoomMessage(value?: MRoomMessage): void;

  hasMTyping(): boolean;
  clearMTyping(): void;
  getMTyping(): MTyping | undefined;
  setMTyping(value?: MTyping): void;

  hasMPresence(): boolean;
  clearMPresence(): void;
  getMPresence(): MPresence | undefined;
  setMPresence(value?: MPresence): void;

  hasXReady(): boolean;
  clearXReady(): void;
  getXReady(): XReady | undefined;
  setXReady(value?: XReady): void;

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
    type: string,
    sender: string,
    roomId: string,
    eventId: string,
    mRoomMessage?: MRoomMessage.AsObject,
    mTyping?: MTyping.AsObject,
    mPresence?: MPresence.AsObject,
    xReady?: XReady.AsObject,
  }

  export enum ContentCase {
    CONTENT_NOT_SET = 0,
    M_ROOM_MESSAGE = 6,
    M_TYPING = 7,
    M_PRESENCE = 8,
    X_READY = 9,
  }
}

export class MRoomMessage extends jspb.Message {
  getBody(): string;
  setBody(value: string): void;

  getMsgtype(): string;
  setMsgtype(value: string): void;

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
    msgtype: string,
  }
}

export class MTyping extends jspb.Message {
  clearUserIdsList(): void;
  getUserIdsList(): Array<string>;
  setUserIdsList(value: Array<string>): void;
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
  setLastActiveAgo(value: number): void;

  getPresence(): string;
  setPresence(value: string): void;

  getCurrentlyActive(): boolean;
  setCurrentlyActive(value: boolean): void;

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
    presence: string,
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

