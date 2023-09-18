import { Injectable } from '@nestjs/common';
import { Group } from 'src/entities/group.entity';
import { DataSource } from 'typeorm';
import { GroupDto } from './dto/group.dto';

@Injectable()
export class GroupService {
  private readonly groupRepository = this.dataSource.getRepository(Group);
  constructor(private dataSource: DataSource) {}

  async create(group: GroupDto) {
    try {
      return await this.groupRepository.save(group);
    } catch (error) {
      return error;
    }
  }

  async findAll(): Promise<GroupDto[]> {
    try {
      return await this.groupRepository.find();
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number): Promise<GroupDto> {
    try {
      const response = await this.groupRepository.findOne({ where: { id: id } });
      return response;
    } catch (error) {
      return error;
    }
  }

  async update(id: number, group: GroupDto): Promise<GroupDto> {
    try {
      return await this.groupRepository.save(group);
    } catch (error) {
      return error;
    }
  }

  async delete(id: number): Promise<any> {
    try {
      return await this.groupRepository.delete(id);
    } catch (error) {
      return error;
    }
  }
}
