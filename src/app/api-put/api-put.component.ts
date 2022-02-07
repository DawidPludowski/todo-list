import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-api-put',
  templateUrl: './api-put.component.html',
  styleUrls: ['./api-put.component.css']
})
export class ApiPutComponent implements OnInit {

  responseBody: string = '';

  constructor(
    private todoService: TodosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.putTodo();
  }

  private putTodo(): void {
    this.route.queryParams.subscribe(params => {

      if (this.isMeetConditions(params)) {

        let id = Number(this.route.snapshot.paramMap.get('id'));
        let updatedTodo = this.todoService.getTodo(id);

        if (updatedTodo) {
          console.log(params);

          updatedTodo.title = params['title'].split("_").join(" ");
          updatedTodo.content = params['content'].split("_").join(" ");
          updatedTodo.deadlineTime = params['deadlinetime'];
          this.todoService.updateTodo(updatedTodo);
          this.responseBody = "Success 201";
        } else {
          this.responseBody = "No such a todo 406";
        }
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
