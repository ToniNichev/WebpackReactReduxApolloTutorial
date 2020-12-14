import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import PageTwo from './';
import toJson from 'enzyme-to-json';

global.setLabelData = (data) => {};
  
global.fetch = (url) => {
  return new Promise((resolve) => {

      resolve({
        json: () => {
          return new Promise((resolve) => {
            resolve("Test 121211");            
          });
        }
      });
  })
}


describe('test useEffect and mock fetch', () => {

  

  it('should call useEffect for multiquote', async () => {  
    act( () => {
      const wrapper = mount(<PageTwo />);
      wrapper.update();
    });
  });

});

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