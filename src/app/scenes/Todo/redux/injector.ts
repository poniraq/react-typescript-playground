import { AppState } from '@redux';
import { inject as ReduxInject } from '@redux/injector';
import { Epic, Reducer } from './index';
import { StoreState, TodoMount } from './types';

export function inject(state?: AppState) {
  return ReduxInject<StoreState>(TodoMount, Reducer, Epic, state);
}