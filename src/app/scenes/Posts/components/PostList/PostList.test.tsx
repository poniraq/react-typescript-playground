import * as enzyme from 'enzyme';
import * as React from 'react';
import PostList from './PostList';

describe('PostList', () => {
  const props = {
    posts: [],
    error: '',
    loading: false,
    fetch: () => {}
  };

  it('renders without crashing', () => {
    const list = enzyme.shallow(<PostList {...props} />);
    expect(list).toBeDefined();
  });
});

