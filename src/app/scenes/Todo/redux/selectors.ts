import { StoreState } from './state';

export const getTodoTitle = (state: StoreState) => state.todo.title;
export const getTodos = (state: StoreState) => state.todo.todos;
export const getTodosFetching = (state: StoreState) => state.todo.fetching;
export const getTodosError = (state: StoreState) => state.todo.error;