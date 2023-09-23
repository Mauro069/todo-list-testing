import { Component, Input, inject } from '@angular/core';
import { Todo } from 'src/app/interfaces/todos.interfaces';
import { TodoService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
})
export class TodoListItemComponent {
  @Input() todo?: Todo;

  private todosService = inject(TodoService);

  removeTodo() {
    if (!this.todo) return;
    this.todosService.removeTodo(this.todo?.id);
  }
}
