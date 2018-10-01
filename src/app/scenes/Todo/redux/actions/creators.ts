import { Todo } from '../types';
import Types from './types';

export namespace Creators {
  export const AddTodo = (todo: Todo): Types.AddTodo => ({
    type: Types.ADD_TODO,
    payload: todo
  });
  export const NewTodo = (todo: Todo): Types.NewTodo => ({
    type: Types.NEW_TODO,
    payload: todo
  });
  

  export const FetchTodos = (): Types.FetchTodos => ({
    type: Types.FETCH_TODOS
  });
  export const FetchTodosSuccess = (todos: Todo[]): Types.FetchTodosSuccess => ({
    type: Types.FETCH_TODOS_SUCCESS,
    payload: todos
  });
  export const FetchTodosFailure = (error: string): Types.FetchTodosFailure => ({
    type: Types.FETCH_TODOS_FAILURE,
    error
  });

  export const RemoveTodo = (todo: Todo): Types.RemoveTodo => ({
    type: Types.REMOVE_TODO,
    payload: todo
  });
  export const TodoRemoved = (todo: Todo): Types.TodoRemoved => ({
    type: Types.TODO_REMOVED,
    payload: todo
  });
}
export default Creators;