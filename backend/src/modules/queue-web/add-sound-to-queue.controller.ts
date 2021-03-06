import { Controller, Post, Body, Param, Inject } from '@nestjs/common';
import {
  AddSoundToQueueUseCaseSymbol,
  AddSoundToQueueUseCase,
} from 'src/domain/ports/in/add-sound-to-queue/add-sound-to-queue.use-case';
import { AddSoundToQueueCommand } from 'src/domain/ports/in/add-sound-to-queue/add-sound-to-queue.command';

@Controller('/queue/add-sound')
export class AddSoundToQueueController {
  constructor(
    @Inject(AddSoundToQueueUseCaseSymbol)
    private readonly _addSoundService: AddSoundToQueueUseCase,
  ) {}

  @Post('/:queue_id')
  async addSound(@Body() soundData: any, @Param('queue_id') queueId: string) {
    const command = new AddSoundToQueueCommand(
      'test user id',
      queueId,
      soundData.url,
    );
    const result = await this._addSoundService.execute(command);

    return result.mapLeft(error => {
      return { error: error.name + error.message };
    });
  }
}
