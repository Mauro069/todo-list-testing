import { FilterStatus } from 'src/app/interfaces/todos.interfaces';
import { TodoService } from 'src/app/services/todos.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-todo-filters',
  templateUrl: './todo-filters.component.html',
  styleUrls: ['./todo-filters.component.scss'],
})
export class TodoFiltersComponent {
  public selectedStatus: FilterStatus = 'all';
  private todosService = inject(TodoService);

  constructor() {
    this.todosService.filterSubject.pipe().subscribe((filter) => {
      this.selectedStatus = filter;
    });
  }

  filterByStatus() {
    this.todosService.filterByStatus(this.selectedStatus);
  }
}
