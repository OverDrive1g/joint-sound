import {Either, right, left} from '@sweet-monads/either'

import {SkipSoundFromQueueUseCase, SkipSoundError} from '../ports/in/skip-sound-from-queue/skip-sound-from-queue.use-case';
import {SkipSoundFromQueueCommand} from '../ports/in/skip-sound-from-queue/skip-sound-from-queue.command';

export class SkipSoundFromQueue implements SkipSoundFromQueueUseCase {
  
  async execute(command):Promise<Either<SkipSoundError, void>>{
    throw "";
  }

}
