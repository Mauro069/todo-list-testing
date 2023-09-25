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

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería agregar una nueva tarea', () => {
    const nuevaDescripcionTarea = 'Tarea de prueba';
    const nuevoEstadoTarea: TodoStatus = 'empty';

    component.newTodoDescription = nuevaDescripcionTarea;
    component.newTodoStatus = nuevoEstadoTarea;

    const addTodoSpy = spyOn(todoService, 'addTodo').and.stub();

    component.addTodo();

    expect(addTodoSpy).toHaveBeenCalled();

    expect(component.newTodoDescription).toBe('');
    expect(component.newTodoStatus).toBe('empty');
  });
});
