import { Epic } from 'redux-observable';
import { ActionType } from './actions';
import { PostsState } from './state';

export type PostsEpic = Epic<ActionType.All, ActionType.All, PostsState>;