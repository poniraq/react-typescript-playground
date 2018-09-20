import * as enzyme from 'enzyme';
import * as React from 'react';
import App from './App';

it('renders without crashing', () => {
  const app = enzyme.shallow(<App />);
  expect(app).toBeDefined();
});
