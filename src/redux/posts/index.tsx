import { PostsAction } from './actions';
import { PostsReducer } from './reducer';
import { PostsState } from './state';
import { PostsEpic } from './epic';

export * from './types';
export {
  PostsAction as Action,
  PostsEpic as Epic,
  PostsReducer as Reducer,
  PostsState as State
};