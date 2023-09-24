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

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a todo', () => {
    const newTodo: Todo = {
      id: 1,
      description: 'Test Todo',
      status: 'empty',
      createdAt: '2023-09-22',
    };
    service.addTodo(newTodo);
    service.getTodos().subscribe((todos) => {
      expect(todos).toContain(newTodo);
    });
  });

  it('should remove a todo', () => {
    const todoIdToRemove = 1;
    service.removeTodo(todoIdToRemove);
    service.getTodos().subscribe((todos) => {
      const removedTodo = todos.find((todo) => todo.id === todoIdToRemove);
      expect(removedTodo).toBeUndefined();
    });
  });

  it('should filter todos by status', () => {
    const statusFilter: TodoStatus = 'empty';
    service.filterByStatus(statusFilter).subscribe((filteredTodos) => {
      expect(filteredTodos.every((todo) => todo.status === statusFilter)).toBe(
        true
      );
    });
  });

  it('should order todos by date (newest)', () => {
    service['todos'] = [...initialTodos];
    service.orderByDate('newest');
    service.getTodos().subscribe((orderedTodos) => {
      const orderedIds = orderedTodos.map((todo) => todo.id);
      const expectedOrder = initialTodos.map((todo) => todo.id).reverse();
      expect(orderedIds).toEqual(expectedOrder);
    });
  });

  it('should order todos by date (oldest)', () => {
    service['todos'] = [...initialTodos];
    service.orderByDate('oldest');
    service.getTodos().subscribe((orderedTodos) => {
      const orderedIds = orderedTodos.map((todo) => todo.id);
      const expectedOrder = initialTodos.map((todo) => todo.id);
      expect(orderedIds).toEqual(expectedOrder);
    });
  });
});
