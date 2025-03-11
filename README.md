# x_grpc-demo

```bash
npm install @grpc/grpc-js @grpc/proto-loader ts-protoc-gen
```


# gRPC JS plugin için
npm install -g grpc-tools

# TypeScript plugin için
npm install -g ts-protoc-gen




## proto compile
```bash
protoc --proto_path=. --js_out=import_style=commonjs:. --grpc_out=grpc_js:. --ts_out=. notification.proto
```




## Run
`node notification-service.js`



# generate protos

```bash
grpc_tools_node_protoc \
  --proto_path=. \
  --js_out=import_style=commonjs:. \
  --grpc_out=grpc_js:. \
  --ts_out=. \
  notification.proto
```


********************************************

protoc --version

sudo apt update
sudo apt install -y protobuf-compiler

npm install -g grpc-tools
npm install -g ts-protoc-gen

export PATH="$HOME/.npm-global/bin:$PATH"

grpc_tools_node_protoc --version
protoc-gen-ts --version



grpc_tools_node_protoc \
  --proto_path=. \
  --js_out=import_style=commonjs:. \
  --grpc_out=grpc_js:. \
  --ts_out=. \
  notification.proto