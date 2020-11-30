import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect, ConnectedSocket
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class TestGateway implements OnGatewayInit,OnGatewayConnection,OnGatewayDisconnect {

  @WebSocketServer()
  server: Server;
  subscriptions = [] as {id:string,queue:string,intervalId:NodeJS.Timeout}[];

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
  
  @SubscribeMessage('subscribeToQueue')
  subscribeToQueue(
    @MessageBody() data: string,
    @ConnectedSocket() client: Socket
  ): string {
    console.log('subscribeToQueue', data)
    this.subscribeClient(client, data)
    return 'ok';
  }
  @SubscribeMessage('unsubscribeToQueue')
  unsubscribeFromQueue(
    @MessageBody() data: string,
    @ConnectedSocket() client: Socket
  ): string {
    console.log('unsubscribeToQueue', data)
    this.unsubscribeClient(client, data)
    return ;
  }


  subscribeClient(client:Socket,queue:string){
    const intervalId = setInterval(()=>{
      client.emit('next-track', JSON.stringify({trackId:1}))
    }, 5000)

    this.subscriptions.push({
      id:client.id,
      queue,
      intervalId
    })
  }

  unsubscribeClient(client:Socket,queue:string){
    let foundSubscription = this.subscriptions.find(itm=>itm.id === client.id && itm.queue === queue)
    if(foundSubscription){
      clearInterval(foundSubscription.intervalId)
    }
  }
}
