import { Global, Module } from '@nestjs/common';
import { TestGateway } from './test.gateway';

@Global()
@Module({
  providers: [TestGateway],
})
export class WebsocketModule {}
