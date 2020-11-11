import {Module, Global} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {QueueOrmEntity} from "./orm-entities/queue.orm-entity";
import {CreateQueueUseCaseSymbol} from "src/domain/pors/in/create-queue/create-queue.use-case";
import {QueuePersistenceAdapterService} from "./queue-persistence-adapter.service";
import {AddSoundToQueueUseCaseSymbol} from '../../domain/pors/in/add-sound-to-queue/add-sound-to-queue.use-case'
import {AddSoundToQueueService} from "src/domain/services/add-sound-to-queue.service";
import {CreateQueueService} from "src/domain/services/create-queue.service";

@Global()
@Module({
  imports:[
    TypeOrmModule.forFeature([QueueOrmEntity])
  ],
  providers:[
    QueuePersistenceAdapterService,
    {
      provide: AddSoundToQueueUseCaseSymbol,
      useFactory:(service:QueuePersistenceAdapterService)=>{
        return new AddSoundToQueueService(service, service)
      },
      inject: [QueuePersistenceAdapterService]
    },
    {
      provide: CreateQueueUseCaseSymbol,
      useFactory:(service:QueuePersistenceAdapterService)=>{
        return new CreateQueueService(service)
      },
      inject: [QueuePersistenceAdapterService]
    }
  ],
  exports:[
    CreateQueueUseCaseSymbol,
    AddSoundToQueueUseCaseSymbol
  ]
})
export class QueuePersustenceModule{}
