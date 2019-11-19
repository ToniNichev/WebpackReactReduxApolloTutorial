import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import reducers from '../../reducers';
import { createStore} from 'redux';
import Component from './renderer';

const store = createStore(reducers, {});
describe('Testing Greetings component', () => {
  it('renders as expected!!!', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Component styles={{}} />
      </Provider>
    );
    // to snapshot test
    expect(toJson(wrapper)).toMatchSnapshot();
    // make sure that textbox does not exist
    expect(wrapper.find('input').exists()).toBe(false);
    // simulate click on the h2 tag trigering props change and visualizing the input text box
    wrapper.find('h2').simulate('click');
    expect(wrapper.find('input').exists()).toBe(true);
    // text box value tests
    expect(wrapper.find('input').props().value).toBe('No Name');
    wrapper.find('input').props().value = 'test';
    expect(wrapper.find('input').props().value).toBe('test');

 });
});
