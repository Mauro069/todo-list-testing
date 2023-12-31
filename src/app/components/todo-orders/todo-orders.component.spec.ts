import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoOrdersComponent } from './todo-orders.component';
import { TodoService } from 'src/app/services/todos.service';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { ArrowComponent } from '../dropdown/components/arrow.component';

describe('TodoOrdersComponent', () => {
  let component: TodoOrdersComponent;
  let fixture: ComponentFixture<TodoOrdersComponent>;
  let todoService: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoOrdersComponent, DropdownComponent, ArrowComponent],
      providers: [TodoService],
    });

    fixture = TestBed.createComponent(TodoOrdersComponent);
    component = fixture.componentInstance;
    todoService = TestBed.inject(TodoService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería establecer el orden predeterminado como "más nuevo"', () => {
    expect(component.selectedOrder.value).toBe('newest');
  });

  it('debería llamar a orderByDate en todoService cuando se llama a orderByDate', () => {
    spyOn(todoService, 'orderByDate');
    component.orderByDate({ name: 'Más Nueva a Más Vieja', value: 'newest' });
    expect(todoService.orderByDate).toHaveBeenCalledWith('newest');
  });
});
