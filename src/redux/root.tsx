import { combineReducers } from 'redux';
import * as title from './title';
import * as posts from './posts';
import { combineEpics } from 'redux-observable';

export type RootAction = title.Action.Type | posts.Action.Type;

export const RootEpic = combineEpics(
  title.Epic,
  posts.Epic
);
export const RootReducer = combineReducers({ 
  title: title.Reducer,
  posts: posts.Reducer
});
export interface RootState {
  title: title.State;
  posts: posts.State;
}

export const selectors = {
  getTitle: (state: RootState) => state.title,
  getNewPost: (state: RootState) => state.posts.newPost,
  getPosts: (state: RootState) => state.posts.posts,
  getPostsError: (state: RootState) => state.posts.error,
  getPostsFetching: (state: RootState) => state.posts.fetching
};