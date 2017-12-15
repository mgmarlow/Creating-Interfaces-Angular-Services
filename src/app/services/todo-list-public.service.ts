import { Injectable } from '@angular/core';
import { Todo, TodoListService } from './todo-list.service';

@Injectable()
export class TodoListPublicService implements TodoListService {
  getTodos(): Todo[] {
    const todos: Todo[] = [
      {
        title: 'get groceries',
        description: 'eggs, milk, etc.',
        done: false
      }
    ];

    return todos;
  }
}
