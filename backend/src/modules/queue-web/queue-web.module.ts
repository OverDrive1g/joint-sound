import {Module} from '@nestjs/common';
import {CreateQueueController} from './create-queue.controller'
 

@Module({
  controllers:[
    CreateQueueController
  ]
})
export class QueueWebModule{}
