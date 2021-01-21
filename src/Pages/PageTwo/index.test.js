import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme';
import PageTwo from './';
import toJson from 'enzyme-to-json';


// mock fetch function
global.fetch = (url) => {
  return new Promise((resolve) => {

      resolve({
        json: () => {
          return new Promise((resolve) => {
            
            resolve(`url: ${url}`);            
          });
        }
      });
  })
}

// create message event
var event = new Event('message');
event.origin = "test 123";


describe('PageTwo component', () => {

  // covers: if( document.querySelector("input") != null ) { ... }
  const inputTag = document.createElement('input');
  document.body.appendChild(inputTag);

  let wrapper;

  // wrapping with `act` to prevent warning messages
  it('test a links',async () => {

    await act(async () => {
      wrapper = mount(<PageTwo testOne="One" testTwo="Two"/>);
    });

    console.log("selects second a tag", wrapper.find('a').at(1).debug());
    
    wrapper.find('a').at(1).simulate('click');
    console.log(wrapper.debug());

    wrapper.find('a').at(0).simulate('click');
    console.log(wrapper.debug());    
  });

  it('renders as expected',async () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });  

  it('click button test', async () => {
    const btn = wrapper.find('button').simulate('click');
    expect( wrapper.find('input').props().value).toBe('click test');
  });

  
  it('test mock event listener',async () => {  
    window.dispatchEvent(event);
  });
  
  /*
  it('test mock event listener',async () => {  
    jest.spyOn(window, 'addEventListener').mockImplementationOnce((event, handler, options) => {
      console.log("#######################");
    }); 
  });
  */

  
});

