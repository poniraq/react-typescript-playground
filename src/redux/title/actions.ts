import { ActionType, Title } from './types';

export namespace Actions {
  export const SetTitle = (title: Title): ActionType.SetTitle => ({
    type: ActionType.SET_TITLE,
    payload: title
  });

  export const NewTitle = (title: Title): ActionType.NewTitle => ({
    type: ActionType.NEW_TITLE,
    payload: title
  });
}

export default Actions;