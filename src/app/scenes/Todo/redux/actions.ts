import { Todo, ActionType } from './types';

export namespace Actions {
  export const AddTodo = (todo: Todo): ActionType.AddTodo => ({
    type: ActionType.ADD_TODO,
    payload: todo
  });
  export const NewTodo = (todo: Todo): ActionType.NewTodo => ({
    type: ActionType.NEW_TODO,
    payload: todo
  });
  

  export const FetchTodos = (): ActionType.FetchTodos => ({
    type: ActionType.FETCH_TODOS
  });
  export const FetchTodosSuccess = (todos: Todo[]): ActionType.FetchTodosSuccess => ({
    type: ActionType.FETCH_TODOS_SUCCESS,
    payload: todos
  });
  export const FetchTodosFailure = (error: string): ActionType.FetchTodosFailure => ({
    type: ActionType.FETCH_TODOS_FAILURE,
    error
  });

  export const RemoveTodo = (todo: Todo): ActionType.RemoveTodo => ({
    type: ActionType.REMOVE_TODO,
    payload: todo
  });
  export const TodoRemoved = (todo: Todo): ActionType.TodoRemoved => ({
    type: ActionType.TODO_REMOVED,
    payload: todo
  });
}
export default Actions;