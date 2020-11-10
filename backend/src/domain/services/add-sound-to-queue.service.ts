import {AddSoundToQueueUseCase} from '../pors/in/add-sound-to-queue/add-sound-to-queue.use-case';
import {AddSoundToQueueCommand} from '../pors/in/add-sound-to-queue/add-sound-to-queue.command';
import {CreateQueuePort} from '../pors/out/create-queue.port';

export class AddSoundToQueueService implements AddSoundToQueueUseCase{

  constructor(
  ){}

  async execute(command:AddSoundToQueueCommand){
    console.log(command)
    throw "Not implemented"; 
  }

}
