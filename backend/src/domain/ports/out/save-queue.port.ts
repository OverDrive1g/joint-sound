import { QueueEntity } from '../../entities/queue.entity';
import { Either } from '@sweet-monads/either';

export interface SaveQueuePort {
  saveQueue(queue: QueueEntity): Promise<Either<SaveQueueError, QueueEntity>>;
}

export class SaveQueueError extends Error {
  name: 'SaveQueueError';
}
