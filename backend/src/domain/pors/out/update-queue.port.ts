
import {Either} from '@sweet-monads/either'
import { QueueEntity} from '../../entities/queue.entity'

export interface UpdateQueuePort{
  updateQueue(queue:QueueEntity):Promise<Either<UpdateQueueError, QueueEntity>>
}

export class UpdateQueueError extends Error{name:'UpdateQueueError'}
