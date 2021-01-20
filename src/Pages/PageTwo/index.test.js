import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme';
import PageTwo from './';
import toJson from 'enzyme-to-json';


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



/*
beforeAll(() => {
})

describe('snapshot match', () => {

  const inputTag = document.createElement('input');
  document.body.appendChild(inputTag);

  let wrapper = mount(<PageTwo />);

  it('renders as expected',async () => {
      await waitFor(() => {
        expect(toJson(wrapper)).toMatchSnapshot();
      });
  });
  
});
*/

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

    //console.log(wrapper.debug());
    console.log(">>> selects second a tag", wrapper.find('a').at(1).debug());

    wrapper.find('a').at(1).simulate('click');

    console.log(wrapper.debug());

    wrapper.find('a').at(0).simulate('click');

    console.log(wrapper.debug());    
  });

  it('renders as expected',async () => {
    expect(toJson(wrapper)).toMatchSnapshot();
});  

  
});

