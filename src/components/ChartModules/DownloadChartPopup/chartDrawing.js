/* -- delete this -- */
//import $ from "jquery";
/* ----------------- */

let exportFileName = `chart.jpeg`;
let srcCanvas;
let destCtx;
let shareChartText;
let timeInterval;
let yCursor;
let page2Canvas;
let config;
let watermark;
let logo;
let mockCanvas;

const draw = {
  mode: 0,
  x: 0,
  y: 0
};

const captureGraphState = () => {
  const page2 = page2Canvas.getContext('2d');
  page2.drawImage(destCtx.canvas, 0, 0);
  return page2;
};

const downloadChartAction = (e) => {
  customMessageTextEdited();
  const imageCanvas = $(`#${destCtx.canvas.id}`)[0];
  const dataURL = imageCanvas.toDataURL('image/jpeg', 1);
  e.target.href = dataURL;
  e.download = "test.jpeg";
}

const restoreGraphState = () => {
  destCtx.drawImage(page2Canvas, 0, 0);
};

const customMessageTextEdited = () => {
  restoreGraphState();

  // clear custom text area
  destCtx.fillStyle = 'white';
  destCtx.fillRect(0, 0, 660, 20);

  // custom text label
  const pos = config.textPosition;
  destCtx.fillStyle = config.canvas.customMessageText.color;
  destCtx.font = config.canvas.customMessageText.font;
  const txt = $(`#${shareChartText.id}`).val();
  destCtx.fillText(txt, pos.x, pos.y);
};

const drawText = (txt, x, fontStyle, disableNewLine) => {
  const color = fontStyle.color || '#737373';
  const font = fontStyle.font || '12px Arial';
  const fontSize = fontStyle.font > 0 ? parseInt(fontStyle.font.split('px')[0]) : 12;

  destCtx.fillStyle = color;
  destCtx.font = font;
  destCtx.fillText(txt, x, yCursor);

  if (disableNewLine !== true)
    yCursor += fontSize;
  return destCtx;
};

const scaleIt = (source, scaleFactor) => {
  let c;
  if(typeof isJestEnv !==  'undefined')
    c = mockCanvas;
  else
    c = document.createElement('canvas');
  const ctx = c.getContext('2d');
  const w  = source.width*scaleFactor;
  const h = source.height*scaleFactor;
  c.width = w;
  c.height = h;
  ctx.drawImage(source, 0, 0, w, h);
  return (c);
};

const renderChangePctText = (changeVal, changePercentVal, xOffset, fontStyle, sameLine) => {
  const changeFontStyle = {
    ...fontStyle
  };
  let change = parseFloat(changeVal);
  let changeColor = change < 0 ? fontStyle.color.negative : fontStyle.color.positive;
  changeColor = change === 0 ? fontStyle.color.noChange : changeColor;
  changeFontStyle.color = changeColor;
  const percentVal = changePercentVal.replace(/[\+|\-]/gi, '');
  const txt = `${changeVal} (${percentVal}%)`;
  chartDrawing.drawText(txt, xOffset, changeFontStyle, sameLine);    
}

const getMouseCoordinates = (e) => {
  console.log(">>>>>>>>>>>>>>>>", destCtx.canvas.id);
  const container = $(`#${destCtx.canvas.id}`).offset();
  const x = e.pageX - container.left;
  const y = e.pageY - container.top;
  return {
    x,
    y
  };
}

