import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';
import { TodosService } from '../todos.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  title: string = "";
  content: string = "";
  deadline: string = "";

  constructor(
    private messageService: MessagesService,
    private todoService: TodosService,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

  saveChanges(): void {
    this.todoService.putTodo(this.title, this.content,  Date.parse(this.deadline))
    this.goBack();
  }

}
