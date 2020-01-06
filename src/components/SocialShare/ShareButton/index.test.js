  import React from 'react';
  import { shallow, mount } from 'enzyme';
  import toJson from 'enzyme-to-json';
  import Component from './index';
  import Tools from '../Tools';
  import Icon from '../Icons/Facebook';

  describe('Testing Social Share component', () => {
      it('renders as expected', () => {
        const wrapper = mount(<Component type="facebook" icon={Icon} link={Tools.getFacebookUrl()}/>);

      expect(toJson(wrapper)).toMatchSnapshot();
      console.log(wrapper.html() )
      //expect(wrapper.props()).toHaveProperty('key', 'facebook');
    });
  });