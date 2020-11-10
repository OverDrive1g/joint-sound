import {QueueEntity} from '../../entities/queue.entity'

export interface CreateQueuePort {  
  createQueue(queue:QueueEntity):Promise<QueueEntity>
}
