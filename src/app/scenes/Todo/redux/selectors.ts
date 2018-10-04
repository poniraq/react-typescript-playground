import { Selector } from '@redux';
import { compose } from 'redux';
import { inject } from './injector';
import { Todo, TodoError, TodoMount, TodoState } from './types';

export const state: Selector<TodoState> = (state) => inject(state)[TodoMount];

export const title: Selector<string> = compose((state) => state.title, state);
export const todos: Selector<Todo[]> = compose((state) => state.todos, state);
export const fetching: Selector<boolean> = compose((state) => state.fetching, state);
export const error: Selector<TodoError> = compose((state) => state.error, state);
