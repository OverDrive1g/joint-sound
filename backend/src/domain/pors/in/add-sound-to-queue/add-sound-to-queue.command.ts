import {UserId} from '../../../entities/user.entity';
import {QueueId} from '../../../entities/queue.entity';
import {SoundEntity} from '../../../entities/sound.entity';

export class AddSoundToQueueCommand{
  constructor(
    private _creatorId:UserId,
    private _queueId:QueueId,
    private _sound: SoundEntity,
  ){}

  get creatorId(){
    return this._creatorId;
  }

  get queueId(){
    return this._queueId;
  }

  get sound(){
    return this._sound;
  }
}
