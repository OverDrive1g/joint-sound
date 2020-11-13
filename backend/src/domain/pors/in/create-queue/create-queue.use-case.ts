import { BaseUseCase } from '../base.use-case';
import { CreateQueueCommand } from './create-queue.command';
import { QueueId } from 'src/domain/entities/queue.entity';
import { Either } from '@sweet-monads/either';

export const CreateQueueUseCaseSymbol = Symbol('CreateQueueUseCase');
export type CreateQueueUseCase = BaseUseCase<CreateQueueCommand, Either<CreateQueueError, QueueId>>
export class CreateQueueError extends Error {
  name: 'CreateQueueError';
}
