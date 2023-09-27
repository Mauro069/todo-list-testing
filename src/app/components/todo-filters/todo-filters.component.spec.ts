import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoFiltersComponent } from './todo-filters.component';
import { TodoService } from 'src/app/services/todos.service';
import { FilterStatus } from 'src/app/interfaces/todos.interfaces';
import { of } from 'rxjs';
import { traductions } from 'src/app/utils/traductions';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { ArrowComponent } from '../dropdown/components/arrow.component';

describe('TodoFiltersComponent', () => {
  let component: TodoFiltersComponent;
  let fixture: ComponentFixture<TodoFiltersComponent>;
  let todoService: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoFiltersComponent, DropdownComponent, ArrowComponent],
      providers: [TodoService],
    });

    fixture = TestBed.createComponent(TodoFiltersComponent);
    component = fixture.componentInstance;
    todoService = TestBed.inject(TodoService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería filtrar tareas por estado', () => {
    const estadoFiltro: FilterStatus = 'empty';

    component.selectedStatus = {
      name: traductions[estadoFiltro],
      value: estadoFiltro,
    };

    const filterByStatusSpy = spyOn(
      todoService,
      'filterByStatus'
    ).and.returnValue(of([]));

    component.filterByStatus(component.selectedStatus);

    expect(filterByStatusSpy).toHaveBeenCalledWith(estadoFiltro);
  });

  it('debería actualizar selectedStatus cuando cambia filterSubject', () => {
    const estadoFiltro: FilterStatus = 'in-progress';

    todoService.filterSubject.next(estadoFiltro);

    expect(component.selectedStatus.value).toBe(estadoFiltro);
  });
});
