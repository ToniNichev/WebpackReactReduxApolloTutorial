import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import MyComponent from '../index.js';

describe('Testing Greetings component', () => {
  it('renders as expected!!!', () => {
    const wrapper = shallow(
      <MyComponent />
    );
   expect(toJson(wrapper)).toMatchSnapshot();
 });
});