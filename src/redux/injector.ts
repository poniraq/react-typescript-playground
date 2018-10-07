import { Reducer } from 'redux';
import { Epic } from 'redux-observable';
import { ReducerNode } from 'redux-reducers-injector';
import { AppState } from './root';
import * as utils from './utils';

const paths: {[key: string]: boolean} = {};

type InjectedState<S> = AppState & S;

export function injected(path: string): boolean {
  return paths[path];
}
export function inject<S>(path: string, reducer: Reducer | ReducerNode, epic: Epic, state?: AppState): InjectedState<S> {
  const isInjected = injected(path);

  if (!isInjected) {
    utils.InjectReducer(path, reducer);
    utils.InjectEpic(epic);
    paths[path] = true;
  }

  const store = utils.getStore();
  return (store && store.getState() || state) as InjectedState<S>;
}