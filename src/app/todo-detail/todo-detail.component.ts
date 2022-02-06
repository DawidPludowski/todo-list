import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TodosService } from '../todos.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  @Input() todo? : Todo;
  deadline: string = "";

  constructor(
    private todoService: TodosService,
    private messageService: MessagesService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getTodo();
  }

  getTodo(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.todo = this.todoService.getTodo(id);
  }

  goBack(): void {
    this.location.back();
  }

  saveChanges(): void {
    if (this.todo) {
      const newDealine = Date.parse(this.deadline);
      this.todo.deadlineTime = newDealine;
      this.todoService.updateTodo(this.todo);
    }
    this.goBack();
  }

}
