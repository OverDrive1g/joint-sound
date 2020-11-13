import { Either } from '@sweet-monads/either';
import { QueueId, QueueEntity } from '../../entities/queue.entity';

export interface LoadQueuePort {
  loadQueue(queueId: QueueId): Promise<Either<LoadQueueError, QueueEntity>>;
}

export class LoadQueueError extends Error {
  name: 'LoadQueueError';
}
