import { ActionsObservable } from 'redux-observable';
import { of } from 'rxjs';
import { ActionType } from './types';
import { Actions } from './actions';
import { TitleEpic } from './epic';

const title = 'some_title';

describe('TitleEpic', () => {
  describe('SET_TITLE', () => {
    const action$ = new ActionsObservable(of(Actions.SetTitle(title)));
    const epic = TitleEpic(action$, {} as any, {});

    it('emits NEW_TITLE with title payload', (done) => {
      epic.subscribe(action => {
        expect(action.type).toEqual(ActionType.NEW_TITLE);
        expect(action.payload).toEqual(title);
        done();
      });
    });
  });
});