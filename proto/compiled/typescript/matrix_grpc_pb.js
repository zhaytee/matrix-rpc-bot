// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var matrix_pb = require('./matrix_pb.js');

function serialize_matrix_GetAccessTokenRequest(arg) {
  if (!(arg instanceof matrix_pb.GetAccessTokenRequest)) {
    throw new Error('Expected argument of type matrix.GetAccessTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_matrix_GetAccessTokenRequest(buffer_arg) {
  return matrix_pb.GetAccessTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_matrix_GetAccessTokenResponse(arg) {
  if (!(arg instanceof matrix_pb.GetAccessTokenResponse)) {
    throw new Error('Expected argument of type matrix.GetAccessTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_matrix_GetAccessTokenResponse(buffer_arg) {
  return matrix_pb.GetAccessTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_matrix_JoinRoomRequest(arg) {
  if (!(arg instanceof matrix_pb.JoinRoomRequest)) {
    throw new Error('Expected argument of type matrix.JoinRoomRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_matrix_JoinRoomRequest(buffer_arg) {
  return matrix_pb.JoinRoomRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_matrix_JoinRoomResponse(arg) {
  if (!(arg instanceof matrix_pb.JoinRoomResponse)) {
    throw new Error('Expected argument of type matrix.JoinRoomResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_matrix_JoinRoomResponse(buffer_arg) {
  return matrix_pb.JoinRoomResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_matrix_LeaveRequest(arg) {
  if (!(arg instanceof matrix_pb.LeaveRequest)) {
    throw new Error('Expected argument of type matrix.LeaveRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_matrix_LeaveRequest(buffer_arg) {
  return matrix_pb.LeaveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_matrix_LeaveResponse(arg) {
  if (!(arg instanceof matrix_pb.LeaveResponse)) {
    throw new Error('Expected argument of type matrix.LeaveResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_matrix_LeaveResponse(buffer_arg) {
  return matrix_pb.LeaveResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_matrix_SendReadReceiptRequest(arg) {
  if (!(arg instanceof matrix_pb.SendReadReceiptRequest)) {
    throw new Error('Expected argument of type matrix.SendReadReceiptRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_matrix_SendReadReceiptRequest(buffer_arg) {
  return matrix_pb.SendReadReceiptRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_matrix_SendReadReceiptResponse(arg) {
  if (!(arg instanceof matrix_pb.SendReadReceiptResponse)) {
    throw new Error('Expected argument of type matrix.SendReadReceiptResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_matrix_SendReadReceiptResponse(buffer_arg) {
  return matrix_pb.SendReadReceiptResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_matrix_SendTextMessageRequest(arg) {
  if (!(arg instanceof matrix_pb.SendTextMessageRequest)) {
    throw new Error('Expected argument of type matrix.SendTextMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_matrix_SendTextMessageRequest(buffer_arg) {
  return matrix_pb.SendTextMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_matrix_SendTextMessageResponse(arg) {
  if (!(arg instanceof matrix_pb.SendTextMessageResponse)) {
    throw new Error('Expected argument of type matrix.SendTextMessageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_matrix_SendTextMessageResponse(buffer_arg) {
  return matrix_pb.SendTextMessageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_matrix_SessionEvent(arg) {
  if (!(arg instanceof matrix_pb.SessionEvent)) {
    throw new Error('Expected argument of type matrix.SessionEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_matrix_SessionEvent(buffer_arg) {
  return matrix_pb.SessionEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_matrix_StartSessionRequest(arg) {
  if (!(arg instanceof matrix_pb.StartSessionRequest)) {
    throw new Error('Expected argument of type matrix.StartSessionRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_matrix_StartSessionRequest(buffer_arg) {
  return matrix_pb.StartSessionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var MatrixService = exports.MatrixService = {
  startSession: {
    path: '/matrix.Matrix/StartSession',
    requestStream: false,
    responseStream: true,
    requestType: matrix_pb.StartSessionRequest,
    responseType: matrix_pb.SessionEvent,
    requestSerialize: serialize_matrix_StartSessionRequest,
    requestDeserialize: deserialize_matrix_StartSessionRequest,
    responseSerialize: serialize_matrix_SessionEvent,
    responseDeserialize: deserialize_matrix_SessionEvent,
  },
  getAccessToken: {
    path: '/matrix.Matrix/GetAccessToken',
    requestStream: false,
    responseStream: false,
    requestType: matrix_pb.GetAccessTokenRequest,
    responseType: matrix_pb.GetAccessTokenResponse,
    requestSerialize: serialize_matrix_GetAccessTokenRequest,
    requestDeserialize: deserialize_matrix_GetAccessTokenRequest,
    responseSerialize: serialize_matrix_GetAccessTokenResponse,
    responseDeserialize: deserialize_matrix_GetAccessTokenResponse,
  },
  joinRoom: {
    path: '/matrix.Matrix/JoinRoom',
    requestStream: false,
    responseStream: false,
    requestType: matrix_pb.JoinRoomRequest,
    responseType: matrix_pb.JoinRoomResponse,
    requestSerialize: serialize_matrix_JoinRoomRequest,
    requestDeserialize: deserialize_matrix_JoinRoomRequest,
    responseSerialize: serialize_matrix_JoinRoomResponse,
    responseDeserialize: deserialize_matrix_JoinRoomResponse,
  },
  leave: {
    path: '/matrix.Matrix/Leave',
    requestStream: false,
    responseStream: false,
    requestType: matrix_pb.LeaveRequest,
    responseType: matrix_pb.LeaveResponse,
    requestSerialize: serialize_matrix_LeaveRequest,
    requestDeserialize: deserialize_matrix_LeaveRequest,
    responseSerialize: serialize_matrix_LeaveResponse,
    responseDeserialize: deserialize_matrix_LeaveResponse,
  },
  sendTextMessage: {
    path: '/matrix.Matrix/SendTextMessage',
    requestStream: false,
    responseStream: false,
    requestType: matrix_pb.SendTextMessageRequest,
    responseType: matrix_pb.SendTextMessageResponse,
    requestSerialize: serialize_matrix_SendTextMessageRequest,
    requestDeserialize: deserialize_matrix_SendTextMessageRequest,
    responseSerialize: serialize_matrix_SendTextMessageResponse,
    responseDeserialize: deserialize_matrix_SendTextMessageResponse,
  },
  sendReadReceipt: {
    path: '/matrix.Matrix/SendReadReceipt',
    requestStream: false,
    responseStream: false,
    requestType: matrix_pb.SendReadReceiptRequest,
    responseType: matrix_pb.SendReadReceiptResponse,
    requestSerialize: serialize_matrix_SendReadReceiptRequest,
    requestDeserialize: deserialize_matrix_SendReadReceiptRequest,
    responseSerialize: serialize_matrix_SendReadReceiptResponse,
    responseDeserialize: deserialize_matrix_SendReadReceiptResponse,
  },
};

exports.MatrixClient = grpc.makeGenericClientConstructor(MatrixService);
