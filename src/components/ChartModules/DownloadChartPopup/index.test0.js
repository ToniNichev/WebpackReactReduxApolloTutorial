import React from 'react';
import { shallow, mount } from 'enzyme';
import DownloadChartPopup from './';
import DownloadChartButton from '../DownloadChartButton';
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

let chartCanvas = {};

let downloadImagePopupVisible = false;
const setValueOfDownloadImagePopupVisible = (val) => {
  downloadImagePopupVisible = val;
}

describe('Testing Header component', () => {

    it('renders as the snapshot', () => {
      const wrapper = mount(
        <DownloadChartPopup 
          quoteData={quoteData} 
          chartCanvas={chartCanvas} 
          timeSpan="1D"
          sendData={() => { setValueOfDownloadImagePopupVisible(!downloadImagePopupVisible); }} />);
      expect(toJson(wrapper)).toMatchSnapshot();
   });    
 
});
