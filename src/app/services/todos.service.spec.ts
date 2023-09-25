import { Todo, TodoStatus } from '../interfaces/todos.interfaces';
import { TestBed } from '@angular/core/testing';
import { TodoService } from './todos.service';

const initialTodos: Todo[] = [
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

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it('debería ser creado', () => {
    expect(service).toBeTruthy();
  });

  it('debería agregar un todo', () => {
    const newTodo: Todo = {
      id: 3,
      description: 'Test Todo',
      status: 'empty',
      createdAt: '2023-09-22',
    };
    service.addTodo(newTodo);
    service.getTodos().subscribe((todos) => {
      expect(todos).toContain(newTodo);
    });
  });

  it('debería eliminar un todo', () => {
    const todoIdToRemove = 1;
    service.removeTodo(todoIdToRemove);
    service.getTodos().subscribe((todos) => {
      const removedTodo = todos.find((todo) => todo.id === todoIdToRemove);
      expect(removedTodo).toBeUndefined();
    });
  });

  it('debería filtrar los todos por estado', () => {
    const statusFilter: TodoStatus = 'empty';
    service.filterByStatus(statusFilter).subscribe((filteredTodos) => {
      expect(filteredTodos.every((todo) => todo.status === statusFilter)).toBe(
        true
      );
    });
  });

  it('debería ordenar los todos por fecha (más nuevo primero)', () => {
    service['todos'] = [...initialTodos];
    service.orderByDate('newest');
    service.getTodos().subscribe((orderedTodos) => {
      const orderedIds = orderedTodos.map((todo) => todo.id);
      const expectedOrder = initialTodos.map((todo) => todo.id).reverse();
      expect(orderedIds).toEqual(expectedOrder);
    });
  });

  it('debería ordenar los todos por fecha (más antiguo primero)', () => {
    service['todos'] = [...initialTodos];
    service.orderByDate('oldest');
    service.getTodos().subscribe((orderedTodos) => {
      const orderedIds = orderedTodos.map((todo) => todo.id);
      const expectedOrder = initialTodos.map((todo) => todo.id);
      expect(orderedIds).toEqual(expectedOrder);
    });
  });

  it('debería cambiar el estado de un todo', () => {
    const newTodo: Todo = {
      id: 3,
      description: 'Test Todo',
      status: 'empty',
      createdAt: '2023-09-22',
    };

    service.addTodo(newTodo)



    const todoIdToChange = 3;
    const newStatus: TodoStatus = 'in-progress';
    service.changeTodoStatus(todoIdToChange, newStatus);
    service.getTodos().subscribe((todos) => {
      const changedTodo = todos.find((todo) => todo.id === todoIdToChange);
      expect(changedTodo?.status).toBe(newStatus);
    });
  });
});
