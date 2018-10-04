import { Action } from 'redux';
import { Todo } from './data';

export enum ActionType {
  ADD_TODO = 'TODO::ADD_TODO',
  NEW_TODO = 'TODO::NEW_TODO',

  FETCH_TODOS = 'TODO::FETCH_TODOS',
  FETCH_TODOS_SUCCESS = 'TODO::FETCH_TODOS_SUCCESS',
  FETCH_TODOS_FAILURE = 'TODO::FETCH_TODOS_FAILURE',

  REMOVE_TODO = 'TODO::REMOVE_TODO',
  TODO_REMOVED = 'TODO::TODO_REMOVED'
}

export namespace ActionType {
  export interface AddTodo extends Action<ActionType.ADD_TODO> {
    payload: Todo;
  }
  export interface NewTodo extends Action<ActionType.NEW_TODO> {
    payload: Todo;
  }

  export interface FetchTodos extends Action<ActionType.FETCH_TODOS> {}
  export interface FetchTodosSuccess extends Action<ActionType.FETCH_TODOS_SUCCESS> {
    payload: Todo[];
  }
  export interface FetchTodosFailure extends Action<ActionType.FETCH_TODOS_FAILURE> {
    error: string;
  }

  export interface RemoveTodo extends Action<ActionType.REMOVE_TODO> {
    payload: Todo;
  }
  export interface TodoRemoved extends Action<ActionType.TODO_REMOVED> {
    payload: Todo;
  }


  export type All = AddTodo
    | NewTodo
    | FetchTodos
    | FetchTodosSuccess
    | FetchTodosFailure
    | RemoveTodo
    | TodoRemoved;
}

export default ActionType;