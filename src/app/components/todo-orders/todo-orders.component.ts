import { Component, inject } from '@angular/core';
import { Orders } from 'src/app/interfaces/todos.interfaces';
import { TodoService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-orders',
  templateUrl: './todo-orders.component.html',
  styleUrls: ['./todo-orders.component.scss'],
})
export class TodoOrdersComponent {
  selectedOrder: { value: Orders; name: string } = {
    value: 'newest',
    name: 'Más Nueva a Más Vieja',
  };

  private todoService = inject(TodoService);

  orderByDate(selectedOrder: { value: Orders; name: string }) {
    this.selectedOrder = selectedOrder 
    this.todoService.orderByDate(selectedOrder.value);
  }

  public orderOptions = [
    {
      value: 'newest',
      name: 'Más Nueva a Más Vieja',
    },
    {
      value: 'oldest',
      name: 'Más Vieja a Más Nueva',
    },
  ];
}
