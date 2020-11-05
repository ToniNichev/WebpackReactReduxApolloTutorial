import React from 'react';
import { shallow, mount } from 'enzyme';
import chartDrawing, { scaleItTest, getMouseCoordinatesTest, drawArowTest, drawModeTest } from './chartDrawing';
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
      drawImage: (canvas, x, y, width, height) => {
        return [canvas,x,y];
      }
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
}

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
  },
  offset: () => {
    return {
      left: 10,
      top: 10
    }
  },
  beginPath: () => {},
  moveTo: () => {},
  lineTo: () => {},
  stroke: () => {},
  fill: () => {},
  arc: (x, y, radius, sAngle, eAngle) => {}
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
  x: 10,
  y: 20,
  target: {
    href: 'mock href'
  }
}

global.isJestEnv = true;

global.$ = (objectId) => {
  if(objectId == '#mock-id-two') {
    return {
      offset: () => {
        return 10;
      }
    }
  }
  else
    return [destCanvas,destCanvas];
}


describe('draw init', () => {

  it('test getMouseCoordinatesTest', () => {
    chartDrawing.init(
      mockCanvas,
      mockCanvasTwo, 
      mockInputtext,
      mockTimeSpan1M,
      chartDrawConfig, 
      null, 
      null,
      mockCanvas
      );

    getMouseCoordinatesTest(mockEvent);
    expect(mockEvent.x).toBe(10);
    expect(mockEvent.y).toBe(20);
    expect(mockEvent.target.href).toBe('mock href');
  });  

  it('test drawArrow', () => {
    const result = drawArowTest(mockCanvas, 1, 2, 55, 81, 100, 10, 2, 'red', 'green');
    strokeStyle:
    expect(mockCanvas.strokeStyle).toBe('red');
    expect(mockCanvas.fillStyle).toBe('green');
    expect(mockCanvas.lineWidth).toBe(100);
    expect(mockCanvas.getContext().canvas.id).toBe('mock-id');
  });

  it('drawModeTest 11212', () => {
    drawModeTest(1);
    const result = chartDrawing.drawAnnotations(mockEvent);
  }); 

  /*
  it('drawModeTest 2', () => {  
    drawModeTest(1);
    const resultTwo = chartDrawing.drawAnnotations(mockEvent);    
    expect(result.canvas.id).toBe('mock-id');  
  });  
  */
 
  
});