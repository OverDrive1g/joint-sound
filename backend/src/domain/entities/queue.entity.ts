import { SoundEntity } from './sound.entity';

export type QueueId = string | null;
export class QueueEntity {
  constructor(
    private readonly _queueId: QueueId,
    private readonly _name: string,
    private readonly _sounds: SoundEntity[],
  ) {}

  get queueId(): QueueId {
    return this._queueId;
  }

  get name(): string {
    return this._name;
  }

  get sounds(): SoundEntity[] {
    return this._sounds;
  }
}
