import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiDeleteComponent } from './api-delete/api-delete.component';
import { ApiPostComponent } from './api-post/api-post.component';
import { ApiPutComponent } from './api-put/api-put.component';
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
  { path: 'api/post', component: ApiPostComponent},
  { path: 'api/put/:id', component: ApiPutComponent },
  { path: 'api/delete/:id', component: ApiDeleteComponent }
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
