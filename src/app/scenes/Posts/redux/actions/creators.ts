import { Post } from '../types';
import Types from './types';

export namespace Creators {
  export const FetchPosts = (_page = 1): Types.FetchPosts => ({
    type: Types.FETCH_POSTS
  });

  export const FetchPostsSuccess = (posts: Post[]): Types.FetchPostsSuccess => ({
    type: Types.FETCH_POSTS_SUCCESS,
    payload: posts
  });

  export const FetchPostsFailure = (error: string): Types.FetchPostsFailure => ({
    type: Types.FETCH_POSTS_FAILURE,
    error
  });

  export const AddPost = (post: Post): Types.AddPost => ({
    type: Types.ADD_POST,
    payload: post
  });

  export const NewPost = (post: Post): Types.NewPost => ({
    type: Types.NEW_POST,
    payload: post
  });
}

export default Creators;