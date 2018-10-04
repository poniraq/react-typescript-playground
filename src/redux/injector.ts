import { Reducer } from 'redux';
import { Epic } from 'redux-observable';
import { ReducerNode } from 'redux-reducers-injector';
import { AppState } from './root';
import { InjectEpic, InjectReducer } from './utils';

const paths: {[key: string]: boolean} = {};

type InjectedState<S> = AppState & S;

export function injected(path: string): boolean {
  return paths[path];
}
export function inject<S>(path: string, reducer: Reducer | ReducerNode, epic: Epic, state?: AppState): InjectedState<S> {
  const isInjected = injected(path);

  if (isInjected && state) {
    return state as InjectedState<S>;
  }

  const store = InjectReducer(path, reducer);

  if (!isInjected) {
    InjectEpic(epic);
    paths[path] = true;
  }
  
  return store.getState() as InjectedState<S>;
}