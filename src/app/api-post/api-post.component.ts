import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodosService } from '../todos.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-api-post',
  templateUrl: './api-post.component.html',
  styleUrls: ['./api-post.component.css']
})
export class ApiPostComponent implements OnInit {

  responseBody: string = '';

  constructor(
    private todoService: TodosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.postTodo();
  }

  private postTodo(): void {
    this.route.queryParams.subscribe(params => {

      if (this.isMeetConditions(params)) {
        const todo = params as Todo;
        let title = todo.title.split("_").join(" ");
        let content = todo.content.split("_").join(" ");
        this.todoService.putTodo(title, content, todo.deadlineTime);
        this.responseBody = "Success 201";
      } else {
        this.responseBody = "Wrong data 400";
      }
    }
    );
  }

  private isMeetConditions(params: any): boolean {
    return (params["title"] && params["content"] && params["deadlinetime"]);
  }

}
