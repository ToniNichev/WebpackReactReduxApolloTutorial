
import chartDrawing, {  getMouseCoordinatesTest, drawArowTest } from './chartDrawing';

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

const mockCanvasTwoTest = {
  getContext: () => ({
    canvas: {
      id: 'mock-id-two',
    },
    drawImage: () => {},
    beginPath: () => 'beginPath',
    moveTo: (x, y) => ({ x, y }),
    lineTo: (tox, toy) => ({ tox, toy }),
    stroke: () => {},
    fill: () => {},
    arc: (x, y, radius, sAngle, eAngle, counterclockwise) => ({ x, y, radius, sAngle, counterclockwise })    
  }),
  drawImage: () => {},
  beginPath: () => 'beginPath',
  moveTo: (x, y) => ({ x, y }),
  lineTo: (tox, toy) => ({ tox, toy }),
  stroke: () => {},
  fill: () => {},
  arc: (x, y, radius, sAngle, eAngle, counterclockwise) => ({ x, y, radius, sAngle, counterclockwise })
};

const mockCanvas = {
  getContext: () => ({
    canvas: {
      id: 'mock-id',
    },
    fillRect: (x, y, width, height) => ({
      x,
      y,
      width,
      height
    }),
    drawImage: (canvas, x, y, width, height) => ({
      canvas,
      x,
      y,
      width,
      height
    }),
    fillText: (txt, x, y) => ({
      txt,
      x,
      y
    })
  }),
  val: () => 'test message',
  toDataURL: () => 'data url',
  offset: () => ({
    left: 10,
    top: 10
  })
};

const mockCanvasTwo = {
  getContext: () => ({
    canvas: {
      id: 'mock-id-two',
    },
    drawImage: () => {},
    beginPath: () => 'beginPath',
    moveTo: (x, y) => ({ x, y }),
    lineTo: (tox, toy) => ({ tox, toy }),
    stroke: () => {},
    fill: () => {},
    arc: (x, y, radius, sAngle, eAngle, counterclockwise) => ({ x, y, radius, sAngle, counterclockwise })    
  }),
  drawImage: () => {},
  beginPath: () => 'beginPath',
  moveTo: (x, y) => ({ x, y }),
  lineTo: (tox, toy) => ({ tox, toy }),
  stroke: () => {},
  fill: () => {},
  arc: (x, y, radius, sAngle, eAngle, counterclockwise) => ({ x, y, radius, sAngle, counterclockwise })
};

const mockInputtext = {
  id: 'chartCustomText'
};

const mockTimeSpan1D = {
  innerHTML: '1D'
};

const mockTimeSpan1M = {
  innerHTML: '1M'
};

const mockTimeSpan1Y = {
  innerHTML: '1Y'
};

const srcCanvas = {
  ...mockCanvas
};
const destCanvas = {
  ...mockCanvas,
};

const mockEvent = {
  target: {
    href: 'mock href'
  }
};

global.isJestEnv = true;

// Mock jQuery object
global.$ = (objectId) => {
  if (objectId === '#mock-id-two') {
    return destCanvas;
  }
  if (objectId === '#chartCustomText') {
    return {
      val: () => 'some chart custom text'
    };
  }
  return [destCanvas, destCanvas];
};

describe('draw functions', () => {

  beforeEach(() => chartDrawing.init(
    srcCanvas,
    destCanvas,
    mockInputtext,
    mockTimeSpan1Y,
    chartDrawConfig,
    null,
    null,
    mockCanvas));

  it('generateChartShareImage, drawImage, fillText to return mock canvas with the right parameters.', () => {
    const { destCtx: mockTestCanvas, img: testImageWatermark, imgLogo: testImageLogo } = chartDrawing.generateChartShareImage(quoteData);
    testImageWatermark.onload();
    testImageLogo.onload();
    const mockTestCanvasTwo = mockTestCanvas.drawImage(mockCanvas, 10, 20, 100, 120);
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

  it('1Day', () => {
    chartDrawing.init(
      srcCanvas,
      destCanvas,
      mockInputtext,
      mockTimeSpan1D,
      chartDrawConfig,
      null,
      null,
      mockCanvas);

    chartDrawing.generateChartShareImage(quoteData);
  });

  it('1Month', () => {
    chartDrawing.init(
      srcCanvas,
      destCanvas,
      mockInputtext,
      mockTimeSpan1M,
      chartDrawConfig,
      null,
      null,
      mockCanvas);

    chartDrawing.generateChartShareImage(quoteData);
  });

  it('Something else time span', () => {
    chartDrawing.init(
      srcCanvas,
      destCanvas,
      mockInputtext,
      { innerHTML: 'something else' },
      chartDrawConfig,
      null,
      null,
      mockCanvas);

    chartDrawing.generateChartShareImage(quoteData);
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
    chartDrawing.generateChartShareImage(quoteData);
    quoteData.curmktstatus = 'REG_MKT';
  });
});

describe('testing private methods', () => {

  beforeEach(() => chartDrawing.init(
    srcCanvas,
    destCanvas,
    mockInputtext,
    mockTimeSpan1Y,
    chartDrawConfig,
    null,
    null,
    mockCanvas));

  it('downloadChartAction test', () => {
    chartDrawing.downloadChartAction(mockEvent);
    expect(mockEvent.download).toBe('test.jpeg');
  });

  it('downloadChartAction test', () => {
    chartDrawing.drawAnnotations(mockEvent);
  });
});

describe('testing private methods', () => {

  beforeEach(() => chartDrawing.init(
    mockCanvasTwo,
    mockCanvasTwo,
    mockInputtext,
    mockTimeSpan1Y,
    chartDrawConfig,
    null,
    null,
    mockCanvas));

  it('downloadChartAction test', () => {
    getMouseCoordinatesTest(mockEvent);
    expect(mockEvent.download).toBe('test.jpeg');
  });

  it('downloadChartAction test', () => {
    drawArowTest(mockCanvasTwo, 1, 1, 100, 110, 5, 10, 20, 'red', 'silver');
  });

  it('downloadChartAction test', () => {
    drawArowTest(mockCanvasTwo, 1, 1, 100, 110, 5, 10, 20, 'red', null);
  });
});

describe('testing private methods', () => {
  beforeEach(() => chartDrawing.init(
    mockCanvasTwo,
    mockCanvasTwo,
    mockInputtext,
    mockTimeSpan1Y,
    chartDrawConfig,
    null,
    null,
    mockCanvas));

  it('downloadChartAction test 1243', () => {
    chartDrawing.setDrawMode(1);
    chartDrawing.drawAnnotations(mockEvent);    
    chartDrawing.setDrawMode(2);
    chartDrawing.drawAnnotations(mockEvent);
  });
});
