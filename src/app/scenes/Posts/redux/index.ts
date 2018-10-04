import { Actions } from './actions';
import { PostsReducer } from './reducer';
import { PostsEpic } from './epic';
import { ActionType } from './types';

export {
  Actions as Actions,
  ActionType as ActionTypes,
  PostsEpic as Epic,
  PostsReducer as Reducer
};