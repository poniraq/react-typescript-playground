import { Todo, TodoError } from './data';

export const TodoMount = 'todo';
export type StoreState = {
  [TodoMount]: TodoState;
};

export type TodoState = {
  title: string;
  todos: Todo[];
  fetching: boolean;
  error: TodoError;
};

export default TodoState;