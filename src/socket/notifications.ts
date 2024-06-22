import { Server as SocketIOServer, Socket } from 'socket.io';
import { io as ClientIo } from 'socket.io-client';

const setupSocketEvents = (io: SocketIOServer) => {
  // Connect to the notification microservice
  const microserviceSocket = ClientIo('http://localhost:1000');

  microserviceSocket.on('connect', () => {
    console.log('Connected to Notification Service');
  });

  microserviceSocket.on('notification', (notification: any) => {
    console.log('Received notification from microservice:', notification);
    // Forward the received notification to the connected client
    io.emit('notification', notification);
  });

  io.on('connection', (socket: Socket) => {
    console.log('New client connected to Gateway');

    socket.on('disconnect', () => {
      console.log('Client disconnected from Gateway');
    });
  });
};

export const NotificationService = {
  setupSocketEvents,
};
