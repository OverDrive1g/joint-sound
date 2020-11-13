import { QueueId } from '../../entities/queue.entity';
import { SoundEntity } from 'src/domain/entities/sound.entity';

export interface NotifyListenersPort {
  notify(queueId: QueueId, nextSound: SoundEntity): Promise<void>;
}
