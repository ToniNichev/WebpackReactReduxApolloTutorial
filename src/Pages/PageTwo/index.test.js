import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
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

beforeAll(() => {
  const inputTag = document.createElement('input');
  document.body.appendChild(inputTag);
})

describe('snapshot match', () => {
  let wrapper = mount(<PageTwo />);

  it('renders as expected',async () => {
      await waitFor(() => {
        expect(toJson(wrapper)).toMatchSnapshot();
      });
  });
  
});


