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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call removeTodo on todoService when removeTodo is called', () => {
    // Crear un mock para el objeto todo
    const mockTodo: Todo = {
      id: 1,
      description: 'Test Todo',
      status: 'empty',
      createdAt: '2023-09-22',
    };

    // Establecer el objeto todo en el componente
    component.todo = mockTodo;

    spyOn(todoService, 'removeTodo'); // Espiar el método removeTodo del servicio
    component.removeTodo();
    expect(todoService.removeTodo).toHaveBeenCalledWith(mockTodo.id); // Verificar que se llamó con el ID correcto
  });

  it('should not call removeTodo on todoService when removeTodo is called with undefined todo', () => {
    spyOn(todoService, 'removeTodo'); // Espiar el método removeTodo del servicio
    component.removeTodo();
    expect(todoService.removeTodo).not.toHaveBeenCalled(); // Verificar que no se llamó
  });
});
