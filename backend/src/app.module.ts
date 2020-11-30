import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QueuePersistenceModule } from './modules/queue-persistence/queue-persistence.module';
import { QueueWebModule } from './modules/queue-web/queue-web.module';
import { WebsocketModule } from './modules/websocket/websocket.module';
import { YoutubePersistenceModule } from './modules/youtube-persistence/youtube-persistence.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: process.env.DATABASE_PATH,
      logging: true,
      autoLoadEntities: true,
      migrations: [__dirname, '/migrations/**/*.ts'],
      migrationsRun: true,
      cli: {
        migrationsDir: 'src/migrations',
      },
    }),
    YoutubePersistenceModule,
    QueuePersistenceModule,
    QueueWebModule,
    WebsocketModule,
  ],
})
export class AppModule {}
