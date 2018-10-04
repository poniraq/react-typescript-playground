import Actions from './actions';

describe('TitleAction', () => {
  const title = 'some_title';

  describe('SetTitle', () => {
    const action = Actions.SetTitle(title);

    it('creates without error', () => {
      expect(action).toBeDefined();
    });

    it('carries "title" payload', () => {
      expect(action.payload).toEqual(title);
    });
  });

  describe('NewTitle', () => {
    const action = Actions.NewTitle(title);

    it('creates without error', () => {
      expect(action).toBeDefined();
    });

    it('carries "title" payload', () => {
      expect(action.payload).toEqual(title);
    });
  });
});
