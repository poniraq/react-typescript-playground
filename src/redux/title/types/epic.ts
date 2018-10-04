import { Epic } from 'redux-observable';
import { ActionType } from './actions';
import { TitleState } from './state';

export type TitleEpic = Epic<ActionType.All, ActionType.All, TitleState>;