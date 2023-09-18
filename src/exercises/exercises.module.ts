import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExercisesController } from './exercises.controller';
import { ExercisesService } from './exercises.service';
import { Exercises } from 'src/entities/exercises.entity';
import { UtilsService } from 'src/utils/utils.service';

@Module({
  imports: [TypeOrmModule.forFeature([Exercises])],
  controllers: [ExercisesController],
  providers: [ExercisesService, UtilsService],
})
export class ExercisesModule {}
