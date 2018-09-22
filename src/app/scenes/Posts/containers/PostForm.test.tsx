import { StoreProvider } from '@redux';
import * as enzyme from 'enzyme';
import * as React from 'react';
import PostForm from './PostForm';
import { mapStateToProps, mapDispatchToProps } from './PostForm';

describe('PostForm', () => {
  const post = { id: undefined, title: 'some_title', body: 'some_body' };
  const state = { posts: { newPost: post }};

  it('renders without crashing', () => {
    const rendered = enzyme.mount(
      <StoreProvider>
        <PostForm />
      </StoreProvider>
    );
  
    const form = rendered.find(PostForm);
    expect(form).toBeDefined();
  });

  describe('mapStateToProps', () => {
    it('maps state to pros without errors', () => {
      expect(mapStateToProps(state as any)).toBeDefined();
    });
    it('maps correct state to props', () => {
      expect(mapStateToProps(state as any).post).toEqual(post);
    });
  });

  describe('mapDispatchToProps', () => {
    const dispatch = (a: any) => a;

    it('maps dispatch to props without errors', () => {
      expect(mapDispatchToProps(dispatch)).toBeDefined();
    });
    it('maps dispatch to submit', () => {
      expect(mapDispatchToProps(dispatch).submit).toBeDefined();
    });
  });
});
