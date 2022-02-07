import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { ListViewComponent } from './list-view/list-view.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { ApiViewComponent } from './api-view/api-view.component';
import { WrapTextPipe } from './wrap-text.pipe';
import { CommonModule } from '@angular/common';
import { ListElementComponent } from './list-element/list-element.component';
import { FormsModule } from '@angular/forms';
import { ApiPostComponent } from './api-post/api-post.component';
import { ApiPutComponent } from './api-put/api-put.component';
import { ApiDeleteComponent } from './api-delete/api-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoDetailComponent,
    ListViewComponent,
    TodoAddComponent,
    ApiViewComponent,
    WrapTextPipe,
    ListElementComponent,
    ApiPostComponent,
    ApiPutComponent,
    ApiDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CommonModule,
    FormsModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
