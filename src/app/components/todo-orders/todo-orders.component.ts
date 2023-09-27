import { Orders } from 'src/app/interfaces/todos.interfaces';
import { TodoService } from 'src/app/services/todos.service';
import { orderOptions } from 'src/app/config/options';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-todo-orders',
  templateUrl: './todo-orders.component.html',
  styleUrls: ['./todo-orders.component.scss'],
})
export class TodoOrdersComponent {
  private todoService = inject(TodoService);
  public selectedOrder: { value: Orders; name: string } = orderOptions[0];
  public orderOptions = orderOptions;

  orderByDate(selectedOrder: { value: Orders; name: string }) {
    this.selectedOrder = selectedOrder;
    this.todoService.orderByDate(selectedOrder.value);
  }
}
