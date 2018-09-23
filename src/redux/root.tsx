import { combineReducers } from 'redux';
import * as title from './title';
import * as posts from './posts';
import * as todo from './todo';
import { combineEpics } from 'redux-observable';

export type RootAction = title.Action.Type | posts.Action.Type | todo.Action.Type;

export const RootEpic = combineEpics(
  title.Epic,
  posts.Epic,
  todo.Epic
);
export const RootReducer = combineReducers({ 
  title: title.Reducer,
  posts: posts.Reducer,
  todo: todo.Reducer
});
export interface RootState {
  title: title.State;
  posts: posts.State;
  todo: todo.State;
}

export const selectors = {
  getTitle: (state: RootState) => state.title,

  getNewPost: (state: RootState) => state.posts.newPost,
  getPosts: (state: RootState) => state.posts.posts,
  getPostsError: (state: RootState) => state.posts.error,
  getPostsFetching: (state: RootState) => state.posts.fetching,

  getTodoTitle: (state: RootState) => state.todo.title,
  getTodos: (state: RootState) => state.todo.todos,
  getTodosFetching: (state: RootState) => state.todo.fetching,
  getTodosError: (state: RootState) => state.todo.error
};