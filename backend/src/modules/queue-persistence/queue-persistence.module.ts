import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QueueOrmEntity } from './orm-entities/queue.orm-entity';
import { CreateQueueUseCaseSymbol } from 'src/domain/ports/in/create-queue/create-queue.use-case';
import { QueuePersistenceAdapterService } from './queue-persistence-adapter.service';
import { AddSoundToQueueUseCaseSymbol } from '../../domain/ports/in/add-sound-to-queue/add-sound-to-queue.use-case';
import { AddSoundToQueueService } from 'src/domain/services/add-sound-to-queue.service';
import { CreateQueueService } from 'src/domain/services/create-queue.service';
import { YoutubePersistenceAdapterService } from '../youtube-persistence/youtube-persistence-adapter.service';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([QueueOrmEntity]),
    YoutubePersistenceAdapterService,
  ],
  providers: [
    QueuePersistenceAdapterService,
    {
      provide: AddSoundToQueueUseCaseSymbol,
      useFactory: (service: QueuePersistenceAdapterService) => {
        return new AddSoundToQueueService(service, service);
      },
      inject: [QueuePersistenceAdapterService],
    },
    {
      provide: CreateQueueUseCaseSymbol,
      useFactory: (service: QueuePersistenceAdapterService) => {
        return new CreateQueueService(service);
      },
      inject: [QueuePersistenceAdapterService],
    },
  ],
  exports: [AddSoundToQueueUseCaseSymbol, CreateQueueUseCaseSymbol],
})
export class QueuePersistenceModule {}
