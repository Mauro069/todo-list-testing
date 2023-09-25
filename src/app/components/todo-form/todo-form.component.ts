import { Component, inject } from '@angular/core';
import { Todo, TodoStatus } from 'src/app/interfaces/todos.interfaces';
import { TodoService } from 'src/app/services/todos.service';
import { traductions } from 'src/app/utils/traductions';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
  newTodoDescription: string = '';
  newTodoStatus: { value: TodoStatus; name: string } = {
    value: 'empty',
    name: 'Por empezar',
  };

  private todosService = inject(TodoService);

  addTodo() {
    const newTodo: Todo = {
      id: Math.random(),
      description: this.newTodoDescription,
      status: this.newTodoStatus.value,
      createdAt: new Date(),
    };

    this.todosService.addTodo(newTodo);

    this.newTodoDescription = '';
    this.newTodoStatus = {
      value: 'empty',
      name: 'Por empezar',
    };
  }

  public changeStatus(newStatus: { value: TodoStatus; name: string }) {
    this.newTodoStatus = { value: newStatus.value, name: newStatus.name };
  }

  public statusOptions = [
    {
      value: 'empty',
      name: traductions['empty'],
    },
    {
      value: 'in-progress',
      name: traductions['in-progress'],
    },
    {
      value: 'finished',
      name: traductions['finished'],
    },
  ];
}
