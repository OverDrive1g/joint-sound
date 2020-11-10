import {Module, Global} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {QueueOrmEntity} from "./orm-entities/queue.orm-entity";
import {CreateQueueUseCaseSymbol} from "src/domain/pors/in/create-queue/create-queue.use-case";
import {QueuePersistenceAdapterService} from "./queue-persistence-adapter.service";


@Global()
@Module({
  imports:[
    TypeOrmModule.forFeature([QueueOrmEntity])
  ],
  providers:[
    QueuePersistenceAdapterService,
 
  ],
  exports:[
    CreateQueueUseCaseSymbol
  ]
})
export class QueuePersustenceModule{}
