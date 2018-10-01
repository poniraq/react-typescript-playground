import { TitleAction } from './actions';

describe('TitleAction', () => {
  const title = 'some_title';

  describe('SetTitle', () => {
    const action = TitleAction.SetTitle(title);

    it('creates without error', () => {
      expect(action).toBeDefined();
    });

    it('carries "title" payload', () => {
      expect(action.payload).toEqual(title);
    });
  });

  describe('NewTitle', () => {
    const action = TitleAction.NewTitle(title);

    it('creates without error', () => {
      expect(action).toBeDefined();
    });

    it('carries "title" payload', () => {
      expect(action.payload).toEqual(title);
    });
  });
});
