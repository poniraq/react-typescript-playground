import { BehaviorSubject } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { combineEpics, Epic, ActionsObservable, StateObservable } from 'redux-observable';
import { ReducerNode } from 'redux-reducers-injector';

import TitleAction from './title/actions';
import TitleState from './title/state';
import TitleEpic from './title/epic';
import TitleReducer from './title/reducer';

export type AppState = TitleState;
export type AppAction = TitleAction.Type;
export type AppEpic = Epic<AppAction, AppAction, AppState>;

export const EpicPipe$ = new BehaviorSubject<AppEpic>(combineEpics(
  TitleEpic
));
export const AppEpic: Epic<AppAction, AppAction> = (action$: ActionsObservable<AppAction>, state$: StateObservable<State>) => EpicPipe$.pipe(
  mergeMap((epic: Epic) => epic(action$, state$, null))
);

export const AppReducer: ReducerNode<TitleState, AppAction> = {
  title: TitleReducer
};
export interface State {
  title: TitleState;
}

export const selectors = {
  getTitle: (state: State) => state.title
};