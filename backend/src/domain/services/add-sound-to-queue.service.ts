import {AddSoundToQueueUseCase, AddSoundToQueueError} from '../pors/in/add-sound-to-queue/add-sound-to-queue.use-case';
import {AddSoundToQueueCommand} from '../pors/in/add-sound-to-queue/add-sound-to-queue.command';
import {LoadQueuePort} from '../pors/out/load-queue.port';
import {Either,left, right} from '@sweet-monads/either';

export class AddSoundToQueueService implements AddSoundToQueueUseCase{

  constructor(
    private readonly _loadQueue:LoadQueuePort,
  ){}

  async execute(command:AddSoundToQueueCommand):Promise<Either<AddSoundToQueueError, void>>{
    let loadResult = await this._loadQueue.loadQueue(command.queueId)
    
    if(loadResult.isLeft()){
      return left(new AddSoundToQueueError('Load queue error'))
    }

   //TODO save


    return right((()=>{})()) // THIS IS DIRTY HACK
  }

}
