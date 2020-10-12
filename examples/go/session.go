package main

import (
	"context"
	"log"
	"strings"
	"time"

	pb_matrix "github.com/zhaytee/matrix-rpc-bot/proto/compiled/go"
)

func startSession(ctx context.Context, matrixClient pb_matrix.MatrixClient, cfg *config, ap *authParams) {
	log.Printf("Initializing session...")

	sessResp, err := matrixClient.StartSession(ctx, &pb_matrix.StartSessionRequest{
		AccessToken:     ap.AccessToken,
		UserId:          ap.UserId,
		DeviceId:        ap.DeviceId,
		Homeserver:      cfg.Homeserver,
		InitialPresence: pb_matrix.Presence(pb_matrix.Presence_value[cfg.InitialPresence]),
		DisplayName:     cfg.DisplayName,
	})
	if err != nil {
		log.Fatal(err)
	}

	for {
		ev, err := sessResp.Recv()
		if err != nil {
			log.Print(err)
			break
		}
		switch wrapper := ev.Content.(type) {
		case *pb_matrix.SessionEvent_XReady:
			log.Printf("Session ready!")

		case *pb_matrix.SessionEvent_MPresence:
			content := wrapper.MPresence
			lastActive := time.Duration(content.LastActiveAgo) * time.Millisecond
			log.Printf("%q is %q (active=%t, lastActive=%v)", ev.Sender, content.Presence.String(), content.CurrentlyActive, lastActive)

		case *pb_matrix.SessionEvent_MTyping:
			content := wrapper.MTyping
			if len(content.UserIds) > 0 {
				log.Printf("User(s) typing: %s", strings.Join(content.UserIds, ","))
			}

		case *pb_matrix.SessionEvent_MRoomMessage:
			content := wrapper.MRoomMessage
			switch content.Msgtype {
			case pb_matrix.Msgtype_MSGTYPE_M_TEXT:
				log.Printf("%s <%s> %s", ev.RoomId, ev.Sender, content.Body)
				_, err := matrixClient.SendReadReceipt(ctx, &pb_matrix.SendReadReceiptRequest{
					EventId: ev.EventId,
				})
				if err != nil {
					log.Printf("SendReadReceipt failed: %v", err)
				}

			default:
				log.Printf("Dropping room message of unknown type: %q", content.Msgtype.String())
			}

		default:
			log.Printf("unknown event -> %#v", wrapper)
		}
	}

	log.Printf("Session finished.")
}
