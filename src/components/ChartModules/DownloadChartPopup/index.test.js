import toJson from 'enzyme-to-json';
import React from 'react';
import { shallow } from 'enzyme';
import DownloadChart from '.';

const quoteData =  {
  curmktstatus: 'REG_MKT',
  ExtendedMktQuote: {
    last: '115.80',
    last_timedate: '7:59 PM EDT',
    change: '+10.5',
    change_pct: '+12.4'
  },
  last: '110.78',
  change: '+1.34',
  change_pct: '+1.23',
  name: 'Apple Inc',
  symbol: 'AAPL',
  exchange: 'NASDAQ',
  currencyCode: 'USD',
  last_timedate: '4:00 PM EDT',
};

let closePopup = false;

const sendData = (val) => {
  closePopup = val;
};

global.isJestEnv = true;

const chartDrawing = {
  exportFileName: 'test',
  drawAnnotations: () => {},
  captureGraphState: () => {},
  setDrawMode: () => {}
};

describe('DownloadChartPopup', () => {
  global.isJestEnv = true;
  const wrapper = shallow(<DownloadChart quoteData={quoteData} sendData={() => { sendData(!closePopup); }} />);

  /*
  it('canvas mouse events', () => {
    wrapper.find('canvas').simulate('MouseMove');
    wrapper.find('canvas').simulate('MouseUp');
    wrapper.find('canvas').simulate('MouseDown');
    expect(wrapper.find('canvas').exists()).toBe(true);
  });
  */

  it('Test 123', () => {
    expect(wrapper.find('canvas').length).toBe(1);
    wrapper.find('canvas').simulate('MouseDown');
    //wrapper.find('canvas').simulate('MouseUp');
    //wrapper.find('canvas').simulate('MouseMove');
    console.log(">>>",wrapper.find('canvas').length);
    //expect(closePopup).toBe(true);
  });

});
