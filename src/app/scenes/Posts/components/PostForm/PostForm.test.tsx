import * as enzyme from 'enzyme';
import * as React from 'react';
import PostForm from './PostForm';


describe('PostForm', () => {
  const props = {
    post: { id: undefined, title: 'some_title', body: 'some_body' },
    submit: () => {}
  };

  it('renders without crashing', () => {
    const form = enzyme.shallow(<PostForm {...props} />);
    expect(form).toBeDefined();
  });
});

