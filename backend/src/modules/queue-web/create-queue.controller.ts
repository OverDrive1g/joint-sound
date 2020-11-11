import {Controller, Post, Body, Inject} from '@nestjs/common'
import {CreateQueueUseCaseSymbol, CreateQueueUseCase} from 'src/domain/pors/in/create-queue/create-queue.use-case';
import {CreateQueueCommand} from 'src/domain/pors/in/create-queue/create-queue.command';
import {QueueEntity} from 'src/domain/entities/queue.entity';


@Controller('/queue/create')
export class CreateQueueController {
  constructor(
    @Inject(CreateQueueUseCaseSymbol)
    private readonly _createQueue:CreateQueueUseCase
  ){}
  @Post()
  async createQueue(@Body() queueData:any){
    const command = new CreateQueueCommand(new QueueEntity(null,queueData.name,[]), "test user id")
    return this._createQueue.execute(command)
  }
}
