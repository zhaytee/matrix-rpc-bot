go 1.15

module github.com/zhaytee/matrix-rpc-bot/examples/go

replace github.com/zhaytee/matrix-rpc-bot/proto/compiled/go => ../../proto/compiled/go

require (
	github.com/zhaytee/matrix-rpc-bot/proto/compiled/go v0.0.0-00010101000000-000000000000
	google.golang.org/grpc v1.33.0
	google.golang.org/protobuf v1.25.0 // indirect
)
