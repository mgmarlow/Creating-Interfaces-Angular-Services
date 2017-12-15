import { Injectable } from '@angular/core';
import { Todo, TodoListService } from './todo-list.service';

@Injectable()
export class TodoListPrivateService implements TodoListService {
  getTodos(): Todo[] {
    const todos: Todo[] = [
      {
        title: 'secret',
        description: 'All of my deepest, darkest secrets.',
        done: false
      }
    ];

    return todos;
  }
}
