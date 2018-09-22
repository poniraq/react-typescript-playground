import { StoreProvider } from '@redux';
import * as enzyme from 'enzyme';
import * as React from 'react';
import PostList, { mapDispatchToProps, mapStateToProps } from './PostList';


describe('PostList', () => {
  const post = { id: undefined, title: 'some_title', body: 'some_body' };
  const error = 'some_error';
  const fetching = false;

  const state = { posts: { posts: [post], error, fetching }};

  // TODO: resolve jest es6 import issue
  xit('renders without crashing', () => {
    const rendered = enzyme.mount(
      <StoreProvider>
        <PostList />
      </StoreProvider>
    );
  
    const list = rendered.find(PostList);
    expect(list).toBeDefined();
  });

  describe('mapStateToProps', () => {
    it('maps state to pros without errors', () => {
      expect(mapStateToProps(state as any)).toBeDefined();
    });
    
    it('maps correct state to props', () => {
      expect(mapStateToProps(state as any).posts).toEqual([post]);
      expect(mapStateToProps(state as any).error).toEqual(error);
      expect(mapStateToProps(state as any).loading).toEqual(fetching);
    });
  });

  describe('mapDispatchToProps', () => {
    const dispatch = (a: any) => a;

    it('maps dispatch to props without errors', () => {
      expect(mapDispatchToProps(dispatch)).toBeDefined();
    });
    it('maps dispatch to fetch', () => {
      expect(mapDispatchToProps(dispatch).fetch).toBeDefined();
    });
  });
});
