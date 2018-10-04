import { Reducer } from 'redux';
import { TitleState } from './state';
import { ActionType } from './actions';

export type TitleReducer = Reducer<TitleState, ActionType.All>;