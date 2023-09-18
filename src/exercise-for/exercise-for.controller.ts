import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Response } from '../interfaces/response.interface';
import { ExerciseForService } from './exercise-for.service';
import { ExerciseForDto } from './dto/exerciseFor.dto';

@Controller('exercise-for')
export class ExerciseForController {
  constructor(private exerciseForService: ExerciseForService) {}

  @Post()
  async create(@Body() exerciseFor: ExerciseForDto): Promise<Response> {
    if (exerciseFor.hasOwnProperty('name')) {
      const response = await this.exerciseForService.create(exerciseFor);
      return { statusCode: 200, data: response };
    } else {
      return {
        statusCode: 422,
        error: `Property name is missing`,
        message: 'Unprocessable Content',
      };
    }
  }

  @Get()
  async findAll(): Promise<Response> {
    const response = await this.exerciseForService.findAll();
    return { statusCode: 200, data: response };
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Response> {
    const response = await this.exerciseForService.findOne(id);
    return { statusCode: 200, data: response };
  }

  @Put(':id')
  async updateExercise(@Param('id') id: number, @Body() exerciseFor: ExerciseForDto): Promise<Response> {
    if (exerciseFor.hasOwnProperty('name')) {
      const response = await this.exerciseForService.update(id, exerciseFor);
      return { statusCode: 200, data: response };
    } else {
      return {
        statusCode: 422,
        error: `Property name is missing`,
        message: 'Unprocessable Content',
      };
    }
  }

  @Delete(':id')
  async deleteExercise(@Param('id') id: number): Promise<Response> {
    const response = this.exerciseForService.delete(id);
    return { statusCode: 200, data: response };
  }
}
