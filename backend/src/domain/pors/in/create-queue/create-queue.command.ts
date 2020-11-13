import { QueueEntity } from 'src/domain/entities/queue.entity';
import { UserId } from 'src/domain/entities/user.entity';

export class CreateQueueCommand {
  constructor(
    private readonly _queue: QueueEntity,
    private readonly _creatorId: UserId,
  ) {}

  get queue(): QueueEntity {
    return this._queue;
  }

  get creatorId(): UserId {
    return this._creatorId;
  }
}
