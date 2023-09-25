import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListItemComponent } from './todo-list-item.component';
import { TodoService } from 'src/app/services/todos.service';
import { Todo } from 'src/app/interfaces/todos.interfaces';

describe('TodoListItemComponent', () => {
  let component: TodoListItemComponent;
  let fixture: ComponentFixture<TodoListItemComponent>;
  let todoService: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListItemComponent],
      providers: [TodoService],
    });

    fixture = TestBed.createComponent(TodoListItemComponent);
    component = fixture.componentInstance;
    todoService = TestBed.inject(TodoService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a removeTodo en todoService cuando se llama a removeTodo', () => {
    const mockTodo: Todo = {
      id: 1,
      description: 'Tarea de prueba',
      status: 'empty',
      createdAt: '2023-09-22',
    };

    component.todo = mockTodo;

    spyOn(todoService, 'removeTodo');
    component.removeTodo();
    expect(todoService.removeTodo).toHaveBeenCalledWith(mockTodo.id);
  });

  it('no debería llamar a removeTodo en todoService cuando se llama a removeTodo con un objeto de tarea indefinido', () => {
    spyOn(todoService, 'removeTodo');
    component.removeTodo();
    expect(todoService.removeTodo).not.toHaveBeenCalled();
  });
});
