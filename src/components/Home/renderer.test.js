import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Component from './renderer';

describe('Testing Home component', () => {
    it('renders as expected!!!', () => {
      const wrapper = shallow(<Component styles={{}} title="MyTest" />);

     expect(toJson(wrapper)).toMatchSnapshot();
     expect(wrapper.contains(<div>MyTest</div>)).toBe(true);
   });
});