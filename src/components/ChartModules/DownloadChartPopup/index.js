/* eslint-disable no-use-before-define, radix */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import CnbcWatermark from '../../../images/CNBC_logo_grey.png';
import CnbcLogo from '../../../images/cnbc-logo-transp-for-light-bg.png';
import $ from "jquery";
import styles from './styles.scss';

const config = {
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

const exportFileName = typeof window !== 'undefined' ? '_chart.jpeg' : null;

let destCtx;
let yCursor;

const draw = {
  mode: 0,
  x: 0,
  y: 0
};

let chartCanvas;

const DownloadChart = (props) => {
  const { quoteData, timeSpan } = props;
  chartCanvas = props.chartCanvas;

  const captureGraphState = () => {
    const page2 = $('#shareChartContainerHiddenCanvas1')[0].getContext('2d');
    const destCanvas = $('#shareChartContainerCanvas')[0];
    page2.drawImage(destCanvas, 0, 0);
  };

  const initDrawing = () => {
    captureGraphState();

    $('#shareChartContainerCanvas').mousedown( () => {
      draw.mode = 1;
    });

    $('#shareChartContainerCanvas').mouseup( () => {
      captureGraphState();
      draw.mode = 0;
    });

    function getMouseCoordinates(e) {
      const container = $('#shareChartContainerCanvas').offset();
      const x = e.pageX - container.left;
      const y = e.pageY - container.top;
      return {
        x,
        y
      };
    }

    function drawAnnotations(e) {
      const page2 = $('#shareChartContainerHiddenCanvas1')[0];
      destCtx.drawImage(page2, 0, 0);

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

    $('#shareChartContainerCanvas').mousemove( (e) => {
      drawAnnotations(e);
    });

    // Drawing Helper methods
    function drawArow(ctx, x1, y1, x2, y2, lineWidth, arrowDiamer, arowAngle, color, fillColor) {
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
  };

  const restoreGraphState = () => {
    const page2 = $('#shareChartContainerHiddenCanvas1')[0];
    destCtx.drawImage(page2, 0, 0);
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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // attach export image action
      const button = $('#download-chart-image')[0];
      button.addEventListener('click', () => {
        customMessageTextEdited();
        const imageCanvas = $('#shareChartContainerCanvas')[0];
        const dataURL = imageCanvas.toDataURL('image/jpeg', 1);
        button.href = dataURL;
        $('.pico-content.quotes-moodle').remove();
        $('.pico-overlay').css('display', 'none');
      });

      generateChartShareImage();
      initDrawing();
    }
  });

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
 
  /**
   * generateChartShareImage
   */
  const generateChartShareImage = () => {
    const isRetina = window.devicePixelRatio > 1;

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

      // CNBC watermark
      const img = new Image();
      img.setAttribute('crossOrigin', 'anonymous');
      img.src = CnbcWatermark;
      img.onload = () => {
        destCtx.globalAlpha = 0.4;
        destCtx.drawImage(img, config.canvas.width / 2 - img.width / 2, config.canvas.height / 2 -  img.height / 4 );
        destCtx.globalAlpha = 1;
        captureGraphState();
      };

      // CNBC logo
      const imgLogo = new Image();
      imgLogo.setAttribute('crossOrigin', 'anonymous');
      imgLogo.src = CnbcLogo;
      imgLogo.onload = () => {
        const logo = scaleIt(imgLogo, 0.35);
        destCtx.drawImage(logo, 10, config.canvas.height - 50 );
        captureGraphState();
      };

      yCursor = pos.y;
      // custom text label
      let txt = $('#share_chart_text').val();
      drawText(txt, pos.x, config.canvas.boldText);

      // quote name
      txt = `${quoteData.name} (${quoteData.symbol}:${quoteData.exchange})`;
      drawText(txt, pos.x, config.canvas.boldText);

      // curency code
      drawText(quoteData.currencyCode, pos.x, config.canvas.regularText);

      // **** After hours ****
      if (quoteData.curmktstatus === 'POST_MKT' ) {
        // Extended hours label
        drawText(config.canvas.extendedHoursLabel.labelText, pos.x, config.canvas.extendedHoursLabel);

        // Timestamp
        txt = `Last | ${quoteData.ExtendedMktQuote.last_timedate}`;
        drawText(txt, pos.x, config.canvas.extendedHours, true);

        // Close Timestamp
        const last = quoteData.curmktstatus === 'POST_MKT' ? 'Close' : 'Last';
        txt = `${last} | ${quoteData.last_timedate}`;
        drawText(txt, pos.x + 200, config.canvas.extendedHours);

        // same line
        yCursor += 10;
        // Last Price
        drawText(quoteData.ExtendedMktQuote.last, pos.x, config.canvas.priceLabels, true);

        // ext hours change %
        let change = parseFloat(quoteData.ExtendedMktQuote.change);
        let changeColor = change < 0 ? config.canvas.change.color.negative : config.canvas.change.color.positive;
        changeColor = change === 0 ? config.canvas.change.noChange : changeColor;

        txt = `${quoteData.ExtendedMktQuote.change} (${quoteData.ExtendedMktQuote.change_pct})`;
        const changeSettings = {
          font: config.canvas.change.font,
          color: changeColor
        };

        drawText(txt, pos.x + 100, changeSettings, true);

        // change since close %
        change = parseFloat(quoteData.change);
        changeColor = change < 0 ? config.canvas.change.color.negative : config.canvas.change.color.positive;
        changeColor = change === 0 ? config.canvas.change.noChange : changeColor;
        changeSettings.color = changeColor;

        txt = `${quoteData.change} (${quoteData.change_pct})`;
        drawText(txt, pos.x + 300, changeSettings, true);

        // Close Price
        drawText(quoteData.last, pos.x + 200, config.canvas.priceLabels);
      } else {
        // Close Timestamp
        txt = `Close | ${quoteData.ExtendedMktQuote.last_timedate}`;
        drawText(txt, pos.x, config.canvas.extendedHours);
      }

      // Time span label
      const globaltimespan = timeSpan;
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
      drawText(selector, pos.x, config.canvas.timeSpan);
    }
  };  

  return (
    <div className={styles.wrapper}>
      <div className={styles.downloadChartModal}>
        <p className={styles.closeBtnWrapper}>
          <span className={styles.closeBtn}><button onClick={() => { props.sendData(); }}>×</button></span>
        </p>
        <span className={styles.personalMesage}>
          <p>
            <input className={styles.message} type="text" id="share_chart_text" placeholder="Add your headline (optional)" maxLength="72" />
          </p>
          <p>
            <canvas id="shareChartContainerHiddenCanvas1" className={styles.hiddenCanvas} width={config.canvas.width} height={config.canvas.height} />
            <canvas id="shareChartContainerHiddenCanvas2" className={styles.hiddenCanvas} />
          </p>
          <p>
            <canvas width={config.canvas.width} className={styles.visibleCanvas} height={config.canvas.height} id="shareChartContainerCanvas" />
          </p>
        </span>
        <div className={styles.downloadButton}>
          <a href="#" download={exportFileName} id="download-chart-image">DOWNLOAD</a>
        </div>
      </div>
    </div>
  );
};

DownloadChart.propTypes = {
  sendData: PropTypes.func.isRequired,
  quoteData: PropTypes.object.isRequired,
};

export default DownloadChart;
