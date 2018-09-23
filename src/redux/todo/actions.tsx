import { Action } from 'redux';
import { Todo } from './types';

export enum TodoAction {
  ADD_TODO = 'TODO::ADD_TODO',
  NEW_TODO = 'TODO::NEW_TODO',

  FETCH_TODOS = 'TODO::FETCH_TODOS',
  FETCH_TODOS_SUCCESS = 'TODO::FETCH_TODOS_SUCCESS',
  FETCH_TODOS_FAILURE = 'TODO::FETCH_TODOS_FAILURE',

  REMOVE_TODO = 'TODO::REMOVE_TODO',
  TODO_REMOVED = 'TODO::TODO_REMOVED'
}

export namespace TodoAction {
  export interface AddTodo extends Action<TodoAction.ADD_TODO> {
    payload: Todo;
  }
  export interface NewTodo extends Action<TodoAction.NEW_TODO> {
    payload: Todo;
  }

  export interface FetchTodos extends Action<TodoAction.FETCH_TODOS> {}
  export interface FetchTodosSuccess extends Action<TodoAction.FETCH_TODOS_SUCCESS> {
    payload: Todo[];
  }
  export interface FetchTodosFailure extends Action<TodoAction.FETCH_TODOS_FAILURE> {
    error: string;
  }

  export interface RemoveTodo extends Action<TodoAction.REMOVE_TODO> {
    payload: Todo;
  }
  export interface TodoRemoved extends Action<TodoAction.TODO_REMOVED> {
    payload: Todo;
  }


  export type Type = AddTodo
    | NewTodo
    | FetchTodos
    | FetchTodosSuccess
    | FetchTodosFailure
    | RemoveTodo
    | TodoRemoved;
}

export namespace TodoAction {
  export const AddTodo = (todo: Todo): AddTodo => ({
    type: TodoAction.ADD_TODO,
    payload: todo
  });
  export const NewTodo = (todo: Todo): NewTodo => ({
    type: TodoAction.NEW_TODO,
    payload: todo
  });
  

  export const FetchTodos = (): FetchTodos => ({
    type: TodoAction.FETCH_TODOS
  });
  export const FetchTodosSuccess = (todos: Todo[]): FetchTodosSuccess => ({
    type: TodoAction.FETCH_TODOS_SUCCESS,
    payload: todos
  });
  export const FetchTodosFailure = (error: string): FetchTodosFailure => ({
    type: TodoAction.FETCH_TODOS_FAILURE,
    error
  });

  export const RemoveTodo = (todo: Todo): RemoveTodo => ({
    type: TodoAction.REMOVE_TODO,
    payload: todo
  });
  export const TodoRemoved = (todo: Todo): TodoRemoved => ({
    type: TodoAction.TODO_REMOVED,
    payload: todo
  });
}

export default TodoAction;