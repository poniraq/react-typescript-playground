declare module 'redux-reducers-injector' {
  import { Reducer, Store, StoreEnhancer, Action } from 'redux';

  export interface ReducerNode<S, A extends Action> {
    [key: string]: Reducer<S, A> | ReducerNode<S, A>;
  }

  export function combineReducersRecurse<S, A extends Action>(reducers: ReducerNode<S, A> | Reducer<S, A>): Reducer<S, A>;
  
  export function createInjectStore<S, A extends Action>(reducerTree: ReducerNode<S, A> | Reducer<S, A>, enhancer?: StoreEnhancer<S, A>): Store<S, A>;
  export function createInjectStore<S, A extends Action>(reducerTree: ReducerNode<S, A> | Reducer<S, A>, preloadedState: S, enhancer?: StoreEnhancer<S, A>): Store<S, A>;

  export function reloadReducer<S, A extends Action>(key: string, reducer: ReducerNode<S, A> | Reducer<S, A>): void;
  export function injectReducer<S, A extends Action>(key: string, reducer: ReducerNode<S, A> | Reducer<S, A>, force?: boolean): void;
}
