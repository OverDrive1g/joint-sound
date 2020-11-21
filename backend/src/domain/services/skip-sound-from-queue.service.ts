import {Either, right, left} from '@sweet-monads/either'

import {SkipSoundFromQueueUseCase, SkipSoundError} from '../ports/in/skip-sound-from-queue/skip-sound-from-queue.use-case';
import {SkipSoundFromQueueCommand} from '../ports/in/skip-sound-from-queue/skip-sound-from-queue.command';
import {LoadQueuePort} from '../ports/out/load-queue.port';
import {UpdateQueuePort} from '../ports/out/update-queue.port';
import {QueueEntity} from '../entities/queue.entity';

export class SkipSoundFromQueue implements SkipSoundFromQueueUseCase {

  constructor(
   private readonly _loadQueue: LoadQueuePort,
   private readonly _updateQueue:UpdateQueuePort,
  ){} 

  async execute(command:SkipSoundFromQueueCommand):Promise<Either<SkipSoundError, void>>{
    //TODO: check user permission
    const loadResult = await this._loadQueue.loadQueue(command.queueId)
    if(loadResult.isLeft()){
      return left(new SkipSoundError("Can't load queue from storage"))
    }
    
    const queue:QueueEntity = loadResult.value
    const soundIndex = queue.sounds.findIndex(sound=>sound.name === command.sound.name)
    if(soundIndex === -1){
      return left(new SkipSoundError("Can't found sound in queue"))
    }
  
   queue.sounds.splice(soundIndex,1)

   const updateResult = await this._updateQueue.updateQueue(queue)
   if(updateResult.isLeft()){
     return left(new SkipSoundError("Can't update queue"))
   }

   return right((()=>{return})());//FIXME
  }

}
