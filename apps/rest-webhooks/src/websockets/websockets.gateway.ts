// src/chat/chat.gateway.ts
import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private server: Server;

  afterInit(server: Server) {
    this.server = server;
    console.log('WebSocket Initialized');
  }

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  // Listen to incoming messages from clients
  @SubscribeMessage('messageFromServer')
  handleMessage(
    @MessageBody() data: string,
    @ConnectedSocket() client: Socket,
  ) {
    console.log(`Received message from ${client.id}:`, data);

    // Send back to the same client
    client.emit('messageFromServer', `Echo: ${data}`);

    // Broadcast to all clients (except sender)
    client.broadcast.emit('broadcastFromServer', `${client.id}: ${data}`);
  }

  // Custom server-side emit example
  sendMessageToAll(msg: string) {
    this.server.emit('messageFromServer', msg);
  }
}
