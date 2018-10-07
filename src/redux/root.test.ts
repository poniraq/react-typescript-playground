import * as root from './root';

describe('Redux#root', () => {
  it('loads without error', () => {
    expect(root).toBeDefined();
  });
  
  it('has RootEpic', () => {
    expect(root).toHaveProperty('AppEpic');
  });

  it('has RootReducer', () => {
    expect(root).toHaveProperty('AppReducer');
  });
});