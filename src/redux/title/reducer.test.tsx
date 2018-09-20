import { TitleReducer } from './reducer';
import { setTitle } from './actions';

describe('title reducer', () => {
  it('should accept 2 arguments', () => {
    expect(TitleReducer.length).toEqual(2);
  });

  it('should return original state if no action is provided', () => {
    const reducer = TitleReducer as any;
    const state = 'some_state';

    expect(reducer(state, {})).toEqual(state);
  });

  it('should return original state if action is unhandled', () => {
    const reducer = TitleReducer as any;
    const state = 'some_state';
    const action = {
      type: 'some_type',
      payload: 'some_paylaod'
    };

    expect(reducer(state, action)).toEqual(state);
  });

  it('should return updated state on SET_TITLE', () => {
    const state = 'some_state';
    const new_state = 'new_state';
    const reducer = TitleReducer;
    const action = setTitle(new_state);

    expect(reducer(state, action) === state).toBeFalsy();
    expect(reducer(state, action)).toEqual(new_state);
  });
});