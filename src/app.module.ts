import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseInfo } from './db';
import { ExercisesModule } from './exercises/exercises.module';
import { exercises } from './entities/exercises';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: databaseInfo.host,
      port: databaseInfo.port,
      username: databaseInfo.username,
      password: databaseInfo.password,
      database: 'gym_routine_organizer',
      entities: [exercises],
      synchronize: false,
      autoLoadEntities: true,
    }),
    ExercisesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
