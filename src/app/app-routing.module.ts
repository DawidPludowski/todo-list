import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiPostComponent } from './api-post/api-post.component';
import { ApiViewComponent } from './api-view/api-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: ListViewComponent },
  { path: 'detail/:id', component: TodoDetailComponent },
  { path: 'add', component: TodoAddComponent },
  { path: 'api/todos', component: ApiViewComponent },
  { path: 'api/post', component: ApiPostComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
