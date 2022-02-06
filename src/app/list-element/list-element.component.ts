import { Component, Input, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';
import { Todo } from '../todo';
import { TodosService } from '../todos.service';
import { faCog } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.css']
})
export class ListElementComponent implements OnInit {

  @Input('todo') todo?: Todo;
  configIcon: any = faCog;


  constructor(
    private messageService: MessagesService,
    private todoService: TodosService
  ) { }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo): void {
    this.todoService.deleteTodo(todo);
    this.todo = undefined;
  }

}
