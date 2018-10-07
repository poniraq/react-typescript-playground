import * as React from 'react';
import * as enzyme from 'enzyme';
import { StoreProvider } from '@redux';
import * as injector from '@redux/injector';
import PostList, { mapDispatchToProps, mapStateToProps } from './PostList';


describe('PostList', () => {
  const post = { id: undefined, title: 'some_title', body: 'some_body' };
  const error = 'some_error';
  const fetching = false;

  const state = { posts: { posts: [post], error, fetching }};

  it('renders without crashing', () => {
    const rendered = enzyme.mount(
      <StoreProvider>
        <PostList />
      </StoreProvider>
    );
  
    const list = rendered.find(PostList);
    expect(list).toBeDefined();
  });

  describe('mapStateToProps', () => {
    beforeAll(() => {
      spyOn(injector, 'inject').and.callFake(function() { return arguments[3]; });
    });

    it('maps state to props without errors', () => {
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