const drawArow = (ctx, x1, y1, x2, y2, lineWidth, arrowDiamer, arowAngle, color, fillColor) => {
  const angle = Math.PI / arowAngle;

  const dist = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
  const ratio = (dist - arrowDiamer) / dist;
  const ratio2 = (dist - arrowDiamer / 3) / dist;
  const fromx = x1 + (x2 - x1) * (1 - ratio2);
  const fromy = y1 + (y2 - y1) * (1 - ratio2);

  const tox = Math.round(x1 + (x2 - x1) * ratio);
  const toy = Math.round(y1 + (y2 - y1) * ratio);

  ctx.beginPath();
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = color;
  ctx.moveTo(fromx, fromy);
  ctx.lineTo(tox, toy);
  ctx.stroke();

  // calculate the angle of the line
  const lineangle = Math.atan2(y2 - y1, x2 - x1);
  // h is the line length of a side of the arrow head
  const h = Math.abs(arrowDiamer / Math.cos(angle));

  const angle1 = lineangle + Math.PI + angle;
  const topx = x2 + Math.cos(angle1) * h;
  const topy = y2 + Math.sin(angle1) * h;
  const angle2 = lineangle + Math.PI - angle;
  const botx = x2 + Math.cos(angle2) * h;
  const boty = y2 + Math.sin(angle2) * h;

  ctx.beginPath();
  ctx.moveTo(topx, topy);
  ctx.lineTo(botx, boty);

  ctx.lineTo(x2, y2);
  ctx.lineTo(topx, topy);

  if (fillColor == null) {
    ctx.stroke();

  } else {
    ctx.fillStyle = fillColor;
    ctx.fill();
  }

  ctx.beginPath();
  ctx.arc(x1, y1, 4, 0, 2 * Math.PI);
  ctx.stroke();
}

const drawAnnotations = (e) => {
  console.log("destCtx>>>", destCtx);
  destCtx.drawImage(page2Canvas, 0, 0);

  const destinationCtx = destCtx;

  if (draw.mode === 1) {
    draw.x = getMouseCoordinates(e).x;
    draw.y = getMouseCoordinates(e).y;

    draw.mode = 2;
  } else if (draw.mode === 2) {
    const x = getMouseCoordinates(e).x;
    const y = getMouseCoordinates(e).y;
    destinationCtx.fillStyle = 'black';
    destinationCtx.beginPath();
    destinationCtx.moveTo(draw.x, draw.y);
    destinationCtx.lineTo(x, y);

    drawArow(destinationCtx, draw.x, draw.y, x, y, 2, 15, 8, '#3DA5ED', null);
  }
  return destinationCtx;
}

const generateChartShareImage = (quoteData) => {
  const isRetina = window.devicePixelRatio > 1;
  const destCanvas = $(`#${destCtx.canvas.id}`)[0];
  const chartCanvas = srcCanvas;

  if (chartCanvas.getContext) {
    // get fresh canvas instance since after clopsing the popup canvas is destroyed
    destCtx = destCanvas.getContext('2d');
    const width = isRetina ? chartCanvas.width / 2 : chartCanvas.width;
    const height = isRetina ? chartCanvas.height / 2 : chartCanvas.height;

    // clear drawing area
    destCtx.fillStyle = 'white';
    destCtx.fillRect(0, 0, width, height + 180);

    // draw chart image
    destCtx.drawImage(chartCanvas, 10, config.canvas.chartVerticalPosition + 50, width - 20, height - 100);
    const pos = config.textPosition;

    // pic watermark
    const img = new Image();
    img.setAttribute('crossOrigin', 'anonymous');
    img.src = watermark;
    img.onload = () => {
      destCtx.globalAlpha = 0.4;
      destCtx.drawImage(img, config.canvas.width / 2 - img.width / 2, config.canvas.height / 2 -  img.height / 4 );
      destCtx.globalAlpha = 1;
      captureGraphState();
    };

    // logo
    const imgLogo = new Image();
    imgLogo.setAttribute('crossOrigin', 'anonymous');
    imgLogo.src = logo;
    imgLogo.onload = () => {
      const logo = scaleIt(imgLogo, 0.35);
      destCtx.drawImage(logo, 10, config.canvas.height - 50 );
      captureGraphState();
    };

    chartDrawing.setYCursor(pos.y, true);
    // custom text label
    let txt = $(`#${shareChartText.id}`).val();

    //drawText(txt, pos.x, config.canvas.boldText);
    chartDrawing.drawText(txt, pos.x, config.canvas.boldText);

    // quote name
    txt = `${quoteData.name} (${quoteData.symbol}:${quoteData.exchange})`;
    chartDrawing.drawText(txt, pos.x, config.canvas.boldText);

    // curency code
    chartDrawing.drawText(quoteData.currencyCode, pos.x, config.canvas.regularText);

    // **** After hours ****
    if (quoteData.curmktstatus === 'POST_MKT' ) {
      // Extended hours label
      chartDrawing.drawText(config.canvas.extendedHoursLabel.labelText, pos.x, config.canvas.extendedHoursLabel);

      // Timestamp
      txt = `Last | ${quoteData.ExtendedMktQuote.last_timedate}`;
      chartDrawing.drawText(txt, pos.x, config.canvas.extendedHours, true);

      // Close Timestamp
      txt = `Close | ${quoteData.last_timedate}`;
      chartDrawing.drawText(txt, pos.x + 200, config.canvas.extendedHours);

      chartDrawing.setYCursor(+10);
      // Last Price
      chartDrawing.drawText(quoteData.ExtendedMktQuote.last, pos.x, config.canvas.priceLabels, true);

      // ext hours change %
      renderChangePctText(quoteData.ExtendedMktQuote.change, quoteData.ExtendedMktQuote.change_pct, 100, config.canvas.change, true);

      // Close Price
      chartDrawing.drawText(quoteData.last, pos.x + 200, config.canvas.priceLabels, true);

      // Close %
      renderChangePctText(quoteData.change, quoteData.change_pct, pos.x + 290, config.canvas.change, false);
    } 
    else {
      // ** Regular market hours **

      // Last Timestamp
      txt = `Last | ${quoteData.last_timedate}`;
      chartDrawing.drawText(txt, pos.x, config.canvas.extendedHours, false);
      chartDrawing.setYCursor(+10);
      // Price 
      chartDrawing.drawText(quoteData.last, pos.x, config.canvas.priceLabels, true);

      // Close Timestamp
      renderChangePctText(quoteData.change, quoteData.change_pct, 100, config.canvas.change, false);
    }

    // Time span label
    const globaltimespan = timeInterval.innerHTML;
    let selector = globaltimespan;

    if (selector.indexOf('D') > -1 && selector.length < 3)
      selector = `${selector[0]} Day`;
    else if ( selector.indexOf('M') > -1 )
      selector = `${selector[0]} Month`;
    else if (selector.indexOf('Y') > -1 && selector.length < 3)
      selector = `${selector[0]} Year`;
    else
      selector = selector.toUpperCase();
    // draw time range
    chartDrawing.drawText(selector, pos.x, config.canvas.timeSpan);
  }
  return chartDrawing;
}

