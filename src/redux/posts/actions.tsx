import { Action } from 'redux';
import { Post } from './types';

export enum PostsAction {
  FETCH_POSTS = 'POSTS::FETCH_POSTS',
  FETCH_POSTS_SUCCESS = 'POSTS::FETCH_POSTS_SUCCESS',
  FETCH_POSTS_FAILURE = 'POSTS::FETCH_POSTS_FAILURE',
  ADD_POST = 'POSTS::ADD_POST',
  NEW_POST = 'POSTS::NEW_POST'
}

export namespace PostsAction {
  export interface FetchPosts extends Action<PostsAction.FETCH_POSTS> {}
  export interface FetchPostsSuccess extends Action<PostsAction.FETCH_POSTS_SUCCESS> {
    payload: Post[];
  }
  export interface FetchPostsFailure extends Action<PostsAction.FETCH_POSTS_FAILURE> {
    error: string;
  }
  export interface AddPost extends Action<PostsAction.ADD_POST> {
    payload: Post;
  }
  export interface NewPost extends Action<PostsAction.NEW_POST> {
    payload: Post;
  }

  export type Type = FetchPosts
    | FetchPostsSuccess
    | FetchPostsFailure
    | AddPost
    | NewPost;
}
  

export namespace PostsAction {
  export const FetchPostsSuccess = (posts: Post[]): FetchPostsSuccess => ({
    type: PostsAction.FETCH_POSTS_SUCCESS,
    payload: posts
  });

  export const FetchPostsFailure = (error: string): FetchPostsFailure => ({
    type: PostsAction.FETCH_POSTS_FAILURE,
    error
  });

  export const FetchPosts = (_page = 1): FetchPosts => ({
    type: PostsAction.FETCH_POSTS
  });

  export const AddPost = (post: Post): AddPost => ({
    type: PostsAction.ADD_POST,
    payload: { ...post, id: +(new Date()) }
  });
}