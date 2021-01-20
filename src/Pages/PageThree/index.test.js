import React from 'react';
import { shallow, mount } from 'enzyme';
import PageThree from './';
import toJson from 'enzyme-to-json';

const quoteData =  {
  ExtendedMktQuote: {
    last_timedate: "7:59 PM EDT",
  },
  name: "Apple Inc",
  symbol: "AAPL",
  exchange: "NASDAQ",
  currencyCode: "USD",
  last_timedate: "4:00 PM EDT",
}

let chartCanvas;

global.isJestEnv = true;

describe('Testing PageThree component', () => {

    it('renders as the snapshot', () => {
      const wrapper = mount(
        <PageThree />
      );
     expect(toJson(wrapper)).toMatchSnapshot();
   });  



   it('button click adds window.location.hash', () => {
     const wrapper = mount(
      <PageThree />
     );

     
     //wrapper.find('button').simulate('click');
     console.log("!!>>>", wrapper.find('button'));
     //console.log(">>>>", wrapper.find('.DownloadChartPopup-downloadChartModal').html());     
     //wrapper.find('button').simulate('click');
     //console.log(">>>>", wrapper.find('.DownloadChartPopup-downloadChartModal').html());
     
     //expect(wrapper.find('.DownloadChartPopup-downloadChartModal')).toBe('one');
   });   
});
