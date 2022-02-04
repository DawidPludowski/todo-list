import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';
import { Todo } from './todo';


@Injectable({
  providedIn: 'root'
})
export class TodosService implements OnInit {

  private todosKey: string = "todos";

  constructor() { }

  ngOnInit(): void {
  }

  getTodos(): Todo[] {
    const json: string | null = localStorage.getItem(this.todosKey);
    if (json) {
      const todos: Todo[] = JSON.parse(json);
      return todos;
    } else {
      return [];
    }
  }

  getTodo(id: number): Todo | undefined {
    let todos: Todo[] = this.getTodos();
    let todo: Todo | undefined = todos.filter(p => p.id === id)[0];
    return todo;
  }
 
  putTodo(title: string, content: string, deadline: number): void {

    let todos: Todo[] = this.getTodos();
    let nextId: number = todos.length > 0 ? Math.max(...todos.map(p => p.id)) + 1 : 1;

    let todo: Todo = {
      id: nextId,
      title: title,
      content: content,
      creationTime: Date.now(),
      modificationTime: Date.now(),
      deadlineTime: deadline
    };

    todos.push(todo);
    localStorage.setItem(this.todosKey, JSON.stringify(todos));
  }

  deleteTodo(todo: Todo): void {
    let todos: Todo[] = this.getTodos();
    todos = todos.filter(p => p.id != todo.id);
    console.log(todos.length);
    localStorage.setItem(this.todosKey, JSON.stringify(todos));
  }

}
