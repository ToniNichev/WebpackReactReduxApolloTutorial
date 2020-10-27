import React from 'react';
import { shallow, mount } from 'enzyme';
import PageTwo from './';
import toJson from 'enzyme-to-json';
describe('Testing Header component', () => {

    it('renders as expected!!!', () => {
      const wrapper = mount(
        <PageTwo />
      );
     expect(toJson(wrapper)).toMatchSnapshot();
   });
   
   it('button click works as expected', () => {
    const wrapper = mount(
      <PageTwo />
    );
    wrapper.find('button').simulate('click');
    expect(wrapper.find('input').props().placeholder).toBe('TEST');
   });   

   it('clicking on LI > A works as expected', () => {
    const wrapper = shallow(
      <PageTwo />
    );
    wrapper.find('li > a').at(0).simulate('click');
    expect(wrapper.find('input').props().placeholder).toBe('one');
   });      

});