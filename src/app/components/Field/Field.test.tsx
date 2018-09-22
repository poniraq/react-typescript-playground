import * as enzyme from 'enzyme';
import * as React from 'react';
import Field from './Field';


describe('Field', () => {
  const props = {
    value: 'some_title',
    onChange: () => {}
  };

  it('renders without crashing', () => {
    const field = enzyme.mount(<Field {...props} />);
    expect(field).toBeDefined();
  });
});

