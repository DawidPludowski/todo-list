import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';
import { Todo } from '../todo';
import { TodosService, SortingKey } from '../todos.service';
import { faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  configIcon: any = faCog;

  constructor(
    private messageService: MessagesService,
    private todoService: TodosService
    ) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todos = this.todoService.getSortedTodos(SortingKey.CREATION);
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(p => p !== todo);
    this.todoService.deleteTodo(todo);
  }

  goToDetail(id: number) {
    
  }

}
