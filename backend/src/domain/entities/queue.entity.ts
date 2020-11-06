import {SoundEntity} from "./sound.entity";


export class QueueEntity {
  constructor(
    private readonly _queueId:string,
    private readonly _name:string,
    private readonly _sounds:SoundEntity[],
  ){}

  get queueId():string{
    return this._queueId;
  }

  get name():string{
    return this._name;
  }

  get sounds():SoundEntity[]{
    return this._sounds;
  }
}
