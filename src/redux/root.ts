import { BehaviorSubject } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { combineEpics, Epic, ActionsObservable, StateObservable } from 'redux-observable';
import { ReducerNode } from 'redux-reducers-injector';

// static
import * as title from './title';

// dynamic
import { ActionType as PostsAction, PostsState } from '@app/scenes/Posts/redux/types';
import { ActionType as TodoActions, TodoState } from '@app/scenes/Todo/redux/types';


export type AppAction = title.ActionTypes.All | PostsAction.All | TodoActions.All;
export const EpicPipe$ = new BehaviorSubject<Epic>(combineEpics(
  title.Epic
));
export const AppEpic: Epic = (action$: ActionsObservable<AppAction>, state$: StateObservable<AppState>) => EpicPipe$.pipe(
  mergeMap(epic => epic(action$, state$, null))
);

export const AppReducer: ReducerNode = {
  title: title.Reducer
};
export type AppState = {
  title: title.State;
  posts?: PostsState;
  todo?: TodoState;
};

export const selectors = {
  getTitle: (state: AppState) => state.title
};