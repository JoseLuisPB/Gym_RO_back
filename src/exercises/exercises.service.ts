import { Injectable } from '@nestjs/common';
import { CreateExerciseDTO } from './dto/create-exercise.dto';
import { DataSource } from 'typeorm';
import { exercises } from 'src/entities/exercises.entity';

@Injectable()
export class ExercisesService {
  private readonly exerciseRepository = this.dataSource.getRepository(exercises);
  constructor(private dataSource: DataSource) {}

  async create(exercise: CreateExerciseDTO) {
    try {
      return await this.exerciseRepository.save(exercise);
    } catch (error) {
      return error;
    }
  }

  async findAll(): Promise<CreateExerciseDTO[]> {
    try {
      return await this.exerciseRepository.find();
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number): Promise<CreateExerciseDTO> {
    try {
      const response = await this.exerciseRepository.findOne({ where: { id: id } });
      return response;
    } catch (error) {
      return error;
    }
  }

  async update(id: number, exercise: CreateExerciseDTO): Promise<CreateExerciseDTO> {
    try {
      return await this.exerciseRepository.save(exercise);
    } catch (error) {
      return error;
    }
  }

  async delete(id: number): Promise<any> {
    try {
      return await this.exerciseRepository.delete(id);
    } catch (error) {
      return error;
    }
  }
}
