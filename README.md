# x_grpc-demo

Bu proje, gRPC ve TypeScript kullanarak basit bir bildirim (notification) servisi örneği sunar.

![image](https://github.com/user-attachments/assets/d7808a4a-dc64-452e-9c9e-69b68bdd8ec8)

# Gereksinimler
- Node.js
- npm
- Protobuf Compiler (protoc)
- Global olarak yüklü grpc-tools ve ts-protoc-gen

# Kurulum
Bagimlilikları yükle:
```bash
npm install @grpc/grpc-js @grpc/proto-loader ts-protoc-gen
```

Global araçları yüklemek için:

```bash
# gRPC JS plugin için
npm install -g grpc-tools

# TypeScript plugin için
npm install -g ts-protoc-gen
```

# Proto Dosyalarını Derleme

Protobuf dosyalarını derlemek için aşağıdaki komutları kullanabilirsiniz. Bu komutlar, hem JavaScript hem de TypeScript çıktısı üretir:

```bash
protoc --proto_path=. \
       --js_out=import_style=commonjs:. \
       --grpc_out=grpc_js:. \
       --ts_out=. \
       notification.proto
```

Alternatif:
```bash
grpc_tools_node_protoc \
  --proto_path=. \
  --js_out=import_style=commonjs:. \
  --grpc_out=grpc_js:. \
  --ts_out=. \
  notification.proto
```


# Notification Servisi Calistirma

```bash
node notification-service.js
```

# Diger Komutlar

```bash
protoc --version
sudo apt update
sudo apt install -y protobuf-compiler

npm install -g grpc-tools
npm install -g ts-protoc-gen

export PATH="$HOME/.npm-global/bin:$PATH"

grpc_tools_node_protoc --version
protoc-gen-ts --version
```
