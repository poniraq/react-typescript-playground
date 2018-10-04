import { ActionType, TitleReducer as Reducer } from './types';
import { DefaultState } from './state';

export const TitleReducer: Reducer = function (title = DefaultState, action) {
  switch (action.type) {
    case ActionType.SET_TITLE:
      return title;
    case ActionType.NEW_TITLE:
      return action.payload;
    default:
      return title;
  }
};
export default TitleReducer;