import * as enzyme from 'enzyme';
import * as React from 'react';
import { Title } from './Title';

const title = 'TEST_TITLE';
const createElement = () => enzyme.mount(<Title title={title} />);

describe('<Title /> Component', () => {
  it('renders without crashing', () => {
    const el = createElement();
    expect(el).toBeDefined();
  });
  
  it('displays title', () => {
    const el = createElement();
    expect(el.text()).toEqual(title);
  });
});
