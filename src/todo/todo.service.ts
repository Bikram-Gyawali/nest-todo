import { UpdateTodoDto } from './dto/updatetodo.dto';
import { CreateTodoDto } from './dto/createtodo.dto';
import { Todo, TodoDoc } from './schema/todo.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private readonly model: Model<TodoDoc>) {}

  async findAll(): Promise<Todo[]> {
    return await this.model.find().exec();
  }
  async findOne(id: string): Promise<Todo> {
    return await this.model.findById(id).exec();
  }
  async create(CreateTodoDto: CreateTodoDto): Promise<Todo> {
    return await new this.model({
      ...CreateTodoDto,
      createdAt: new Date(),
    }).save();
  }

  async update(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    return await this.model.findByIdAndUpdate(id, updateTodoDto).exec();
  }

  async delete(id: string): Promise<Todo> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
