import { FilterStatus, Todo, TodoStatus } from '../interfaces/todos.interfaces';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];
  private todosSubject = new BehaviorSubject<Todo[]>(this.todos);
  public filterSubject = new BehaviorSubject<FilterStatus>('all');

  constructor() {
    this.loadFromLocalStorage();
    this.setupFiltering();
    this.orderByDate('newest');
  }

  private loadFromLocalStorage() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      this.todos = JSON.parse(storedTodos);
    }
  }

  private setupFiltering() {
    this.filterSubject.subscribe((status) => {
      const filteredTodos =
        status === 'all'
          ? this.todos
          : this.todos.filter((todo) => todo.status === status);
      this.todosSubject.next(filteredTodos);
    });
  }

  public addTodo(newTodo: Todo) {
    this.todos.push(newTodo);
    this.filterByStatus('all');
    this.orderByDate('newest');
    this.update();
  }

  public removeTodo(todoId: Todo['id']) {
    this.todos = this.todos.filter((todo) => todo.id !== todoId);
    this.update();
  }

  public getTodos(): Observable<Todo[]> {
    return this.todosSubject.asObservable();
  }

  public filterByStatus(status: FilterStatus): Observable<Todo[]> {
    this.filterSubject.next(status);
    return this.todosSubject.asObservable();
  }

  public orderByDate(order: 'newest' | 'oldest') {
    this.todos.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return order === 'newest' ? dateB - dateA : dateA - dateB;
    });
    this.update();
  }

  private update() {
    this.todosSubject.next(this.todos);
    this.updateLocalStorage();
  }

  private updateLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
