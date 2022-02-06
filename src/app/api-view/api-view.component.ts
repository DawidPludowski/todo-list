import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-api-view',
  templateUrl: './api-view.component.html',
  styleUrls: ['./api-view.component.css']
})
export class ApiViewComponent implements OnInit {

  todosJson: string = "";

  constructor(
    private todosService: TodosService
  ) { }

  ngOnInit(): void {
    const todos: Todo[] = this.todosService.getTodos();
    const todoJson: string = JSON.stringify(todos);
    this.todosJson = todoJson;
  }

}
