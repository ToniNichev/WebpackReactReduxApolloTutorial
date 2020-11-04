import React from 'react';
import { shallow, mount } from 'enzyme';
import chartDrawing from './chartDrawing';
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

describe('Testing Test component', () => {

    it('test ', () => {
    let test = chartDrawing.test();
    console.log(">>>>>>>>>>>>>", test);
    //expect(toJson(wrapper)).toMatchSnapshot();
   });    
 
});
