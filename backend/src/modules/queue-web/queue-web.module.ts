import { Module } from '@nestjs/common';
import { CreateQueueController } from './create-queue.controller';
import { AddSoundToQueueController } from './add-sound-to-queue.controller';

@Module({
  controllers: [CreateQueueController, AddSoundToQueueController],
})
export class QueueWebModule {}
