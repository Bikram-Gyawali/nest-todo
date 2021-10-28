import { UpdateTodoDto } from './dto/updatetodo.dto';
import { CreateTodoDto } from './dto/createtodo.dto';
import { TodoService } from './todo.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('todo')
export class TodoController {
  constructor(private readonly service: TodoService) {}

  @Get()
  async index() {
    return await this.service.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: string) {
    return await this.service.findOne(id);
  }

  @Post()
  async create(@Body() CreateTodoDto: CreateTodoDto) {
    return await this.service.create(CreateTodoDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() UpdateTodoDto) {
    return await this.service.update(id, UpdateTodoDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.delete(id);
  }
}
