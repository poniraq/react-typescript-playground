import { Post, PostError } from './data';

export const PostsMount = 'posts';

export type PostsState = {
  posts: Post[];
  newPost: Post;
  fetching: boolean;
  error: PostError;
};

export type StoreState = {
  [PostsMount]: PostsState;
};

export default PostsState;