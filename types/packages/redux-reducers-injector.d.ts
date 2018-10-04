declare module 'redux-reducers-injector' {
  import { Reducer, Store, StoreEnhancer, Action } from 'redux';

  export interface ReducerNode {
    [key: string]: Reducer | ReducerNode;
  }

  export function combineReducersRecurse(reducers: ReducerNode | Reducer): Reducer;
  
  export function createInjectStore(reducerTree: ReducerNode | Reducer, enhancer?: StoreEnhancer): Store;
  export function createInjectStore<S>(reducerTree: ReducerNode | Reducer, preloadedState: S, enhancer?: StoreEnhancer): Store;

  export function reloadReducer(key: string, reducer: ReducerNode | Reducer): void;
  export function injectReducer(key: string, reducer: ReducerNode | Reducer, force?: boolean): void;
}
