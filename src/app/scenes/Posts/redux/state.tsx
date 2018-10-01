import { Post } from './types';

export const DefaultState: PostsState = {
  posts: [],
  newPost: { id: undefined, title: '', body: '' },
  fetching: false,
  error: undefined
};

export interface PostsState {
  posts: Post[];
  newPost: Post;
  fetching: boolean;
  error: string | undefined;
}

export interface StoreState {
  posts: PostsState;
}

export default PostsState;