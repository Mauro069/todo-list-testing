import { FilterStatus } from 'src/app/interfaces/todos.interfaces';
import { TodoService } from 'src/app/services/todos.service';
import { traductions } from 'src/app/utils/traductions';
import { filterOptions } from 'src/app/config/options';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-todo-filters',
  templateUrl: './todo-filters.component.html',
  styleUrls: ['./todo-filters.component.scss'],
})
export class TodoFiltersComponent {
  public selectedStatus: { name: string; value: FilterStatus } = filterOptions[0]
  private todosService = inject(TodoService);
  public filterOptions = filterOptions

  constructor() {
    this.todosService.filterSubject.pipe().subscribe((filter) => {
      this.selectedStatus = { name: traductions[filter], value: filter };
    });
  }

  filterByStatus(selectedStatus: { name: string; value: FilterStatus }) {
    this.todosService.filterByStatus(selectedStatus.value);
  }

}
