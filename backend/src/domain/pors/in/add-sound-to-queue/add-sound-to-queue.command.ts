import {UserId} from '../../../entities/user.entity';
import {QueueId} from '../../../entities/queue.entity';

export class AddSoundToQueueCommand{
  constructor(
    private _creatorId:UserId,
    private _queueId:QueueId,
    private _soundSource: string,
  ){}

  get creatorId(){
    return this._creatorId;
  }

  get queueId(){
    return this._queueId;
  }

  get soundSource(){
    return this._soundSource;
  }
}
