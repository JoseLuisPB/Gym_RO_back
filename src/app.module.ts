import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseInfo } from './db';
import { ExercisesModule } from './exercises/exercises.module';
import { Exercises } from './entities/exercises.entity';
import { UtilsService } from './utils/utils.service';
import { Group } from './entities/group.entity';
import { GroupModule } from './group/group.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: databaseInfo.host,
      port: databaseInfo.port,
      username: databaseInfo.username,
      password: databaseInfo.password,
      database: 'gym_routine_organizer',
      entities: [Exercises, Group],
      synchronize: false,
      autoLoadEntities: true,
    }),
    ExercisesModule,
    GroupModule,
  ],
  controllers: [AppController],
  providers: [AppService, UtilsService],
})
export class AppModule {}
