import React from 'react';
import { shallow, mount } from 'enzyme';
import chartDrawing, { scaleItTest, drawModeTest, getMouseCoordinatesTest } from './chartDrawing';
import toJson from 'enzyme-to-json';

const quoteData =  {
  curmktstatus: 'REG_MKT',
  ExtendedMktQuote: {
    last: '115.80',
    last_timedate: "7:59 PM EDT",
    change: '+10.5',
    change_pct: '+12.4'
  },
  last: '110.78',
  change: "+1.34",
  change_pct: "+1.23",
  name: "Apple Inc",
  symbol: "AAPL",
  exchange: "NASDAQ",
  currencyCode: "USD",
  last_timedate: "4:00 PM EDT",
}

const chartDrawConfig = {
  canvas: {
    width: 670,
    height: 450,
    chartVerticalPosition: 100,
    customMessageText: {
      font: '26px Proxima Nova Semi Bold, Helvetica, Arial, sans-serif',
      color: 'black'
    },

    boldText: {
      font: '26px Proxima Nova Semi Bold, Helvetica, Arial, sans-serif',
      color: 'black'
    },

    regularText: {
      font: '12px "Proxima Nova Semi Bold", Helvetica, Arial, sans-serif',
      color: 'silver'
    },

    change: {
      font: '12px "Proxima Nova Semi Bold", Helvetica, Arial, sans-serif',
      color: {
        positive: '#31a745',
        noChange: '#737373',
        negative: '#e0352b'

      }
    },

    extendedHoursLabel: {
      labelText: 'Extended Hours',
      font: '12px "Proxima Nova Semi Bold", Helvetica, Arial, sans-serif',
      color: 'orange'
    },

    extendedHours: {
      label: 'Extended Hours',
      font: '12px "Proxima Nova Semi Bold", Helvetica, Arial, sans-serif',
      color: 'silver'
    },

    priceLabels: {
      font: '26px "Proxima Nova Semi Bold", Helvetica, Arial, sans-serif',
      color: 'black'
    },

    timeSpan: {
      font: '12px "Proxima Nova Semi Bold", Helvetica, Arial, sans-serif',
      color: 'silver'
    }
  },
  textPosition: {
    x: 15,
    y: 29
  }
};

const mockCanvasTwo = {
  getContext: () => {
    return {
      canvas: {
        id: 'mock-id-two',
      },
    }
  }
}

const mockCanvas = {
  offset: () => {
    return {
      left: 10,
      top: 10
    }
  },
  getContext: () => {
    return {
      canvas: {
        id: 'mock-id',
      },
      fillRect: (x, y, width, height) => {
        return {
          x,
          y,
          width,
          height
        }
      },
      drawImage: (canvas, x, y, width, height) => {
        return {
          canvas,
          x,
          y,
          width,
          height
        }
      },
      fillText: (txt, x, y) => {
        return {
          txt,
          x,
          y
        }
      }
    }
  },
  val: () => {
    return "test message";
  },
  toDataURL: () => {
    return 'data url';
  },
  offset: () => {
    return {
      left: 10,
      top: 10
    }
  }
};

const mockInputtext = {
  id: 'chartCustomText'
}

const mockTimeSpan1D = {
  innerHTML : '1D'
}

const mockTimeSpan1M = {
  innerHTML : '1M'
}

const mockTimeSpan1Y = {
  innerHTML : '1Y'
}

const mockFontStyle = {
  ...chartDrawConfig
}

const srcCanvas = {
  ...mockCanvas
};
const destCanvas = {
  ...mockCanvas
};

const mockEvent = {
  target: {
    href: 'mock href'
  }
}





global.isJestEnv = true;

// Mock jQuery object
global.$ = (objectId) => {
  if(objectId == '#chartCustomText') {
    return {
      val: () => {
        return 'some chart custom text';
      }
    }
  }
  else
    return [destCanvas,destCanvas];
}


describe('draw functions', () => {

  beforeEach(() => {
    return chartDrawing.init(
      srcCanvas,
      destCanvas, 
      mockInputtext,
      mockTimeSpan1Y,
      chartDrawConfig, 
      null, 
      null,
      mockCanvas);    
  });

  it('generateChartShareImage, drawImage, fillText to return mock canvas with the right parameters.', () => {
    const { destCtx:mockTestCanvas, img:testImageWatermark, imgLogo:testImageLogo } = chartDrawing.generateChartShareImage(quoteData);
    testImageWatermark.onload();
    testImageLogo.onload();
    const mockTestCanvasTwo = mockTestCanvas.drawImage(mockCanvas, 10,20, 100,120);
    expect(mockTestCanvas.canvas.id).toBe('mock-id');
    expect(mockTestCanvas.fillText('test', 10, 20)).toStrictEqual({ txt: 'test', x: 10, y: 20 });
    expect(mockTestCanvas.fillRect(1, 2, 110, 120)).toStrictEqual({ x: 1, y: 2, width: 110, height: 120 });
    expect(mockTestCanvasTwo.x).toBe(10);
    expect(mockTestCanvasTwo.y).toBe(20);
    expect(mockTestCanvasTwo.width).toBe(100);
    expect(mockTestCanvasTwo.height).toBe(120);    
  });

});


describe('chart drawing time span', () => {

  it('1 draw init passes', () => {  
    chartDrawing.init(
      srcCanvas,
      destCanvas, 
      mockInputtext,
      mockTimeSpan1D,
      chartDrawConfig, 
      null, 
      null,
      mockCanvas);    

    const { destCtx:mockTestCanvas } = chartDrawing.generateChartShareImage(quoteData);
  });

  it('1 draw init passes', () => {  
    chartDrawing.init(
      srcCanvas,
      destCanvas, 
      mockInputtext,
      mockTimeSpan1M,
      chartDrawConfig, 
      null, 
      null,
      mockCanvas);    

      const { destCtx:mockTestCanvas } = chartDrawing.generateChartShareImage(quoteData);
  }); 

  it('1 draw init passes', () => {  
    chartDrawing.init(
      srcCanvas,
      destCanvas, 
      mockInputtext,
      {innerHTML: 'something else'},
      chartDrawConfig, 
      null, 
      null,
      mockCanvas);    

      const { destCtx:mockTestCanvas } = chartDrawing.generateChartShareImage(quoteData);
  });   
  
});


describe('post market', () => {

  it('post market test', () => {  
    chartDrawing.init(
      srcCanvas,
      destCanvas, 
      mockInputtext,
      mockTimeSpan1D,
      chartDrawConfig, 
      null, 
      null,
      mockCanvas);    

  quoteData.curmktstatus = 'POST_MKT';
  const { destCtx:mockTestCanvas } = chartDrawing.generateChartShareImage(quoteData);
  });
});