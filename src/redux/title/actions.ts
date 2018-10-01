import { Action } from 'redux';

export enum TitleAction {
  SET_TITLE = 'TITLE::SET_TITLE',
  NEW_TITLE = 'TITLE::NEW_TITLE'
}

export namespace TitleAction {
  export interface SetTitle extends Action<TitleAction.SET_TITLE> {
    payload: string;
  }
  export interface NewTitle extends Action<TitleAction.NEW_TITLE> {
    payload: string;
  }

  export type Type = SetTitle | NewTitle;
}

export namespace TitleAction {
  export const SetTitle = (title: string): SetTitle => ({
    type: TitleAction.SET_TITLE,
    payload: title
  });

  export const NewTitle = (title: string): NewTitle => ({
    type: TitleAction.NEW_TITLE,
    payload: title
  });
}

export default TitleAction;