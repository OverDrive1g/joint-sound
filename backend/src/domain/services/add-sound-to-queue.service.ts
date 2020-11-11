import {AddSoundToQueueUseCase, AddSoundToQueueError} from '../pors/in/add-sound-to-queue/add-sound-to-queue.use-case';
import {AddSoundToQueueCommand} from '../pors/in/add-sound-to-queue/add-sound-to-queue.command';
import {LoadQueuePort} from '../pors/out/load-queue.port';
import {Either,left, right} from '@sweet-monads/either';
import {UpdateQueuePort} from '../pors/out/update-queue.port';

export class AddSoundToQueueService implements AddSoundToQueueUseCase{

  constructor(
    private readonly _loadQueue:LoadQueuePort,
    private readonly _updateQueue:UpdateQueuePort
  ){}

  async execute(command:AddSoundToQueueCommand):Promise<Either<AddSoundToQueueError, void>>{
    let loadResult = await this._loadQueue.loadQueue(command.queueId)
    
    if(loadResult.isLeft()){
      return left(new AddSoundToQueueError('Load queue error'))
    }

    const queueEntity = loadResult.value
    queueEntity.sounds.push(command.sound)

    const updateQueueResult = await this._updateQueue.updateQueue(queueEntity)
    
    return updateQueueResult
      .mapLeft(updateError=>{
        console.log('Update error', updateError.stack)
        return new AddSoundToQueueError()
      })
      .mapRight(updateResult=>{
        return
      })
  }

}
