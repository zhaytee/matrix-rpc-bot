#!/usr/bin/env sh

# js & ts
OUTDIR=./compiled/typescript
$(npm bin)/grpc_tools_node_protoc \
	--plugin="protoc-gen-ts=`npm bin`/protoc-gen-ts" \
	--plugin="protoc-gen-grpc=`npm bin`/grpc_tools_node_protoc_plugin" \
	--js_out="import_style=commonjs,binary:${OUTDIR}" \
	--grpc_out="grpc_js:${OUTDIR}" \
	--ts_out="service=grpc-node,mode=grpc-js:${OUTDIR}" \
	matrix.proto
sed -i -- 's/import \* as grpc from "grpc";/import \* as grpc from "@grpc\/grpc-js";/g' compiled/typescript/matrix_grpc_pb.d.ts
rm -f compiled/typescript/matrix_grpc_pb.d.ts--

# golang
OUTDIR=./compiled/go
protoc \
	--go_opt=paths=source_relative \
	--go_out="${OUTDIR}" \
	--go-grpc_opt=paths=source_relative \
	--go-grpc_out="${OUTDIR}" \
	matrix.proto
