import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import reducers from '../../reducers';
import { createStore} from 'redux';
import About from './index.js';

const store = createStore(reducers, {});
let wrapper;
describe('Testing About component', () => {

  beforeEach(() => {
    // Runs a function before each of the tests in this file runs
    wrapper = mount(
      <Provider store={store}>
        <About userName="Toni" />
      </Provider>
    );
  });

  it('renders as expected', () => {
   expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('expect to have state.userName set to John', () => {   
   wrapper.setState({userName: "John"});
   expect(wrapper.state('userName')).toEqual("John");
  });  
});