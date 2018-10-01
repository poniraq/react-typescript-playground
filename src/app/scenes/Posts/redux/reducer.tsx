import { Types } from './actions';
import { DefaultState, PostsState } from './state';
import { Reducer } from 'redux';

export const PostsReducer: Reducer<PostsState, Types.Type> = function (state = DefaultState, action) {
  switch (action.type) {
    case Types.FETCH_POSTS:
      return { ...state, fetching: true, error: undefined };
    case Types.FETCH_POSTS_SUCCESS:
      return { ...state, fetching: false, posts: action.payload, error: undefined };
    case Types.FETCH_POSTS_FAILURE:
      return { ...state, fetching: false, posts: [], error: action.error };
    case Types.ADD_POST:
      return state;
    case Types.NEW_POST:
      return { ...state, posts: [action.payload].concat(state.posts) };
    
    default:
      return state;
  }
};
export default PostsReducer;