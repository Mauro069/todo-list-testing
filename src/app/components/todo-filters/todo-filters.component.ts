import { FilterStatus } from 'src/app/interfaces/todos.interfaces';
import { TodoService } from 'src/app/services/todos.service';
import { Component, inject } from '@angular/core';
import { traductions } from 'src/app/utils/traductions';

@Component({
  selector: 'app-todo-filters',
  templateUrl: './todo-filters.component.html',
  styleUrls: ['./todo-filters.component.scss'],
})
export class TodoFiltersComponent {
  public selectedStatus: { name: string; value: FilterStatus } = {
    value: 'all',
    name: traductions['all'],
  };
  private todosService = inject(TodoService);

  constructor() {
    this.todosService.filterSubject.pipe().subscribe((filter) => {
      this.selectedStatus = { name: traductions[filter], value: filter };
    });
  }

  filterByStatus(selectedStatus: { name: string; value: FilterStatus }) {
    this.todosService.filterByStatus(selectedStatus.value);
  }

  public filterOptions = [
    {
      value: 'all',
      name: traductions['all'],
    },
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
