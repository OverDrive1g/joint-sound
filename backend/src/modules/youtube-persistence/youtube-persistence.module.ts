import { Global, Module } from '@nestjs/common';
import { YoutubePersistenceAdapterService } from './youtube-persistence-adapter.service';

@Global()
@Module({
  providers: [YoutubePersistenceAdapterService],
  exports: [YoutubePersistenceAdapterService],
})
export class YoutubePersistenceModule {}
