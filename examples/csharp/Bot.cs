using System.Diagnostics.Tracing;
using System.Linq;
using System.Reflection.Metadata;
using System.Data;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using Grpc.Core;
using Matrix;
using Microsoft.Extensions.Configuration.Binder;
using Newtonsoft.Json;

namespace MatrixRpcJsExample
{
    class Bot
    {
        static Random rand = new Random();

        // FIXME: Use a cancellation token or something, dear lord
        const int EVENT_TIMEOUT_INTERVAL = 1000;

        string[] junk = new[] {
            "Absurd!",
            "Incredible!",
            "How dare you...!",
            "No way!",
            "Poppycock!",
            "Bollocks.",
        };
        readonly Matrix.Matrix.MatrixClient matrixClient;
        readonly AsyncServerStreamingCall<SessionEvent> session;
        readonly string userId;
        bool running, ready;

        public Bot(Matrix.Matrix.MatrixClient matrixClient, AsyncServerStreamingCall<SessionEvent> session, string userId)
        {
            this.matrixClient = matrixClient;
            this.session = session;
            this.userId = userId;
        }

        public async Task HandleEvents()
        {
            if (running)
                throw new Exception("Already handling events");

            running = true;
            Task<bool> pending = null;

            while (running)
            {
                if (pending == null)
                {
                    pending = session.ResponseStream.MoveNext();
                }
                if (await Task.WhenAny(pending, Task.Delay(EVENT_TIMEOUT_INTERVAL)) == pending)
                {
                    if (!pending.Result)
                    {
                        Console.WriteLine("Session seems to be closed. Bailing...");
                        break;
                    }

                    var ev = session.ResponseStream.Current;

                    Console.WriteLine($"<- {ev.Type}");

                    // Wait until we get the ready signal
                    if (!ready)
                    {
                        if (ev.Type == "x.ready")
                        {
                            ready = true;
                            Console.WriteLine("Bot logic engaged! Waiting for events...");
                        }

                        pending = null;
                        continue;
                    }

                    switch (ev.Type)
                    {
                        case "m.room.message":
                            // Ignore our own messages...
                            if (ev.Sender == userId)
                                continue;

                            _ = matrixClient.SendReadReceiptAsync(new SendReadReceiptRequest { EventId = ev.EventId });
                            Say($"{ev.MRoomMessage.Body}?! {junk[rand.Next(junk.Length)]}", ev.RoomId);
                            break;
                    }

                    pending = null;
                }
            }

            Console.WriteLine("Bot logic finished");
        }

        public void Say(string something, string to)
        {
            matrixClient.SendTextMessage(new SendTextMessageRequest
            {
                RoomId = to,
                Body = something,
            });
        }

        public void Join(string roomId)
        {
            matrixClient.JoinRoom(new JoinRoomRequest { RoomId = roomId });
        }

        public void Leave(string roomId)
        {
            matrixClient.Leave(new LeaveRequest { RoomId = roomId });
        }

        public void ForceStop()
        {
            running = false;
        }
    }
}