import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseForService } from './exercise-for.service';

describe('ExerciseForService', () => {
  let service: ExerciseForService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExerciseForService],
    }).compile();

    service = module.get<ExerciseForService>(ExerciseForService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
