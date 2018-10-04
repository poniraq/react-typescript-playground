import { Actions } from './actions';
import { TitleReducer } from './reducer';
import { TitleState, ActionType } from './types';
import { TitleEpic } from './epic';

export {
  Actions as Actions,
  ActionType as ActionTypes,
  TitleEpic as Epic,
  TitleReducer as Reducer,
  TitleState as State
};