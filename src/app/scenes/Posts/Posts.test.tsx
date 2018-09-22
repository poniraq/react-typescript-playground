import * as enzyme from 'enzyme';
import * as React from 'react';
import Posts from './Posts';

it('renders without crashing', () => {
  const posts = enzyme.shallow(<Posts />);
  expect(posts).toBeDefined();
});
