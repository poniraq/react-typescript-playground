import { Selector } from '@redux';
import { compose } from 'redux';
import { inject } from './injector';
import { Post, PostError, PostsMount, PostsState } from './types';

export const state: Selector<PostsState> = (state) => inject(state)[PostsMount];

export const newPost: Selector<Post> = compose((state) => state.newPost, state);
export const posts: Selector<Post[]> = compose((state) => state.posts, state);
export const error: Selector<PostError> = compose((state) => state.error, state);
export const fetching: Selector<boolean> = compose((state) => state.fetching, state);