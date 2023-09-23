import { Component, inject } from '@angular/core';
import { Orders } from 'src/app/interfaces/todos.interfaces';
import { TodoService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-orders',
  templateUrl: './todo-orders.component.html',
  styleUrls: ['./todo-orders.component.scss'],
})
export class TodoOrdersComponent {
  selectedOrder: Orders = 'newest';

  private todoService = inject(TodoService);

  orderByDate() {
    this.todoService.orderByDate(this.selectedOrder);
  }
}
