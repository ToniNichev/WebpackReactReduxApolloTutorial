import React from 'react';
import { shallow, mount } from 'enzyme';
import PageTwo from './';
import toJson from 'enzyme-to-json';
describe('Testing Header component', () => {

    it('renders as the snapshot', () => {
      const wrapper = shallow(
        <PageTwo />
      );
     expect(toJson(wrapper)).toMatchSnapshot();
   });
   
   it('button click adds window.location.hash', () => {
    const wrapper = shallow(
      <PageTwo />
    );
    wrapper.find('button').simulate('click');
    expect(window.location.hash).toBe('#TEST');
   });

   it('clicking on LI > A sets `input` placeholder to `one`', () => {
    const wrapper = shallow(
      <PageTwo />
    );
    wrapper.find('li > a').at(0).simulate('click');
    expect(wrapper.find('input').props().placeholder).toBe('one');
   }); 
   
   it('clicking on LI > A sets `input` placeholder to `two`', () => {
    const wrapper = shallow(
      <PageTwo />
    );
    wrapper.find('li > a').at(1).simulate('click');
    expect(wrapper.find('input').props().placeholder).toBe('two');
   });    

});