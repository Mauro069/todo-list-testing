import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListComponent } from './todo-list.component';
import { Todo } from 'src/app/interfaces/todos.interfaces';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';
import { StatusPipe } from 'src/app/pipes/status.pipe';
import { DatePipe } from 'src/app/pipes/date.pipe';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { ArrowComponent } from '../dropdown/components/arrow.component';

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
        DropdownComponent,
        ArrowComponent,
      ],
    });

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar las tareas cuando se proporciona una lista de tareas', () => {
    const tareasMock: Todo[] = [
      {
        id: 1,
        description: 'Tarea 1',
        status: 'empty',
        createdAt: '2023-09-22',
      },
      {
        id: 2,
        description: 'Tarea 2',
        status: 'empty',
        createdAt: '2023-09-23',
      },
    ];

    component.todoList = tareasMock;
    fixture.detectChanges();

    const elementosDeTareas =
      fixture.nativeElement.querySelectorAll('.todo-list-item');
    expect(elementosDeTareas.length).toBe(tareasMock.length);
  });

  it('no debería mostrar ninguna tarea cuando la lista de tareas es nula', () => {
    component.todoList = null;
    fixture.detectChanges();

    const elementosDeTareas =
      fixture.nativeElement.querySelectorAll('.todo-list-item');
    expect(elementosDeTareas.length).toBe(0);
  });
});
