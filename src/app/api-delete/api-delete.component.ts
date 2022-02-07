import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodosService } from '../todos.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-api-delete',
  templateUrl: './api-delete.component.html',
  styleUrls: ['./api-delete.component.css']
})
export class ApiDeleteComponent implements OnInit {

  messageBody: string = '';

  constructor(
    private todoService: TodosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.deleteTodo();
  }

  deleteTodo(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    let todo = this.todoService.getTodo(id);
    if (todo) {
      this.todoService.deleteTodo(todo);
      this.messageBody = 'success 200';
    } else {
      this.messageBody = 'no such todo 406';
    }
  }

}
