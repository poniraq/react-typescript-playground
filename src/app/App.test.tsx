import * as enzyme from 'enzyme';
import * as React from 'react';
import App from './App';
import { StoreProvider } from '@redux';

it('renders without crashing', () => {
  const rendered = enzyme.mount(
    <StoreProvider>
      <App />
    </StoreProvider>
  );

  const app = rendered.find(App);
  expect(app).toBeDefined();
});
