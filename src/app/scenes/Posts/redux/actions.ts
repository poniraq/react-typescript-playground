import { ActionType, Post } from './types';

export namespace Actions {
  export const FetchPosts = (_page = 1): ActionType.FetchPosts => ({
    type: ActionType.FETCH_POSTS
  });

  export const FetchPostsSuccess = (posts: Post[]): ActionType.FetchPostsSuccess => ({
    type: ActionType.FETCH_POSTS_SUCCESS,
    payload: posts
  });

  export const FetchPostsFailure = (error: string): ActionType.FetchPostsFailure => ({
    type: ActionType.FETCH_POSTS_FAILURE,
    error
  });

  export const AddPost = (post: Post): ActionType.AddPost => ({
    type: ActionType.ADD_POST,
    payload: post
  });

  export const NewPost = (post: Post): ActionType.NewPost => ({
    type: ActionType.NEW_POST,
    payload: post
  });
}

export default Actions;