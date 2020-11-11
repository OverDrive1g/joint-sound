import {CreateQueueUseCase, CreateQueueError} from '../pors/in/create-queue/create-queue.use-case'
import {CreateQueueCommand} from '../pors/in/create-queue/create-queue.command';
import {QueueId} from '../entities/queue.entity';
import {SaveQueuePort} from '../pors/out/save-queue.port';
import {Either} from '@sweet-monads/either';

export class CreateQueueService implements CreateQueueUseCase{
  constructor(
    private readonly _saveQueuePort:SaveQueuePort
  ){}

  async execute(command:CreateQueueCommand):Promise<Either<CreateQueueError, QueueId>>{

    let saveResult = await this._saveQueuePort.saveQueue(command.queue)

    return saveResult
      .mapLeft(error=>{
        console.error(error.stack)
        return new CreateQueueError('Error on save queue to storage')
      })
      .mapRight(queue=>{
        return queue.queueId;
      })
    
  } 
}
