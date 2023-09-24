import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoOrdersComponent } from './todo-orders.component';
import { TodoService } from 'src/app/services/todos.service';

describe('TodoOrdersComponent', () => {
  let component: TodoOrdersComponent;
  let fixture: ComponentFixture<TodoOrdersComponent>;
  let todoService: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoOrdersComponent],
      providers: [TodoService],
    });

    fixture = TestBed.createComponent(TodoOrdersComponent);
    component = fixture.componentInstance;
    todoService = TestBed.inject(TodoService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set default order to "newest"', () => {
    expect(component.selectedOrder).toBe('newest');
  });

  it('should call orderByDate on todoService when orderByDate is called', () => {
    spyOn(todoService, 'orderByDate');
    component.orderByDate();
    expect(todoService.orderByDate).toHaveBeenCalledWith('newest');
  });
});
