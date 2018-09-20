import * as enzyme from 'enzyme';
import * as React from 'react';
import { StoreProvider } from './store';

const createProvider = () => enzyme.shallow(<StoreProvider><div></div></StoreProvider>);

describe('<StoreProvider />', () => {
  it('renders without crashing', () => {
    const provider = createProvider();
    expect(provider).toBeDefined();
  });
  
  it('creates store on mount', () => {
    const provider = createProvider();
  
    expect(provider.props().store).toBeDefined();
  });
});
