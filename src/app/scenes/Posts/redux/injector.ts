import { AppState } from '@redux';
import { inject as ReduxInject } from '@redux/injector';
import { Epic, Reducer } from './index';
import { PostsMount, StoreState } from './types';

export function inject(state?: AppState) {
  return ReduxInject<StoreState>(PostsMount, Reducer, Epic, state);
}