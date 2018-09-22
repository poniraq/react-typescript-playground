import { PostsAction } from './actions';
import { DefaultState, PostsState } from './state';
import { Reducer } from 'redux';

export const PostsReducer: Reducer<PostsState, PostsAction.Type> = function (state = DefaultState, action) {
  switch (action.type) {
    case PostsAction.FETCH_POSTS:
      return { ...state, fetching: true, error: undefined };
    case PostsAction.FETCH_POSTS_SUCCESS:
      return { ...state, fetching: false, posts: action.payload, error: undefined };
    case PostsAction.FETCH_POSTS_FAILURE:
      return { ...state, fetching: false, posts: [], error: action.error };
    case PostsAction.ADD_POST:
      return state;
    case PostsAction.NEW_POST:
      return { ...state, posts: [action.payload].concat(state.posts) };
    
    default:
      return state;
  }
};