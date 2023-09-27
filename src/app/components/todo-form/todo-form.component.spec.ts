import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoFormComponent } from './todo-form.component';
import { TodoService } from 'src/app/services/todos.service';
import { TodoStatus } from 'src/app/interfaces/todos.interfaces';
import { traductions } from 'src/app/utils/traductions';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { ArrowComponent } from '../dropdown/components/arrow.component';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;
  let todoService: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoFormComponent, DropdownComponent, ArrowComponent],
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
    component.newTodoStatus = {
      value: nuevoEstadoTarea,
      name: traductions[nuevoEstadoTarea],
    };

    const addTodoSpy = spyOn(todoService, 'addTodo').and.stub();

    component.addTodo();

    expect(addTodoSpy).toHaveBeenCalled();

    expect(component.newTodoDescription).toBe('');
    expect(component.newTodoStatus.value).toBe('empty');
  });
});
