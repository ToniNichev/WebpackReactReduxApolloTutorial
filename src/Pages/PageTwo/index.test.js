import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import PageTwo from './';
import toJson from 'enzyme-to-json';


//global.setLabelData = (data) => {};


global.fetch = (url) => {
  return new Promise((resolve) => {

      resolve({
        json: () => {
          return new Promise((resolve) => {
            
            resolve("Test User");            
          });
        }
      });
  })
}

beforeAll(() => {
  const div = document.createElement('input');
  window.domNode = div;
  document.body.appendChild(div);
})


describe('snapshot match', () => {
  let wrapper = mount(<PageTwo />);

  it('renders as expected',async () => {
      await waitFor(() => {
        expect(toJson(wrapper)).toMatchSnapshot();
      });
  });
  
});


