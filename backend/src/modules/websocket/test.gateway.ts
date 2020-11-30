import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class TestGateway implements OnGatewayInit,OnGatewayConnection,OnGatewayDisconnect {

  @WebSocketServer()
  server: Server;

  afterInit() {
    console.log('Ws init');
  }
  handleConnection(client: Socket, ...args: any[]) {
    client.emit('welcome', { message: 'Welcome!', id: client.id })
    console.log('Client connect');
  }
  handleDisconnect(client: Socket) {
    console.log('Client disconnect');
  }
  @SubscribeMessage('events')
  handleEvent(@MessageBody() data: string): string {
    console.log('sub ', data)
    return data;
  }
  @SubscribeMessage('identity')
  async identity(@MessageBody() data: number): Promise<number> {
    return data;
  }
}
