import {QueueId} from '../../entities/queue.entity';

export interface CreateNewListenerPort {
  /**
   * method for register listener and subscribe n change sound
   *
   */
  createNewListener(queueId: QueueId, wsConnection:any):Promise<void>
}
