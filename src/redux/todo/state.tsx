import { Todo } from './types';

export interface TodoState {
  title: string;
  todos: Todo[];
  fetching: boolean;
  error: string | undefined;
}
export const DefaultState: TodoState = {
  title: 'My Todos',
  todos: [],
  fetching: false,
  error: undefined
};

export const DefaultFetchTodos: Todo[] = [
  { id: 1, title: 'Go to the store' },
  { id: 2, title: 'Wash car' },
  { id: 3, title: 'Get kid form school' },
  { id: 4, title: 'Read some book' },
  { id: 5, title: 'Go to sleep' },
];

export default TodoState;