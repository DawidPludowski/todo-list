import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo-search',
  templateUrl: './todo-search.component.html',
  styleUrls: ['./todo-search.component.css']
})
export class TodoSearchComponent implements OnInit {

  constructor(
    private messageService: MessagesService,
    private todoService: TodosService
  ) { }

  ngOnInit(): void {
  }

}
