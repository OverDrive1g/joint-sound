import {Either} from '@sweet-monads/either';
import { BaseUseCase } from '../base.use-case';
import {SkipSoundFromQueueCommand} from './skip-sound-from-queue.command';

export type SkipSoundFromQueueUseCase = BaseUseCase<SkipSoundFromQueueCommand, Either<SkipSoundError, void>>

export class SkipSoundError extends Error{name:'SkipSoundError'}
