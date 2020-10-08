# matrix-rpc-js

This is a frontend to the Matrix API to make it easier to write clients (bots, etc) with full end-to-end encryption (e2e) support. At time of writing, the Matrix SDK ecosystem (while fairly extensive and growing) is lacking in libraries that fully support e2e. The Javascript SDK is one of those that do, so this tool offers the functionality of the Javascript SDK via gRPC, opening the way for folks to join in on the fun with the language and platform of their choice.

Any language and platform supported by gRPC can be used with this tool.

Ideally I'd develop a full SDK for my language of choice, but this seemed potentially more useful to the community due to its support for a fairly broad range of languages and platforms.

I hope it helps you make that rad bot you've been meaning to tinker with.

---

## How to Run the RPC Daemon
By default, the daemon listens on `0.0.0.0:58558`. This can be customized by setting the `MATRIX_BIND_ADDRESS` environment variable.
### VM / Metal
1. *(Optional)* Install preferred NodeJS version. (12.19.0)
    > `$ nvm use`
2. Install dependencies.
    > `$ npm i`
3. Build and run the daemon.
    > `$ npm run build`
    
    > `$ npm run start`
### Docker
Pre-built image from DockerHub: https://hub.docker.com/r/zhaytee/matrix-rpc-js

`$ docker run -d -p 58558:58558 zhaytee/matrix-rpc-js:1.0.1`

---

## How to Call RPCs

- Use one of the pre-built interfaces (in `proto/compiled/`)

### OR

1. Install grpc utilities (`protoc` and the grpc plugin)
    * https://grpc.io/docs/quickstart/
    * https://developers.google.com/protocol-buffers/docs/proto3
2. Use `proto/matrix.proto` to generate a grpc interface for the language/platform of your choice


---

## Contrived RPC Usage Examples
```
// Use StartSession to connect to a homeserver and start streaming events
// Multiple simultaneous sessions are supported
StartSession(
    session_id: customId || "default",
    homeserver: "matrix.org",
    user_id: "@nobody:matrix.org",
    display_name: "Nobody",
    device_id: "WTFBBQ123",
    access_token: "<opaque>",
    initial_presence: "online",
)
streaming response objects: {
    session_id: "some-session-id",
    type: "m.room.message",
    sender: "@nobody:matrix.org",
    room_id: "#farts:matrix.org",
    event_id: "<opaque>",
    content: <multiple>, // See "Events" section below in README.md
}

// If you need an access token, use GetAccessToken
// Access tokens are bound to a single device, so reuse the returned credentials
GetAccessToken(
    homeserver: "matrix.org",
    username: "nobody",
    password: "lmaotho",
)
response: {
    user_id: "@nobody:matrix.org",
    home_server: "matrix.org",
    access_token: "<opaque>",
    device_id: "WTFBBQ123",
}

// Join/leave a room
// NB: #farts may, in fact, not be an existing matrix.org room
JoinRoom(
    session_id: customId || "default",
    room_id: "#farts:matrix.org",
)
LeaveRoom(<same args as JoinRoom>)

// Send a text message to a room
SendTextMessage(
    session_id: customId || "default",
    room_id: "#farts:matrix.org",
    body: "I'm a talkative one, ain't I?",
)

// Acknowledge reading of a message or other event
SendReadReceipt(
    session_id: customId || "default",
    event_id: "<opaque>",
)
```

---

## Available Events
For details on the `content` payloads for each event (including common fields shared by every event), please see the `proto/matrix.proto` file.
- `m.room.message`: A message was received in a room in which the client is present.
- `m.presence`: A user's presence values have changed. (e.g. "online" -> "offline")
- `m.typing`: The list of visible typing users has changed.
- `x.ready`: An matrix-rpc-js custom extension event indicating that the client is ready. Until this event is fired, calls will be rejected with an error.

---

## TODO
- getVisibleRooms() -> []Room
- getRoom(roomId) -> Room
- isRoomEncrypted(roomId) -> bool
- ~~joinRoom(roomIdOrAlias)~~
- ~~leave(roomId)~~
- getUser(userId) -> User
- redactEvent(roomId, eventId)
- sendEmoteMessage(roomId, body)
- sendHtmlEmote(roomId, body, htmlBody)
- sendHtmlMessage(roomId, body, htmlBody)
- ~~sendTextMessage(roomId, body)~~
- sendHtmlNotice(roomId, body, htmlBody)
- sendImageMessage(roomId, url, info, text)
- sendNotice(roomId, body)
- ~~sendReadReceipt(event)~~
- sendTyping(roomId, isTyping, timeoutMs)
- setAvatarUrl(url)
- setDisplayName(name)
- setPresence({presence:"online"|"offline"|"unavailable", status_msg:""})
- setDeviceKnown(userId, deviceId)
- setDeviceVerified(userId, deviceId)
- uploadContent(file, { type: "mime", rawResponse: false, onlyContentUri: true, })

---

## License
```
The ISC License

Copyright (c) Isaac Z. Schlueter and Contributors

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
```
