import { Injectable } from '@nestjs/common';
import { CreateIssueDto } from './dto/create-issue.dto';
import { UpdateIssueDto } from './dto/update-issue.dto';
import data from './entities/hardcode-data.entity';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class IssuesService {
  create(createIssueDto: CreateIssueDto) {
    console.log(createIssueDto);
    return createIssueDto;
  }

  findAll() {
    console.log(data);
    return data;
  }
  findOne(id: number) {
    const result = data.find((value) => value.id === id);
    if (!result) {
      throw new NotFoundException(`Issue with id ${id} not found`);
    }
    console.log(result);
    return result;
  }

  update(id: number, updateIssueDto: UpdateIssueDto) {
    const dataToUpdate = data.find((value) => value.id === id);

    if (!dataToUpdate) {
      throw new NotFoundException(`Issue with id ${id} not found`);
    }

    Object.assign(dataToUpdate, updateIssueDto);
    console.log(dataToUpdate);
    return dataToUpdate;
  }

  remove(id: number) {
    const index = data.findIndex((value) => value.id === id);
    if (index === -1) {
      throw new NotFoundException(`Issue with id ${id} not found`);
    }
    data.splice(index, 1);
    console.log(index);
    return `Issue with id ${id} removed successfully`;
  }
}
