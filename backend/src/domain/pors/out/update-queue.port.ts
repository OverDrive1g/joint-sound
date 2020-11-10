import { QueueEntity } from '../../entities/queue.entity'


export interface UpdateQueuePort{
  updateQueue(queue:QueueEntity):Promise<QueueEntity>
}
