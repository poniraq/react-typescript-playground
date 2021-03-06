import * as enzyme from 'enzyme';
import * as React from 'react';
import Title from './AppTitle';
import { StoreProvider } from '@redux';

const createElement = () => {
  const wrapper = enzyme.shallow(
    <StoreProvider>
      <Title />
    </StoreProvider>
  );

  return wrapper.find(Title).first();
};

describe('<AppTitle /> Container', () => {
  it('renders without crashing', () => {
    const el = createElement();
    expect(el).toBeDefined();
  });
});
