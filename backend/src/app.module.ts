import { Module } from '@nestjs/common';
import {TypeOrmModule } from '@nestjs/typeorm'


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'better-sqlite3',
      database: 'joint-sound.sqlite',
      logging:true,
      autoLoadEntities:true,
      migrations:[__dirname, '/migrations/**/*.ts'],
      migrationsRun:true,
      cli:{
        migrationsDir:'src/migrations',
      }
    })
  ],
})
export class AppModule {}
