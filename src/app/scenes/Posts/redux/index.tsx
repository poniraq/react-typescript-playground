import { Types, Creators } from './actions';
import { PostsReducer } from './reducer';
import { PostsState } from './state';
import { PostsEpic } from './epic';

export {
  Types as ActionTypes,
  Creators as ActionCreators,
  PostsEpic as Epic,
  PostsReducer as Reducer,
  PostsState as State
};