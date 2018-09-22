import * as enzyme from 'enzyme';
import * as React from 'react';
import { StoreProvider } from './store';

const createProvider = () => enzyme.mount(<StoreProvider><div /></StoreProvider>);

describe('<StoreProvider />', () => {
  it('renders without crashing', () => {
    const provider = createProvider();
    expect(provider).toBeDefined();
  });
});
