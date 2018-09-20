import { Action, ActionCreator } from 'redux';

export const SET_TITLE = 'SET_TITLE';
export type SET_TITLE = typeof SET_TITLE;

export interface SetTitle extends Action<SET_TITLE> {
    payload: string;
}

export type TitleAction = SetTitle;
export const setTitle: ActionCreator<SetTitle> = (title: string) => ({
    type: SET_TITLE,
    payload: title
});
