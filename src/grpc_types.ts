import * as pb_matrix from "../proto/compiled/typescript/matrix_pb";

export function pbPresenceToMatrixPresence(pbPresence: pb_matrix.Presence): string {
    switch (pbPresence) {
        case pb_matrix.Presence.PRESENCE_ONLINE:
            return "online";
        case pb_matrix.Presence.PRESENCE_OFFLINE:
            return "offline";
        case pb_matrix.Presence.PRESENCE_UNAVAILABLE:
            return "unavailable";
    }
    return "unknown";
};

export function matrixPresenceToPbPresence(matrixPresence: string): pb_matrix.Presence {
    switch (matrixPresence) {
        case "online":
            return pb_matrix.Presence.PRESENCE_ONLINE;
        case "offline":
            return pb_matrix.Presence.PRESENCE_OFFLINE;
        case "unavailable":
            return pb_matrix.Presence.PRESENCE_UNAVAILABLE;
    }
    return pb_matrix.Presence.PRESENCE_UNSPECIFIED;
}

export function pbMsgtypeToMatrixMsgtype(pbMsgtype: pb_matrix.Msgtype): string {
    switch (pbMsgtype) {
        case pb_matrix.Msgtype.MSGTYPE_M_TEXT:
            return "m.text";
        case pb_matrix.Msgtype.MSGTYPE_M_EMOTE:
            return "m.emote";
    }
    return "unknown";
};

export function matrixMsgtypeToPbMsgtype(matrixMsgtype: string): pb_matrix.Msgtype {
    switch (matrixMsgtype) {
        case "m.text":
            return pb_matrix.Msgtype.MSGTYPE_M_TEXT;
        case "m.emote":
    }
    return pb_matrix.Msgtype.MSGTYPE_UNSPECIFIED;
}
