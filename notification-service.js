// notification-service.js
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync('notification.proto', {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const notificationProto = grpc.loadPackageDefinition(packageDefinition).notification;

function sendNotification(call, callback) {
  const count = call.request.count;
  const message = `Counter ${count} oldu! Bildirim gönderildi.`;
  console.log(message); // Burada gerçek bir bildirim sistemi olabilir
  callback(null, { message });
}

const server = new grpc.Server();
server.addService(notificationProto.NotificationService.service, { sendNotification });
server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
  server.start();
  console.log('Notification Service 50051 portunda çalışıyor');
});