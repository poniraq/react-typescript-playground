import { Action } from 'redux';
import { Post } from '../types';

export enum Types {
  FETCH_POSTS = 'POSTS::FETCH_POSTS',
  FETCH_POSTS_SUCCESS = 'POSTS::FETCH_POSTS_SUCCESS',
  FETCH_POSTS_FAILURE = 'POSTS::FETCH_POSTS_FAILURE',
  ADD_POST = 'POSTS::ADD_POST',
  NEW_POST = 'POSTS::NEW_POST'
}

export namespace Types {
  export interface FetchPosts extends Action<Types.FETCH_POSTS> {}
  export interface FetchPostsSuccess extends Action<Types.FETCH_POSTS_SUCCESS> {
    payload: Post[];
  }
  export interface FetchPostsFailure extends Action<Types.FETCH_POSTS_FAILURE> {
    error: string;
  }
  export interface AddPost extends Action<Types.ADD_POST> {
    payload: Post;
  }
  export interface NewPost extends Action<Types.NEW_POST> {
    payload: Post;
  }

  export type Type = FetchPosts
    | FetchPostsSuccess
    | FetchPostsFailure
    | AddPost
    | NewPost;
}

export default Types;