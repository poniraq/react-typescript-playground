import { Action } from 'redux';
import { Title } from './data';

export enum ActionType {
  SET_TITLE = 'TITLE::SET_TITLE',
  NEW_TITLE = 'TITLE::NEW_TITLE'
}

export namespace ActionType {
  export interface SetTitle extends Action<ActionType.SET_TITLE> {
    payload: Title;
  }
  export interface NewTitle extends Action<ActionType.NEW_TITLE> {
    payload: Title;
  }

  export type All = SetTitle | NewTitle;
}

export default ActionType;