const setYCursor = (newYCursor, absoluteValue) => {
  if(absoluteValue === true)
    yCursor = newYCursor;
  else
    yCursor += newYCursor;
}

const getYCursor = () => {
  return yCursor;
}

const setDrawMode = (val) => {
  draw.mode = val;
  return draw.mode;
}

const init = (srcCanvasObj, destCanvasObj, shareChartTextObj,timeIntervalObj, configSettings, watermarkPic, logoPic, mockCanvasObj) => {
  
  if(typeof config !== 'undefined' || !srcCanvasObj.getContext || !destCanvasObj.getContext)
    return null;
  srcCanvas = srcCanvasObj;
  config = configSettings;
  shareChartText = shareChartTextObj;
  timeInterval = timeIntervalObj;
  watermark = watermarkPic;
  logo = logoPic;
  mockCanvas = mockCanvasObj;
  yCursor = config.textPosition.y;


  if(typeof isJestEnv !==  'undefined') {
    //if there is no window, create mock paceCanvas for testing purposes 
    page2Canvas = mockCanvas;
  }
  else {
  // create hidden canvas for intermediate drawing operations    
    page2Canvas = document.createElement('canvas');
    page2Canvas.id = "shareChartContainerHiddenCanvas1";
    page2Canvas.width = config.canvas.width;
    page2Canvas.height = config.canvas.height;
    page2Canvas.style = "display:none";
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(page2Canvas);
  }    
  // get fresh canvas instance since after clossing the popup canvas is destroyed
  destCtx = destCanvasObj.getContext('2d');  
  return true;
}

const drawModeTestFunc = (val) => {
  draw.mode = val;
}

const chartDrawing = {
  init,
  setYCursor,
  getYCursor,
  drawText,
  captureGraphState,
  generateChartShareImage,
  drawAnnotations,
  downloadChartAction,
  setDrawMode,
  exportFileName
}

export const scaleItTest = scaleIt;
export const getMouseCoordinatesTest = getMouseCoordinates;
export const drawArowTest = drawArow;
export const drawModeTest = drawModeTestFunc;
export default chartDrawing;
