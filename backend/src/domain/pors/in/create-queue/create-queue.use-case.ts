import {BaseUseCase} from "../base.use-case";
import {CreateQueueCommand} from "./create-queue.command";
import {QueueId} from "src/domain/entities/queue.entity";

export interface CreateQueueUseCase 
  extends BaseUseCase<CreateQueueCommand,QueueId> {
}
