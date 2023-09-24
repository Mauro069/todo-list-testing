import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoFormComponent } from './todo-form.component';
import { TodoService } from 'src/app/services/todos.service';
import { TodoStatus } from 'src/app/interfaces/todos.interfaces';
import { StatusPipe } from 'src/app/pipes/status.pipe';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;
  let todoService: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoFormComponent, StatusPipe],
      providers: [TodoService],
    });

    fixture = TestBed.createComponent(TodoFormComponent);
    component = fixture.componentInstance;
    todoService = TestBed.inject(TodoService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a new todo', () => {
    const newTodoDescription = 'Test Todo';
    const newTodoStatus: TodoStatus = 'empty';

    component.newTodoDescription = newTodoDescription;
    component.newTodoStatus = newTodoStatus;

    // Espía la función addTodo en el servicio antes de llamarla
    const addTodoSpy = spyOn(todoService, 'addTodo').and.stub();

    component.addTodo();

    // Verifica que se haya llamado a la función addTodo en el servicio
    expect(addTodoSpy).toHaveBeenCalled();

    // Verifica que los campos de entrada se hayan restablecido después de agregar la tarea
    expect(component.newTodoDescription).toBe('');
    expect(component.newTodoStatus).toBe('empty');
  });
});
