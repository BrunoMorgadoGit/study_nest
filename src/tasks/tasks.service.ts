import { Injectable, NotFoundException } from '@nestjs/common';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable()
export class TasksService {
  private readonly tasks: Task[] = [
    {
      id: 1,
      title: 'Estudar NestJS',
      completed: false,
    },
    {
      id: 2,
      title: 'Praticar Git',
      completed: true,
    },
  ];

  findAll(): Task[] {
    return this.tasks;
  }

  findOne(id: number): Task {
    const task = this.tasks.find((item) => item.id === id);

    if (!task) {
      throw new NotFoundException(`Tarefa com ID ${id} não encontrada`);
    }

    return task;
  }
}