import {
  AddSoundToQueueUseCase,
  AddSoundToQueueError,
} from '../ports/in/add-sound-to-queue/add-sound-to-queue.use-case';
import { AddSoundToQueueCommand } from '../ports/in/add-sound-to-queue/add-sound-to-queue.command';
import { LoadQueuePort } from '../ports/out/load-queue.port';
import { Either, left, right } from '@sweet-monads/either';
import { UpdateQueuePort } from '../ports/out/update-queue.port';
import { LoadVideoInfoFromYtPort } from '../ports/out/load-video-info-from-yt.port';
import { SoundEntity } from '../entities/sound.entity';

export class AddSoundToQueueService implements AddSoundToQueueUseCase {
  constructor(
    private readonly _loadQueue: LoadQueuePort,
    private readonly _updateQueue: UpdateQueuePort,
    private readonly _loadVideoInfo: LoadVideoInfoFromYtPort,
  ) {}

  async execute(
    command: AddSoundToQueueCommand,
  ): Promise<Either<AddSoundToQueueError, void>> {
    const loadQueueResult = await this._loadQueue.loadQueue(command.queueId);
    if (loadQueueResult.isLeft()) {
      return left(new AddSoundToQueueError('Load queue error'));
    }

    const loadVideoInfoResult = await this._loadVideoInfo.loadInfo(
      command.soundSource,
    );
    if (loadVideoInfoResult.isLeft()) {
      return left(new AddSoundToQueueError('Load video info error'));
    }

    const videoInfo = loadVideoInfoResult.value;

    if (videoInfo.duration < 50 && videoInfo.duration > 600) {
      return left(
        new AddSoundToQueueError(
          'Video must be loger then 50 sec and shorter then 10 min.',
        ),
      );
    }
    if (videoInfo.viewCount < 3000) {
      return left(
        new AddSoundToQueueError('The video must have more than 3k viewing.'),
      );
    }

    const queueEntity = loadQueueResult.value;
    const thistrackFrom = 0;
    queueEntity.sounds.push(
      new SoundEntity('', command.soundSource, thistrackFrom),
    );

    const updateQueueResult = await this._updateQueue.updateQueue(queueEntity);

    return updateQueueResult
      .mapLeft(updateError => {
        console.log('Update error', updateError.stack);
        return new AddSoundToQueueError();
      })
      .mapRight(updateResult => {
        return;
      });
  }
}
