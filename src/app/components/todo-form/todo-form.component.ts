import { Todo, TodoStatus } from 'src/app/interfaces/todos.interfaces';
import { TodoService } from 'src/app/services/todos.service';
import { formOptions } from 'src/app/config/options';
import { Component, inject } from '@angular/core';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
  private todosService = inject(TodoService);
  public newTodoDescription: string = '';
  public newTodoStatus: { value: TodoStatus; name: string } = formOptions[0];
  public statusOptions = formOptions;

  public addTodo() {
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
}
