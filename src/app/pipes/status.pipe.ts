import { Pipe, PipeTransform } from '@angular/core';
import { TodoStatus } from '../interfaces/todos.interfaces';

@Pipe({
  name: 'status',
})
export class StatusPipe implements PipeTransform {
  private values = {
    empty: 'Por empezar',
    'in-progress': 'En proceso',
    finished: 'Terminada',
  };

  transform(value: TodoStatus): string {
    return this.values[value];
  }
}
