import { StoreState } from './state';

export const getNewPost = (state: StoreState) => state.posts.newPost;
export const getPosts = (state: StoreState) => state.posts.posts;
export const getPostsError = (state: StoreState) => state.posts.error;
export const getPostsFetching = (state: StoreState) => state.posts.fetching;