import { Action } from 'redux';
import { Todo } from '../types';

export enum Types {
  ADD_TODO = 'TODO::ADD_TODO',
  NEW_TODO = 'TODO::NEW_TODO',

  FETCH_TODOS = 'TODO::FETCH_TODOS',
  FETCH_TODOS_SUCCESS = 'TODO::FETCH_TODOS_SUCCESS',
  FETCH_TODOS_FAILURE = 'TODO::FETCH_TODOS_FAILURE',

  REMOVE_TODO = 'TODO::REMOVE_TODO',
  TODO_REMOVED = 'TODO::TODO_REMOVED'
}

export namespace Types {
  export interface AddTodo extends Action<Types.ADD_TODO> {
    payload: Todo;
  }
  export interface NewTodo extends Action<Types.NEW_TODO> {
    payload: Todo;
  }

  export interface FetchTodos extends Action<Types.FETCH_TODOS> {}
  export interface FetchTodosSuccess extends Action<Types.FETCH_TODOS_SUCCESS> {
    payload: Todo[];
  }
  export interface FetchTodosFailure extends Action<Types.FETCH_TODOS_FAILURE> {
    error: string;
  }

  export interface RemoveTodo extends Action<Types.REMOVE_TODO> {
    payload: Todo;
  }
  export interface TodoRemoved extends Action<Types.TODO_REMOVED> {
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

export default Types;