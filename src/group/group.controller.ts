import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Response } from '../interfaces/response.interface';
import { GroupService } from './group.service';
import { GroupDto } from './dto/group.dto';

@Controller('group')
export class GroupController {
  constructor(private groupService: GroupService) {}

  @Post()
  async create(@Body() group: GroupDto): Promise<Response> {
    if (group.hasOwnProperty('name')) {
      const response = await this.groupService.create(group);
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
    const response = await this.groupService.findAll();
    return { statusCode: 200, data: response };
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Response> {
    const response = await this.groupService.findOne(id);
    return { statusCode: 200, data: response };
  }

  @Put(':id')
  async updateExercise(@Param('id') id: number, @Body() group: GroupDto): Promise<Response> {
    if (group.hasOwnProperty('name')) {
      const response = await this.groupService.update(id, group);
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
    const response = this.groupService.delete(id);
    return { statusCode: 200, data: response };
  }
}
