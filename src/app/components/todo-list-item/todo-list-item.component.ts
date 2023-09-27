import { Todo, TodoStatus } from 'src/app/interfaces/todos.interfaces';
import { TodoService } from 'src/app/services/todos.service';
import { Component, Input, inject } from '@angular/core';
import { traductions } from 'src/app/utils/traductions';
import { formOptions } from 'src/app/config/options';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
})
export class TodoListItemComponent {
  @Input() todo?: Todo;

  private todosService = inject(TodoService);
  public statusOptions = formOptions;

  get optionSelected() {
    return { value: this.todo?.status, name: traductions[this.todo?.status!] };
  }

  public removeTodo() {
    if (!this.todo) return;
    this.todosService.removeTodo(this.todo?.id);
  }

  public changeStatus(newStatus: { value: TodoStatus; name: string }) {
    if (this.todo?.id) {
      this.todosService.changeTodoStatus(this.todo?.id, newStatus.value);
    }
  }
}
