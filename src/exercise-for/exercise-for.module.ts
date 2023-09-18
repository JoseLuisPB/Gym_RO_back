import { Module } from '@nestjs/common';
import { ExerciseForController } from './exercise-for.controller';
import { ExerciseForService } from './exercise-for.service';

@Module({
  controllers: [ExerciseForController],
  providers: [ExerciseForService]
})
export class ExerciseForModule {}
