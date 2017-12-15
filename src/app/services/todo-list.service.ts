import { Injectable } from '@angular/core';

export interface Todo {
  title: string;
  description: string;
  done: boolean;
}

@Injectable()
export abstract class TodoListService {
  abstract getTodos(): Todo[];
}
