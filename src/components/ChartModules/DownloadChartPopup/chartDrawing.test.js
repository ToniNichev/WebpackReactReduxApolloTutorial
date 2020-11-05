import React from 'react';
import { shallow, mount } from 'enzyme';
import chartDrawing, { scaleIt } from './chartDrawing';
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

const mockCanvas = {
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
      fillText: (a, b, c) => {}
    }
  },
  val: () => {
    return "test message";
  },
  toDataURL: () => {
    return 'data url';
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
  innerHTML : '1y'
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


describe('draw init', () => {

  it('draw init fails gracefully', () => {
    const result = chartDrawing.init(
        {},
        {}, 
        undefined, 
        null, 
        null,
        null);

    expect(result).toBe(null);
  });  


  it('draw init passes', () => {
    const result = chartDrawing.init(
      srcCanvas,
      destCanvas, 
      mockInputtext,
      mockTimeSpan1D,
      chartDrawConfig, 
      null, 
      null,
      null);

    expect(result).toBe(true);
  });
});

describe('draw functions', () => {
  it('setDrawMode sets the right value', () => {
    chartDrawing.init(
      srcCanvas,
      destCanvas, 
      mockInputtext,
      mockTimeSpan1M,
      chartDrawConfig, 
      null, 
      null,
      null);

    const result = chartDrawing.setDrawMode(true);
    expect(result).toBe(true);
  }); 
});

describe('draw functions', () => {
  it('setDrawMode sets the right value', () => {
    chartDrawing.init(
      srcCanvas,
      destCanvas, 
      mockInputtext,
      mockTimeSpan1M,
      chartDrawConfig, 
      null, 
      null,
      mockCanvas
      );

    const result = chartDrawing.setDrawMode(true);
    expect(result).toBe(true);
  }); 

  it('setYCursor sets the right value and getYCursor returns the right value', () => {
    chartDrawing.setYCursor(10, true);
    const result = chartDrawing.getYCursor();
    expect(result).toBe(10);
  }); 

  it('setYCursor sets the right value and getYCursor returns the right value', () => {
    chartDrawing.setYCursor(10);
    const result = chartDrawing.getYCursor();
    expect(result).toBe(20);
  });   
  
  it('generateChartShareImage to return valid chartDrawingResult object, fillRect to return the right properties', () => {
    const chartDrawingResult = chartDrawing.generateChartShareImage(quoteData);
    const result = chartDrawingResult.drawText('test text', 10, mockFontStyle, false).fillRect(1,10,100, 110);
    expect(result.x).toBe(1);
    expect(result.y).toBe(10);
    expect(result.width).toBe(100);
    expect(result.height).toBe(110);
  });    
  
  it('drawText to have deawImage and drawImage id to return mock-id', () => {
    const chartDrawingResult = chartDrawing.generateChartShareImage(quoteData);
    const result = chartDrawingResult.drawText('test text', 10, mockFontStyle, false).drawImage(mockCanvas, 0,0, 100, 100);
    expect(result.canvas.getContext().canvas.id).toBe('mock-id');
    //console.log(">>", result.canvas.getContext().fillRect(5,5, 15,15) );
    expect(result.canvas.getContext().fillRect(5,5, 15,15)).toStrictEqual({x:5, y:5, width:15, height: 15});
    //expect(result.width).toBe(100);
    //expect(result.height).toBe(110);
  });  

  it('4 drawText to have deawImage and drawImage id to return mock-id', () => {
    chartDrawing.generateChartShareImage(quoteData);
  });    

  it('3 drawText to have deawImage and drawImage id to return mock-id', () => {
    chartDrawing.init(
      srcCanvas,
      destCanvas, 
      mockInputtext,
      mockTimeSpan1M,
      chartDrawConfig, 
      null, 
      null,
      mockCanvas
    );

    chartDrawing.generateChartShareImage(quoteData);
    const result = chartDrawing.captureGraphState().drawImage(srcCanvas, 10,40);
    expect(result.x).toBe(10);
    expect(result.y).toBe(40);
  });   
  
  it('2 drawText to have deawImage and drawImage id to return mock-id', () => {
    chartDrawing.downloadChartAction(mockEvent);
    expect(mockEvent.target.href).toBe('data url');
  });    

  it('1 drawText to have deawImage and drawImage id to return mock-id', () => {
    //scaleIt(mockCanvas, 20);
    //expect(mockEvent.target.href).toBe('data url');
  }); 

  

});
