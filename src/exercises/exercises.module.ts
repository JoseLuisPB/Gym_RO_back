import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExercisesController } from './exercises.controller';
import { ExercisesService } from './exercises.service';
import { exercises } from 'src/entities/exercises.entity';
import { UtilsService } from 'src/utils/utils.service';

@Module({
  imports: [TypeOrmModule.forFeature([exercises])],
  controllers: [ExercisesController],
  providers: [ExercisesService, UtilsService],
})
export class ExercisesModule {}
