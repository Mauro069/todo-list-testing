import { Component, inject } from '@angular/core';
import { Todo, TodoStatus } from 'src/app/interfaces/todos.interfaces';
import { TodoService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
  newTodoDescription: string = '';
  newTodoStatus: TodoStatus = 'empty';

  private todosService = inject(TodoService);

  addTodo() {
    const newTodo: Todo = {
      id: Math.random(),
      description: this.newTodoDescription,
      status: this.newTodoStatus,
      createdAt: new Date(),
    };

    this.todosService.addTodo(newTodo);

    this.newTodoDescription = '';
    this.newTodoStatus = 'empty';
  }
}
