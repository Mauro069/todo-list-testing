import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { FormsModule } from '@angular/forms';
import { TodoFiltersComponent } from './components/todo-filters/todo-filters.component';
import { TodoOrdersComponent } from './components/todo-orders/todo-orders.component';
import { DatePipe } from './pipes/date.pipe';

import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ArrowComponent } from './components/dropdown/components/arrow.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoFormComponent,
    TodoListItemComponent,
    TodoFiltersComponent,
    TodoOrdersComponent,
    DropdownComponent,
    ArrowComponent,
    DatePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
