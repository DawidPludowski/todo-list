import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';
import { Todo } from './todo';

export enum SortingKey {
  TITLE = "title",
  ID = "id",
  DEADLINE = "deadline",
  CREATION = "creation"
}

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

  getSortedTodos(key: SortingKey): Todo[] {
    let todos = this.getTodos();
    if (key.valueOf() === "title") {
      todos.sort((a, b) => {
        let atitle = a.title.toLowerCase();
        let btitle = b.title.toLowerCase();
        return atitle.localeCompare(btitle);
      })
    } else if (key.valueOf() === "id") {
      todos.sort((a, b) => a.id - b.id);
    } else if (key.valueOf() === "creation") {
      todos.sort((a, b) => b.creationTime - a.creationTime);
    } else if (key.valueOf() === "deadline") {
      todos.sort((a, b) => b.deadlineTime - a.deadlineTime);
    } else {
      return [];
    }
    return todos;
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
    localStorage.setItem(this.todosKey, JSON.stringify(todos));
  }

  updateTodo(todo: Todo): void {
    todo.modificationTime = Date.now();
    let todos: Todo[] = this.getTodos();
    todos = todos.filter(p => p.id !== todo.id);
    todos.push(todo);
    localStorage.setItem(this.todosKey, JSON.stringify(todos));
  }

}
