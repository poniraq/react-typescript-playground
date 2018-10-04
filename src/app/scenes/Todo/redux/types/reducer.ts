import { Reducer } from 'redux';
import { TodoState } from './state';
import { ActionType } from './actions';

export type TodoReducer = Reducer<TodoState, ActionType.All>;