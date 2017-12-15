import { Component, OnInit } from '@angular/core';
import { TodoListPublicService } from '../services/todo-list-public.service';
import { TodoListService, Todo } from '../services/todo-list.service';
import { TodoListPrivateService } from '../services/todo-list-private.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  providers: [
    { provide: TodoListService, useClass: TodoListPublicService }
  ]
})
export class TodoListComponent implements OnInit {
  todos: Todo[];

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
    this.todos = this.todoListService.getTodos();
  }

}
