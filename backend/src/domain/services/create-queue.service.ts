import {CreateQueueUseCase, CreateQueueError} from '../pors/in/create-queue/create-queue.use-case'
import {CreateQueueCommand} from '../pors/in/create-queue/create-queue.command';
import {QueueId} from '../entities/queue.entity';
import {CreateQueuePort} from '../pors/out/create-queue.port';
import {Either} from '@sweet-monads/either';

export class CreateQueueService implements CreateQueueUseCase{
  constructor(
    private readonly _createQueuePort:CreateQueuePort
  ){}
  async execute(command:CreateQueueCommand):Promise<Either<CreateQueueError, QueueId>>{
    throw "err";
  } 
}
