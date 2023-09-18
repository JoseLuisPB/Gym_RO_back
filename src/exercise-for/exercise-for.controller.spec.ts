import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseForController } from './exercise-for.controller';

describe('ExerciseForController', () => {
  let controller: ExerciseForController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExerciseForController],
    }).compile();

    controller = module.get<ExerciseForController>(ExerciseForController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
