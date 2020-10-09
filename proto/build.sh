#!/usr/bin/env sh

# ts/js
OUTDIR=./compiled/typescript
protoc \
	--plugin="protoc-gen-ts=`npm bin`/protoc-gen-ts" \
	--plugin="protoc-gen-grpc=`npm bin`/grpc_tools_node_protoc_plugin" \
	--js_out="import_style=commonjs,binary:${OUTDIR}" \
	--ts_out="mode=grpc-js:${OUTDIR}" \
	--grpc_out="grpc_js:${OUTDIR}" \
	matrix.proto

# golang
OUTDIR=./compiled/go
protoc \
	--go_opt=paths=source_relative \
	--go_out="${OUTDIR}" \
	--go-grpc_opt=paths=source_relative \
	--go-grpc_out="${OUTDIR}" \
	matrix.proto
