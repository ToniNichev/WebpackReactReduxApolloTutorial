/* eslint-disable no-use-before-define, radix */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import chartDrawing from './chartDrawing';
// import CnbcWatermark from 'assets/images/quotePage/CNBC_logo_grey.png';
// import CnbcLogo from 'assets/images/quotePage/cnbc-logo-transp-for-light-bg.png';
import styles from './styles.scss';

/* remove this */
import watermark from '../../../images/CNBC_logo_grey.png';
import logo from '../../../images/cnbc-logo-transp-for-light-bg.png';
import $ from "jquery";
/* ---------- */


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
//let yCursor;
/*
const draw = {
  mode: 0,
  x: 0,
  y: 0
};
*/


/**
 * Download chart popup window component
 * @param {
 *  quoteData - an object representing the quote data
 * } props
 */
const DownloadChart = (props) => {
  const { quoteData } = props;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      chartDrawing.init('#shareChartContainerCanvas', config, watermark, logo);
      chartDrawing.generateChartShareImage(quoteData);
      chartDrawing.captureGraphState();
    }
  });


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
            <canvas width={config.canvas.width} onMouseMove={ (e) => { chartDrawing.drawAnnotations(e) } } onMouseUp={ (e) => { chartDrawing.captureGraphState(); chartDrawing.setDrawMode(0); } } onMouseDown={ () => { chartDrawing.setDrawMode(1) } } className={styles.visibleCanvas} height={config.canvas.height} id="shareChartContainerCanvas" />
          </p>
        </span>
        <div className={styles.downloadButton}>
          <a href="#" download={exportFileName} onClick={ (e) => { chartDrawing.downloadChartAction(e) } } id="download-chart-image">DOWNLOAD</a>
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
