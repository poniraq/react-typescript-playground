import { DefaultState } from './state';
import { ActionType, PostsReducer as ReducerType } from './types';

export const PostsReducer: ReducerType = function (state = DefaultState, action) {
  switch (action.type) {
    case ActionType.FETCH_POSTS:
      return { ...state, fetching: true, error: undefined };
    case ActionType.FETCH_POSTS_SUCCESS:
      return { ...state, fetching: false, posts: action.payload, error: undefined };
    case ActionType.FETCH_POSTS_FAILURE:
      return { ...state, fetching: false, posts: [], error: action.error };
    case ActionType.ADD_POST:
      return state;
    case ActionType.NEW_POST:
      return { ...state, posts: [action.payload].concat(state.posts) };
    
    default:
      return state;
  }
};

export type PostsReducer = ReducerType;
export default PostsReducer;