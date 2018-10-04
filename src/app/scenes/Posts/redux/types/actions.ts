import { Action } from 'redux';
import { Post } from './data';

export enum ActionType {
  FETCH_POSTS = 'POSTS::FETCH_POSTS',
  FETCH_POSTS_SUCCESS = 'POSTS::FETCH_POSTS_SUCCESS',
  FETCH_POSTS_FAILURE = 'POSTS::FETCH_POSTS_FAILURE',
  ADD_POST = 'POSTS::ADD_POST',
  NEW_POST = 'POSTS::NEW_POST'
}

export namespace ActionType {
  export interface FetchPosts extends Action<ActionType.FETCH_POSTS> {}
  export interface FetchPostsSuccess extends Action<ActionType.FETCH_POSTS_SUCCESS> {
    payload: Post[];
  }
  export interface FetchPostsFailure extends Action<ActionType.FETCH_POSTS_FAILURE> {
    error: string;
  }
  export interface AddPost extends Action<ActionType.ADD_POST> {
    payload: Post;
  }
  export interface NewPost extends Action<ActionType.NEW_POST> {
    payload: Post;
  }

  export type All = FetchPosts
    | FetchPostsSuccess
    | FetchPostsFailure
    | AddPost
    | NewPost;
}

export default ActionType;