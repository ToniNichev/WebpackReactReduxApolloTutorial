import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Provider } from 'react-redux';
import reducers from '../../reducers';
import { createStore} from 'redux';
import About from './index.js';

const store = createStore(reducers, {});
describe('Testing About component', () => {
  it('renders as expected!!!', () => {
    const wrapper = mount(
      <Provider store={store}>
        <About userName="Toni" />
      </Provider>
    );
   expect(toJson(wrapper)).toMatchSnapshot();
 });
});