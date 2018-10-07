import { AppState } from '@redux';
import * as injector from '@redux/injector';
import { Epic, Reducer } from './index';
import { PostsMount, StoreState } from './types';

export function inject(state?: AppState) {
  return injector.inject<StoreState>(PostsMount, Reducer, Epic, state);
}