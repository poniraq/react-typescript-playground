import { TitleReducer } from './reducer';
import { TitleAction } from './actions';

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

  it('should do nothing on SET_TITLE', () => {
    const state = 'some_state';
    const new_state = 'new_state';
    const reducer = TitleReducer;
    const action = TitleAction.SetTitle(new_state);

    expect(reducer(state, action)).toEqual(state);
  });

  it('should do update title on NEW_TITLE', () => {
    const state = 'some_state';
    const new_state = 'new_state';
    const reducer = TitleReducer;
    const action = TitleAction.NewTitle(new_state);

    expect(reducer(state, action)).toEqual(new_state);
  });
});