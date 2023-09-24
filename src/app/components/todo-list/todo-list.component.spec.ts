import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListComponent } from './todo-list.component';
import { Todo } from 'src/app/interfaces/todos.interfaces';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';
import { StatusPipe } from 'src/app/pipes/status.pipe';
import { DatePipe } from 'src/app/pipes/date.pipe';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoListComponent,
        TodoListItemComponent,
        StatusPipe,
        DatePipe,
      ],
    });

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display todos when todoList is provided', () => {
    const mockTodos: Todo[] = [
      {
        id: 1,
        description: 'Todo 1',
        status: 'empty',
        createdAt: '2023-09-22',
      },
      {
        id: 2,
        description: 'Todo 2',
        status: 'empty',
        createdAt: '2023-09-23',
      },
    ];

    component.todoList = mockTodos;

    console.log(component);
    fixture.detectChanges();

    const todoElements =
      fixture.nativeElement.querySelectorAll('.todo-list-item');
    expect(todoElements.length).toBe(mockTodos.length);
  });

  it('should not display any todos when todoList is null', () => {
    component.todoList = null;
    fixture.detectChanges();

    const todoElements =
      fixture.nativeElement.querySelectorAll('.todo-list-item');
    expect(todoElements.length).toBe(0);
  });
});
