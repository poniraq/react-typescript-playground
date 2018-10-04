import { PostsReducer } from './reducer';
import { DefaultState } from './state';
import { Actions } from './actions';
import { Post } from './types';

describe('PostsReducer', () => {
  const state = DefaultState;
  const reducer = PostsReducer;

  it('should return original state if no action is provided', () => {
    expect(reducer(state, {} as any)).toEqual(state);
  });

  it('should return original state if action is unhandled', () => {
    const action = {
      type: 'some_type',
      payload: 'some_paylaod'
    };

    expect(reducer(state, action as any)).toEqual(state);
  });

  describe('FETCH_POSTS', () => {
    const action = Actions.FetchPosts();
    const oldState = {...state, error: 'some_error'};
    const newState = reducer(oldState, action);

    it('sets fetching to "true"', () => {
      expect(oldState.fetching).toBeFalsy();
      expect(newState.fetching).toBeTruthy();
    });

    it('unsets "errors"', () => {
      expect(oldState.error).toBeDefined();
      expect(newState.error).toBeUndefined();
    });

    it('does not mutate "posts"', () => {
      expect(newState.posts).toEqual(oldState.posts);
    });

    it('does not mutate "newPost"', () => {
      expect(newState.newPost).toEqual(oldState.newPost);
    });
  });

  describe('FETCH_POSTS_SUCCESS', () => {
    const posts: Post[] = [{ id: 1, title: 'some_title', body: 'some_body' }];
    const action = Actions.FetchPostsSuccess(posts);
    const oldState = {...state, error: 'some_error', posts: [], fetching: true};
    const newState = reducer(oldState, action);

    it('sets fetching to "false"', () => {
      expect(oldState.fetching).toBeTruthy();
      expect(newState.fetching).toBeFalsy();
    });

    it('unsets "errors"', () => {
      expect(oldState.error).toBeDefined();
      expect(newState.error).toBeUndefined();
    });

    it('stores posts data', () => {
      expect(oldState.posts).toEqual([]);
      expect(newState.posts).toEqual(posts);
    });

    it('does not mutate "newPost"', () => {
      expect(newState.newPost).toEqual(oldState.newPost);
    });
  });

  describe('FETCH_POSTS_FAILURE', () => {
    const posts: Post[] = [{ id: 1, title: 'some_title', body: 'some_body' }];
    const error = 'some_error_message';
    const action = Actions.FetchPostsFailure(error);
    const oldState = {...state, posts: posts, fetching: true};
    const newState = reducer(oldState, action);

    it('sets fetching to "false"', () => {
      expect(oldState.fetching).toBeTruthy();
      expect(newState.fetching).toBeFalsy();
    });

    it('stores "errors" message', () => {
      expect(oldState.error).toBeUndefined();
      expect(newState.error).toBeDefined();
    });

    it('empties "posts" data', () => {
      expect(oldState.posts).toEqual(posts);
      expect(newState.posts).toEqual([]);
    });

    it('does not mutate "newPost"', () => {
      expect(newState.newPost).toEqual(oldState.newPost);
    });
  });

  describe('ADD_POST', () => {
    const post: Post = { id: 1, title: 'some_title', body: 'some_body' };
    const action = Actions.AddPost(post);
    const oldState = {...state, posts: []};
    const newState = reducer(oldState, action);

    it('does not mutate state', () => {
      expect(newState).toEqual(oldState);
    });
  });

  describe('NEW_POST', () => {
    const post: Post = { id: 1, title: 'some_title', body: 'some_body' };
    const action = Actions.NewPost(post);
    const oldState = {...state, posts: []};
    const newState = reducer(oldState, action);

    it('adds payload to "posts"', () => {
      expect(oldState.posts).toEqual([]);
      expect(newState.posts).toEqual([post]);
    });
  });
});