import { Injectable } from '@nestjs/common';
import { ExerciseFor } from 'src/entities/exerciseFor.entity';
import { ExerciseForDto } from './dto/exerciseFor.dto';
import { DataSource } from 'typeorm';

@Injectable()
export class ExerciseForService {
  private readonly exerciseForRepository = this.dataSource.getRepository(ExerciseFor);
  constructor(private dataSource: DataSource) {}

  async create(exerciseFor: ExerciseForDto) {
    try {
      return await this.exerciseForRepository.save(exerciseFor);
    } catch (error) {
      return error;
    }
  }

  async findAll(): Promise<ExerciseForDto[]> {
    try {
      return await this.exerciseForRepository.find();
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number): Promise<ExerciseForDto> {
    try {
      const response = await this.exerciseForRepository.findOne({ where: { id: id } });
      return response;
    } catch (error) {
      return error;
    }
  }

  async update(id: number, exerciseFor: ExerciseForDto): Promise<ExerciseForDto> {
    try {
      return await this.exerciseForRepository.save(exerciseFor);
    } catch (error) {
      return error;
    }
  }

  async delete(id: number): Promise<any> {
    try {
      return await this.exerciseForRepository.delete(id);
    } catch (error) {
      return error;
    }
  }
}
