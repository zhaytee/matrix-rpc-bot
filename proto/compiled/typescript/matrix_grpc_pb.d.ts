// package: matrix
// file: matrix.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as matrix_pb from "./matrix_pb";

interface IMatrixService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    startSession: IMatrixService_IStartSession;
    getAccessToken: IMatrixService_IGetAccessToken;
    joinRoom: IMatrixService_IJoinRoom;
    leave: IMatrixService_ILeave;
    sendTextMessage: IMatrixService_ISendTextMessage;
    sendReadReceipt: IMatrixService_ISendReadReceipt;
}

interface IMatrixService_IStartSession extends grpc.MethodDefinition<matrix_pb.StartSessionRequest, matrix_pb.SessionEvent> {
    path: "/matrix.Matrix/StartSession";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<matrix_pb.StartSessionRequest>;
    requestDeserialize: grpc.deserialize<matrix_pb.StartSessionRequest>;
    responseSerialize: grpc.serialize<matrix_pb.SessionEvent>;
    responseDeserialize: grpc.deserialize<matrix_pb.SessionEvent>;
}
interface IMatrixService_IGetAccessToken extends grpc.MethodDefinition<matrix_pb.GetAccessTokenRequest, matrix_pb.GetAccessTokenResponse> {
    path: "/matrix.Matrix/GetAccessToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<matrix_pb.GetAccessTokenRequest>;
    requestDeserialize: grpc.deserialize<matrix_pb.GetAccessTokenRequest>;
    responseSerialize: grpc.serialize<matrix_pb.GetAccessTokenResponse>;
    responseDeserialize: grpc.deserialize<matrix_pb.GetAccessTokenResponse>;
}
interface IMatrixService_IJoinRoom extends grpc.MethodDefinition<matrix_pb.JoinRoomRequest, matrix_pb.JoinRoomResponse> {
    path: "/matrix.Matrix/JoinRoom";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<matrix_pb.JoinRoomRequest>;
    requestDeserialize: grpc.deserialize<matrix_pb.JoinRoomRequest>;
    responseSerialize: grpc.serialize<matrix_pb.JoinRoomResponse>;
    responseDeserialize: grpc.deserialize<matrix_pb.JoinRoomResponse>;
}
interface IMatrixService_ILeave extends grpc.MethodDefinition<matrix_pb.LeaveRequest, matrix_pb.LeaveResponse> {
    path: "/matrix.Matrix/Leave";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<matrix_pb.LeaveRequest>;
    requestDeserialize: grpc.deserialize<matrix_pb.LeaveRequest>;
    responseSerialize: grpc.serialize<matrix_pb.LeaveResponse>;
    responseDeserialize: grpc.deserialize<matrix_pb.LeaveResponse>;
}
interface IMatrixService_ISendTextMessage extends grpc.MethodDefinition<matrix_pb.SendTextMessageRequest, matrix_pb.SendTextMessageResponse> {
    path: "/matrix.Matrix/SendTextMessage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<matrix_pb.SendTextMessageRequest>;
    requestDeserialize: grpc.deserialize<matrix_pb.SendTextMessageRequest>;
    responseSerialize: grpc.serialize<matrix_pb.SendTextMessageResponse>;
    responseDeserialize: grpc.deserialize<matrix_pb.SendTextMessageResponse>;
}
interface IMatrixService_ISendReadReceipt extends grpc.MethodDefinition<matrix_pb.SendReadReceiptRequest, matrix_pb.SendReadReceiptResponse> {
    path: "/matrix.Matrix/SendReadReceipt";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<matrix_pb.SendReadReceiptRequest>;
    requestDeserialize: grpc.deserialize<matrix_pb.SendReadReceiptRequest>;
    responseSerialize: grpc.serialize<matrix_pb.SendReadReceiptResponse>;
    responseDeserialize: grpc.deserialize<matrix_pb.SendReadReceiptResponse>;
}

export const MatrixService: IMatrixService;

export interface IMatrixServer {
    startSession: grpc.handleServerStreamingCall<matrix_pb.StartSessionRequest, matrix_pb.SessionEvent>;
    getAccessToken: grpc.handleUnaryCall<matrix_pb.GetAccessTokenRequest, matrix_pb.GetAccessTokenResponse>;
    joinRoom: grpc.handleUnaryCall<matrix_pb.JoinRoomRequest, matrix_pb.JoinRoomResponse>;
    leave: grpc.handleUnaryCall<matrix_pb.LeaveRequest, matrix_pb.LeaveResponse>;
    sendTextMessage: grpc.handleUnaryCall<matrix_pb.SendTextMessageRequest, matrix_pb.SendTextMessageResponse>;
    sendReadReceipt: grpc.handleUnaryCall<matrix_pb.SendReadReceiptRequest, matrix_pb.SendReadReceiptResponse>;
}

