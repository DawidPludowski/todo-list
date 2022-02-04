import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';
import { Todo } from '../todo';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  constructor(
    private messageService: MessagesService,
    private todoService: TodosService
    ) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todos = this.todoService.getTodos();
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(p => p !== todo);
    this.todoService.deleteTodo(todo);
  }

  goToDetail(id: number) {
    
  }

}
