import { Injectable } from '@nestjs/common';
import {CreateQueuePort } from '../../domain/pors/out/create-queue.port'
import {QueueEntity} from 'src/domain/entities/queue.entity';
import {UpdateQueuePort} from 'src/domain/pors/out/update-queue.port';

@Injectable()
export class QueuePersistenceAdapterService 
  implements
    CreateQueuePort,
    UpdateQueuePort
{
  async createQueue(queue:QueueEntity):Promise<QueueEntity>{
    throw "err"
  }
  
  async updateQueue(queue:QueueEntity):Promise<QueueEntity>{
    throw "err"
  }
}
