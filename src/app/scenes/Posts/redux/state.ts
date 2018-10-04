import { PostsState } from './types';

export const DefaultState: PostsState = {
  posts: [],
  newPost: { id: undefined, title: '', body: '' },
  fetching: false,
  error: undefined
};
export default DefaultState;