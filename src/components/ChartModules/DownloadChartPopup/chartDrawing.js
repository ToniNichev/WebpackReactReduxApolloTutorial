/* -- delete this -- */
import $ from "jquery";
/* ----------------- */

const exportFileName = typeof window !== 'undefined' ? '_chart.jpeg' : null;

let destCtx;
let yCursor = 55;
let page2Canvas;
let config;
let watermark;
let logo;

const draw = {
  mode: 0,
  x: 0,
  y: 0
};

const captureGraphState = () => {
  console.log("!!!!!!!!!");
  const page2 = page2Canvas.getContext('2d');
  const destCanvas = $('#shareChartContainerCanvas')[0];
  page2.drawImage(destCanvas, 0, 0);
};

const downloadChartAction = (e) => {
  customMessageTextEdited();
  const imageCanvas = $('#shareChartContainerCanvas')[0];
  const dataURL = imageCanvas.toDataURL('image/jpeg', 1);
  e.target.href = dataURL;
}

const restoreGraphState = () => {
  //const page2 = $('#shareChartContainerHiddenCanvas1')[0];
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
  const txt = $('#share_chart_text').val();
  destCtx.fillText(txt, pos.x, pos.y);
};

const drawText = (txt, x, fontStyle, disableNewLine) => {
  const color = fontStyle.color || '#737373';
  const font = fontStyle.font || '12px Arial';
  const fontSize = parseInt(fontStyle.font.split('px')[0]) || 12;

  destCtx.fillStyle = color;
  destCtx.font = font;
  destCtx.fillText(txt, x, yCursor);

  if (disableNewLine !== true)
    yCursor += fontSize;
};

function scaleIt(source, scaleFactor) {
  const c = document.createElement('canvas');
  const ctx = c.getContext('2d');
  const w  = source.width*scaleFactor;
  const h = source.height*scaleFactor;
  c.width = w;
  c.height = h;
  ctx.drawImage(source, 0, 0, w, h);
  return (c);
};

const renderChangeText = (changeVal, changePercentVal, xOffset, fontStyle, sameLine) => {
  let changeFontStyle = fontStyle;
  let change = parseFloat(changeVal);
  let changeColor = change < 0 ? fontStyle.color.negative : fontStyle.color.positive;
  changeColor = change === 0 ? fontStyle.color.noChange : changeColor;
  changeFontStyle.color = changeColor;
  const percentVal = changePercentVal.replace(/[\+|\-]/gi, '');
  const txt = `${changeVal} (${percentVal}%)`;
  drawText(txt, xOffset, changeFontStyle, sameLine);    
}

const renderChangePctText = (changeVal, changePercentVal, xOffset, fontStyle, sameLine) => {
  let changeFontStyle = fontStyle;
  let change = parseFloat(changeVal);
  let changeColor = change < 0 ? fontStyle.color.negative : fontStyle.color.positive;
  changeColor = change === 0 ? fontStyle.color.noChange : changeColor;
  changeFontStyle.color = changeColor;
  const percentVal = changePercentVal.replace(/[\+|\-]/gi, '');
  const txt = `${changeVal} (${percentVal}%)`;
  chartDrawing.drawText(txt, xOffset, changeFontStyle, sameLine);    
}


const getMouseCoordinates = (e) => {
  const container = $('#shareChartContainerCanvas').offset();
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
  //const page2 = $('#shareChartContainerHiddenCanvas1')[0];
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
}

const generateChartShareImage = (quoteData) => {
  const isRetina = window.devicePixelRatio > 1;
  const chartCanvas = $('.chartContainer canvas')[0];
  const destCanvas = $('#shareChartContainerCanvas')[0];

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
    let txt = $('#share_chart_text').val();
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
      //chartDrawing.renderChangeText(quoteData.ExtendedMktQuote.change, quoteData.ExtendedMktQuote.change_pct, 100, config.canvas.change, true);

      // Close Price
      chartDrawing.drawText(quoteData.last, pos.x + 200, config.canvas.priceLabels, true);

      // Close %
      renderChangePctText(quoteData.change, quoteData.change_pct, pos.x + 290, config.canvas.change, false);
      //chartDrawing.renderChangeText(quoteData.change, quoteData.change_pct, pos.x + 290, config.canvas.change, false);
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
      //chartDrawing.renderChangeText(quoteData.change, quoteData.change_pct, 100, config.canvas.change, false);
    }

    // Time span label
    const globaltimespan = $('.chartTimeIntervalSelected')[0].innerHTML;
    let selector = globaltimespan;
    // let counter = 0;
    const lengtharr = [];

    if (selector.indexOf('D') > -1 && selector.length < 3)
      selector = `${selector[0]} Day`;
    else if ( selector.indexOf('M') > -1 )
      selector = `${selector[0]} Month`;
    else if (selector.indexOf('Y') > -1 && selector.length < 3)
      selector = `${selector[0]} Year`;
    else
      selector = selector.toUpperCase();

    lengtharr.push(selector.length);
    // draw time range
    chartDrawing.drawText(selector, pos.x, config.canvas.timeSpan);
  }
};

const init = (chartContainerId, configSettings, watermarkPic, logoPic) => {
  config = configSettings;
  watermark = watermarkPic;
  logo = logoPic;

  page2Canvas = document.createElement('canvas');

  page2Canvas.id = "shareChartContainerHiddenCanvas1";
  page2Canvas.width = 1224;
  page2Canvas.height = 768;
  page2Canvas.style = "display:none";
  
  
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(page2Canvas);


  const destCanvas = $(chartContainerId)[0];
  if (chartCanvas.getContext) {
    // get fresh canvas instance since after clopsing the popup canvas is destroyed
    destCtx = destCanvas.getContext('2d');  
  }
  else {
    return -1;
  }
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
}

const chartDrawing = {
  init,
  setYCursor,
  getYCursor,
  drawText,
  renderChangeText,
  captureGraphState,
  generateChartShareImage,
  drawAnnotations,
  downloadChartAction,
  setDrawMode
}

export default chartDrawing;