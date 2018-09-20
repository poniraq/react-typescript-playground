import { TitleAction, SET_TITLE } from './actions';
import { DefaultState, TitleState } from './state';
import { Reducer } from 'redux';

export const TitleReducer: Reducer<TitleState, TitleAction> = function (title = DefaultState, action) {
  switch (action.type) {
    case SET_TITLE:
      return action.payload;
    default:
      return title;
  }
}