export interface IMatrixClient {
    startSession(request: matrix_pb.StartSessionRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<matrix_pb.SessionEvent>;
    startSession(request: matrix_pb.StartSessionRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<matrix_pb.SessionEvent>;
    getAccessToken(request: matrix_pb.GetAccessTokenRequest, callback: (error: grpc.ServiceError | null, response: matrix_pb.GetAccessTokenResponse) => void): grpc.ClientUnaryCall;
    getAccessToken(request: matrix_pb.GetAccessTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: matrix_pb.GetAccessTokenResponse) => void): grpc.ClientUnaryCall;
    getAccessToken(request: matrix_pb.GetAccessTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: matrix_pb.GetAccessTokenResponse) => void): grpc.ClientUnaryCall;
    joinRoom(request: matrix_pb.JoinRoomRequest, callback: (error: grpc.ServiceError | null, response: matrix_pb.JoinRoomResponse) => void): grpc.ClientUnaryCall;
    joinRoom(request: matrix_pb.JoinRoomRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: matrix_pb.JoinRoomResponse) => void): grpc.ClientUnaryCall;
    joinRoom(request: matrix_pb.JoinRoomRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: matrix_pb.JoinRoomResponse) => void): grpc.ClientUnaryCall;
    leave(request: matrix_pb.LeaveRequest, callback: (error: grpc.ServiceError | null, response: matrix_pb.LeaveResponse) => void): grpc.ClientUnaryCall;
    leave(request: matrix_pb.LeaveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: matrix_pb.LeaveResponse) => void): grpc.ClientUnaryCall;
    leave(request: matrix_pb.LeaveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: matrix_pb.LeaveResponse) => void): grpc.ClientUnaryCall;
    sendTextMessage(request: matrix_pb.SendTextMessageRequest, callback: (error: grpc.ServiceError | null, response: matrix_pb.SendTextMessageResponse) => void): grpc.ClientUnaryCall;
    sendTextMessage(request: matrix_pb.SendTextMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: matrix_pb.SendTextMessageResponse) => void): grpc.ClientUnaryCall;
    sendTextMessage(request: matrix_pb.SendTextMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: matrix_pb.SendTextMessageResponse) => void): grpc.ClientUnaryCall;
    sendReadReceipt(request: matrix_pb.SendReadReceiptRequest, callback: (error: grpc.ServiceError | null, response: matrix_pb.SendReadReceiptResponse) => void): grpc.ClientUnaryCall;
    sendReadReceipt(request: matrix_pb.SendReadReceiptRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: matrix_pb.SendReadReceiptResponse) => void): grpc.ClientUnaryCall;
    sendReadReceipt(request: matrix_pb.SendReadReceiptRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: matrix_pb.SendReadReceiptResponse) => void): grpc.ClientUnaryCall;
}

export class MatrixClient extends grpc.Client implements IMatrixClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public startSession(request: matrix_pb.StartSessionRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<matrix_pb.SessionEvent>;
    public startSession(request: matrix_pb.StartSessionRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<matrix_pb.SessionEvent>;
    public getAccessToken(request: matrix_pb.GetAccessTokenRequest, callback: (error: grpc.ServiceError | null, response: matrix_pb.GetAccessTokenResponse) => void): grpc.ClientUnaryCall;
    public getAccessToken(request: matrix_pb.GetAccessTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: matrix_pb.GetAccessTokenResponse) => void): grpc.ClientUnaryCall;
    public getAccessToken(request: matrix_pb.GetAccessTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: matrix_pb.GetAccessTokenResponse) => void): grpc.ClientUnaryCall;
    public joinRoom(request: matrix_pb.JoinRoomRequest, callback: (error: grpc.ServiceError | null, response: matrix_pb.JoinRoomResponse) => void): grpc.ClientUnaryCall;
    public joinRoom(request: matrix_pb.JoinRoomRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: matrix_pb.JoinRoomResponse) => void): grpc.ClientUnaryCall;
    public joinRoom(request: matrix_pb.JoinRoomRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: matrix_pb.JoinRoomResponse) => void): grpc.ClientUnaryCall;
    public leave(request: matrix_pb.LeaveRequest, callback: (error: grpc.ServiceError | null, response: matrix_pb.LeaveResponse) => void): grpc.ClientUnaryCall;
    public leave(request: matrix_pb.LeaveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: matrix_pb.LeaveResponse) => void): grpc.ClientUnaryCall;
    public leave(request: matrix_pb.LeaveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: matrix_pb.LeaveResponse) => void): grpc.ClientUnaryCall;
    public sendTextMessage(request: matrix_pb.SendTextMessageRequest, callback: (error: grpc.ServiceError | null, response: matrix_pb.SendTextMessageResponse) => void): grpc.ClientUnaryCall;
    public sendTextMessage(request: matrix_pb.SendTextMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: matrix_pb.SendTextMessageResponse) => void): grpc.ClientUnaryCall;
    public sendTextMessage(request: matrix_pb.SendTextMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: matrix_pb.SendTextMessageResponse) => void): grpc.ClientUnaryCall;
    public sendReadReceipt(request: matrix_pb.SendReadReceiptRequest, callback: (error: grpc.ServiceError | null, response: matrix_pb.SendReadReceiptResponse) => void): grpc.ClientUnaryCall;
    public sendReadReceipt(request: matrix_pb.SendReadReceiptRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: matrix_pb.SendReadReceiptResponse) => void): grpc.ClientUnaryCall;
    public sendReadReceipt(request: matrix_pb.SendReadReceiptRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: matrix_pb.SendReadReceiptResponse) => void): grpc.ClientUnaryCall;
}
