import {QueueId} from '../../entities/queue.entity';

export interface MigrateListenerPort{
  /**
   * Method for change listener subscription
   */
  migrate(listenerId:string, migrateTo:QueueId):Promise<void>
}
