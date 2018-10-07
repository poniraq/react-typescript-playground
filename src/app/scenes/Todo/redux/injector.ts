import { AppState } from '@redux';
import * as injector from '@redux/injector';
import { Epic, Reducer } from './index';
import { StoreState, TodoMount } from './types';

export function inject(state?: AppState) {
  return injector.inject<StoreState>(TodoMount, Reducer, Epic, state);
}