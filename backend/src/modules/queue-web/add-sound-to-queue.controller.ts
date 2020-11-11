import {Controller, Post, Body, Param, Inject} from "@nestjs/common";
import {AddSoundToQueueUseCaseSymbol, AddSoundToQueueUseCase} from "src/domain/pors/in/add-sound-to-queue/add-sound-to-queue.use-case";
import {AddSoundToQueueCommand} from "src/domain/pors/in/add-sound-to-queue/add-sound-to-queue.command";
import {SoundEntity} from "src/domain/entities/sound.entity";

@Controller('/queue/add-sound')
export class AddSoundToQueueController{

  constructor(
    @Inject(AddSoundToQueueUseCaseSymbol)
    private readonly _addSoundService:AddSoundToQueueUseCase
  ){}

  @Post('/:queue_id')
  async addSound(
    @Body() soundData:any,
    @Param('queue_id') queueId:string
  ){
    const command = new AddSoundToQueueCommand("test user id", queueId,
                           new SoundEntity(soundData.name, soundData.source))
    return this._addSoundService.execute(command)
  }
}
