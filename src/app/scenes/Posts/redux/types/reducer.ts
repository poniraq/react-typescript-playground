import { Reducer } from 'redux';
import { PostsState } from './state';
import { ActionType } from './actions';

export type PostsReducer = Reducer<PostsState, ActionType.All>;