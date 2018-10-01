import { EpicPipe$ } from '@redux/root';
import { Action, Reducer } from 'redux';
import { Epic } from 'redux-observable';
import { injectReducer, ReducerNode } from 'redux-reducers-injector';

export function InjectEpic(epic: Epic) {
  EpicPipe$.next(epic);
}
export function InjectReducer<S, A extends Action>(path: string, reducer: ReducerNode<S, A> | Reducer<S, A>, force?: boolean) {
  injectReducer(path, reducer, force);
}