import { Component, inject } from '@angular/core';
import { Todo } from './interfaces/todos.interfaces';
import { TodoService } from './services/todos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public todoList?: Todo[] | null;
  private todosService = inject(TodoService);
  private todosSuscription: Subscription;

  constructor() {
    this.todosSuscription = this.todosService.getTodos().subscribe((todos) => {
      this.todoList = todos;
    });
  }

  ngOnDestroy() {
    this.todosSuscription.unsubscribe();
  }
}
