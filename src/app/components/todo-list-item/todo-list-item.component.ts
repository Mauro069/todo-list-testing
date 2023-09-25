import { Component, Input, inject } from '@angular/core';
import { Todo, TodoStatus } from 'src/app/interfaces/todos.interfaces';
import { TodoService } from 'src/app/services/todos.service';
import { traductions } from 'src/app/utils/traductions';

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

  get optionSelected() {
    return { value: this.todo?.status, name: traductions[this.todo?.status!] };
  }

  public changeStatus(newStatus: { value: TodoStatus; name: string }) {
    if (this.todo?.id) {
      this.todosService.changeTodoStatus(this.todo?.id, newStatus.value);
    }
  }
}
