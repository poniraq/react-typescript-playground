import { ofType } from 'redux-observable';
import { map } from 'rxjs/operators';
import { Actions } from './actions';
import { ActionType, TitleEpic as Epic } from './types';

export const TitleEpic: Epic = (action$) =>
  action$.pipe(
    ofType(ActionType.SET_TITLE),
    map((action: ActionType.SetTitle) => Actions.NewTitle(action.payload)
  ));

export default TitleEpic;