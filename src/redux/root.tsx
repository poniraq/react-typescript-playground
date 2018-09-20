import { combineReducers } from 'redux';
import * as title from './title';

export type Action = title.Action;
export const RootReducer = combineReducers({ 
  title: title.Reducer
});
export interface State {
  title: title.State
}
