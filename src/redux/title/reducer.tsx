import { TitleAction } from './actions';
import { DefaultState, TitleState } from './state';
import { Reducer } from 'redux';

export const TitleReducer: Reducer<TitleState, TitleAction.Type> = function (title = DefaultState, action) {
  switch (action.type) {
    case TitleAction.SET_TITLE:
      return title;
    case TitleAction.NEW_TITLE:
      return action.payload;
    default:
      return title;
  }
};