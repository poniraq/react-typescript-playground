import { Epic } from 'redux-observable';
import { ActionType } from './actions';
import { TodoState } from './state';

export type TodoEpic = Epic<ActionType.All, ActionType.All, TodoState>;