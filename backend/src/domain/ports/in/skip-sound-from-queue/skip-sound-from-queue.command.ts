import { UserId } from 'src/domain/entities/user.entity';
import { QueueId } from 'src/domain/entities/queue.entity';
import { SoundEntity } from 'src/domain/entities/sound.entity';

export class SkipSoundFromQueueCommand {
  constructor(
    private _actorId: UserId,
    private _queueId: QueueId,
    private _sound: SoundEntity,
  ) {}

  get actorId() {
    return this._actorId;
  }

  get queueId() {
    return this._queueId;
  }

  get sound() {
    return this._sound;
  }
}
