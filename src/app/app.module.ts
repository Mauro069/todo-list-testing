import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { TodoFiltersComponent } from './components/todo-filters/todo-filters.component';
import { TodoOrdersComponent } from './components/todo-orders/todo-orders.component';
import { ArrowComponent } from './components/dropdown/components/arrow.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from './pipes/date.pipe';
import { NgModule } from '@angular/core';

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
