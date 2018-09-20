import { Epic, ofType } from 'redux-observable';
import { map } from 'rxjs/operators';
import { TitleAction } from './actions';
import { TitleState } from './state';

import ActionType = TitleAction.Type;

export const TitleEpic: Epic<ActionType, ActionType, TitleState> = (action$) =>
  action$.pipe(
    ofType(TitleAction.SET_TITLE),
    map((action: TitleAction.SetTitle) => TitleAction.NewTitle(action.payload)
  ));