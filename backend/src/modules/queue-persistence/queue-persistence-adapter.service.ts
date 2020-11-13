import { Injectable } from '@nestjs/common';
import { Either, right, left } from '@sweet-monads/either';
import { QueueEntity, QueueId } from 'src/domain/entities/queue.entity';
import {
  UpdateQueuePort,
  UpdateQueueError,
} from 'src/domain/pors/out/update-queue.port';
import {
  LoadQueuePort,
  LoadQueueError,
} from 'src/domain/pors/out/load-queue.port';
import {
  SaveQueuePort,
  SaveQueueError,
} from 'src/domain/pors/out/save-queue.port';
import { v4 as uuid } from 'uuid';
import {
  LoadVideoInfoFromYtPort,
  LoadVideoInfoFromYtError,
  VideoInfo,
} from 'src/domain/pors/out/load-video-info-from-yt.port';
@Injectable()
export class QueuePersistenceAdapterService
  implements
    SaveQueuePort,
    UpdateQueuePort,
    LoadQueuePort,
    LoadVideoInfoFromYtPort {
  private _queues: QueueEntity[];

  constructor() {
    this._queues = [];
  }

  async loadQueue(
    queueId: QueueId,
  ): Promise<Either<LoadQueueError, QueueEntity>> {
    try {
      const foundQueue = this._queues.find(queue => queue.queueId === queueId);
      if (!foundQueue) {
        return left(new LoadQueueError('Queue not found'));
      }

      return right(foundQueue);
    } catch (e) {
      return left(new LoadQueueError());
    }
  }

  async updateQueue(
    newQueue: QueueEntity,
  ): Promise<Either<UpdateQueueError, QueueEntity>> {
    try {
      const foundQueueIndex = this._queues.findIndex(
        queue => queue.queueId === newQueue.queueId,
      );
      if (foundQueueIndex === -1) {
        return left(new UpdateQueueError('Queue not found'));
      }

      this._queues[foundQueueIndex] = newQueue;

      return right(newQueue);
    } catch (e) {
      return left(new UpdateQueueError());
    }
  }

  async saveQueue(
    queue: QueueEntity,
  ): Promise<Either<SaveQueueError, QueueEntity>> {
    const newQueueId = uuid();

    //TODO add check

    const newQueueEntity = new QueueEntity(newQueueId, queue.name, []);

    this._queues.push(newQueueEntity);

    return right(newQueueEntity);
  }

  async loadInfo(
    videoId: string,
  ): Promise<Either<LoadVideoInfoFromYtError, VideoInfo>> {
    return right({
      duration: 120,
      viewCount: 5000,
    });
  }
}
