import * as root from './root';

describe('Redux#root', () => {
  it('loads without error', () => {
    expect(root).toBeDefined();
  });
  
  it('has RootEpic', () => {
    expect(root).toHaveProperty('RootEpic');
  });

  it('has RootReducer', () => {
    expect(root).toHaveProperty('RootReducer');
  });

  describe('selectors', () => {
    const title = 'some_title';
    const selectors = root.selectors;

    it('is defined', () => {
      expect(root).toHaveProperty('selectors');
    });

    it('has getTitle', () => {
      expect(selectors.getTitle({ title } as any)).toEqual(title);
    });
  });
});