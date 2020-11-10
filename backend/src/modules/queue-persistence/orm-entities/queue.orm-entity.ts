import { Column, Entity, PrimaryColumn} from 'typeorm'


@Entity('queue', {})
export class QueueOrmEntity {
  @Column()
  @PrimaryColumn()
  queueId: string

  @Column()
  title: string

  @Column()
  ownerId: string
}
