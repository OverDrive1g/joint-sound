import {BaseUseCase} from '../base.use-case';
import {AddSoundToQueueCommand} from './add-sound-to-queue.command';

export interface AddSoundToQueueUseCase extends BaseUseCase<AddSoundToQueueCommand,any> {
}
