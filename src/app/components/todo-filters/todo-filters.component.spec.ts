import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoFiltersComponent } from './todo-filters.component';
import { TodoService } from 'src/app/services/todos.service';
import { FilterStatus } from 'src/app/interfaces/todos.interfaces';
import { of } from 'rxjs';
import { StatusPipe } from 'src/app/pipes/status.pipe';

describe('TodoFiltersComponent', () => {
  let component: TodoFiltersComponent;
  let fixture: ComponentFixture<TodoFiltersComponent>;
  let todoService: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoFiltersComponent, StatusPipe],
      providers: [TodoService],
    });

    fixture = TestBed.createComponent(TodoFiltersComponent);
    component = fixture.componentInstance;
    todoService = TestBed.inject(TodoService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter todos by status', () => {
    const statusFilter: FilterStatus = 'empty';

    component.selectedStatus = statusFilter;
    const filterByStatusSpy = spyOn(
      todoService,
      'filterByStatus'
    ).and.returnValue(of([]));

    component.filterByStatus();

    expect(filterByStatusSpy).toHaveBeenCalledWith(statusFilter);
  });

  it('should update selectedStatus when filterSubject changes', () => {
    const statusFilter: FilterStatus = 'in-progress';

    // Simula un cambio en el filterSubject del servicio
    todoService.filterSubject.next(statusFilter);

    // Verifica que selectedStatus se haya actualizado correctamente
    expect(component.selectedStatus).toBe(statusFilter);
  });
});
