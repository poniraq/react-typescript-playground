import { Reducer, Store, StoreEnhancer } from 'redux';
import { Epic } from 'redux-observable';
import { createInjectStore, injectReducer, ReducerNode } from 'redux-reducers-injector';
import { AppState, EpicPipe$ } from '@redux/root';

let store: Store;
export function CreateStore(reducer: Reducer | ReducerNode, enhancer?: StoreEnhancer) {
  store = createInjectStore(reducer, enhancer);
  return store;
}

export function InjectEpic(epic: Epic) {
  EpicPipe$.next(epic);
}
export function InjectReducer(path: string, reducer: ReducerNode | Reducer, force?: boolean): Store {
  injectReducer(path, reducer, force);
  return store;
}

export type Selector<T> = (state: AppState) => T;