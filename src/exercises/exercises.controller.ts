import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateExerciseDTO } from './dto/create-exercise.dto';
import { ExercisesService } from './exercises.service';
import { Response } from '../interfaces/response.interface';
import { UtilsService } from 'src/utils/utils.service';

@Controller('exercises')
export class ExercisesController {
  constructor(private exercisesService: ExercisesService, private utils: UtilsService) {}

  @Post()
  async create(@Body() exercise: CreateExerciseDTO): Promise<Response> {
    const checkBody = this.utils.isCreateExerciseDTO(exercise);

    if (checkBody.isValid) {
      const response = await this.exercisesService.create(exercise);
      return { statusCode: 200, data: response };
    } else {
      return {
        statusCode: 422,
        error: `Properties << ${checkBody.message} >> are missing`,
        message: 'Unprocessable Content',
      };
    }
  }

  @Get()
  async findAll(): Promise<Response> {
    const response = await this.exercisesService.findAll();
    return { statusCode: 200, data: response };
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Response> {
    const response = await this.exercisesService.findOne(id);
    return { statusCode: 200, data: response };
  }

  @Put(':id')
  async updateExercise(@Param('id') id: number, @Body() exercise: CreateExerciseDTO): Promise<Response> {
    const checkBody = this.utils.isCreateExerciseDTO(exercise);

    if (checkBody.isValid) {
      const response = await this.exercisesService.update(id, exercise);
      return { statusCode: 200, data: response };
    } else {
      return {
        statusCode: 422,
        error: `Properties << ${checkBody.message} >> are missing`,
        message: 'Unprocessable Content',
      };
    }
  }

  @Delete(':id')
  async deleteExercise(@Param('id') id: number): Promise<Response> {
    const response = this.exercisesService.delete(id);
    return { statusCode: 200, data: response };
  }
}
