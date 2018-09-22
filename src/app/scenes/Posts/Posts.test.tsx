import { StoreProvider } from '@redux';
import * as enzyme from 'enzyme';
import * as React from 'react';
import Posts from './Posts';

it('renders without crashing', () => {
  const rendered = enzyme.mount(
    <StoreProvider>
      <Posts />
    </StoreProvider>
  );

  const posts = rendered.find(Posts);
  expect(posts).toBeDefined();
});
