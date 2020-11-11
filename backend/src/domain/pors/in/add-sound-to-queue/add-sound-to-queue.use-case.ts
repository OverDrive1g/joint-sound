import {Either} from '@sweet-monads/either'
import {BaseUseCase} from '../base.use-case';
import {AddSoundToQueueCommand} from './add-sound-to-queue.command';

export const AddSoundToQueueUseCaseSymbol = Symbol('AddSoundToQueueUseCase')
export interface AddSoundToQueueUseCase extends BaseUseCase<AddSoundToQueueCommand,Either<AddSoundToQueueError, void>> {
}

export class AddSoundToQueueError extends Error{name:'AddSoundToQueueError'}
