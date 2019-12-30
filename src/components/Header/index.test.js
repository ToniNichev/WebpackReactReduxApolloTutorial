// Link.react.test.js
import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import toJson from 'enzyme-to-json';

describe('Testing Header component', () => {
    it('renders as expected!!!', () => {
      const wrapper = shallow(
        <Header title="Title test" />
      );
     expect(toJson(wrapper)).toMatchSnapshot();
   });
});