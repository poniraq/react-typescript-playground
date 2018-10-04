import { TitleReducer } from './reducer';
import { Actions } from './actions';
import { DefaultState } from './state';

describe('TitleReducer', () => {
  const state = DefaultState;
  const reducer = TitleReducer;

  it('should return original state if no action is provided', () => {
    expect(reducer(state, {} as any)).toEqual(state);
  });

  it('should return original state if action is unhandled', () => {
    const action = {
      type: 'some_type',
      payload: 'some_paylaod'
    };

    expect(reducer(state, action as any)).toEqual(state);
  });

  it('should do nothing on SET_TITLE', () => {
    const newState = 'new_state';
    const action = Actions.SetTitle(newState);

    expect(reducer(state, action)).not.toEqual(newState);
    expect(reducer(state, action)).toEqual(state);
  });

  it('should update title on NEW_TITLE', () => {
    const newState = 'new_state';
    const action = Actions.NewTitle(newState);

    expect(reducer(state, action)).not.toEqual(state);
    expect(reducer(state, action)).toEqual(newState);
  });
});