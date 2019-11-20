import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import reducers from '../../reducers';
import { createStore} from 'redux';
import Component from './renderer';

const store = createStore(reducers, {});
let wrapper;
describe('Testing Greetings component', () => {

<<<<<<< HEAD
  beforeEach(() => {
    wrapper = mount(
        <Component styles={{}} store={store} />
=======
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Component styles={{}} />
      </Provider>
>>>>>>> 6e17888c591d28acac720d168a60602f471d57d6
    );
  });

  it('renders as expected', () => {
    // to snapshot test
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('textbox does not exist', () => {  
    expect(wrapper.find('input').exists()).toBe(false);
  });

  it('textbox exists after h2 click', () => {  
    // simulate click on the h2 tag trigering props change and visualizing the input text box
    console.log(">>>"+ wrapper.find('h2').html() + "<<<");
    wrapper.find('h2').simulate('click');
    console.log(">>>"+ wrapper.find('h2').html() + "<<<");
    expect(wrapper.find('input').exists()).toBe(true);
  });    

  it('textbox values change properly', () => {    
    // text box value tests
    expect(wrapper.find('input').props().value).toBe('No Name');
    wrapper.find('input').props().value = 'test';
    expect(wrapper.find('input').props().value).toBe('test');
  });    

});
