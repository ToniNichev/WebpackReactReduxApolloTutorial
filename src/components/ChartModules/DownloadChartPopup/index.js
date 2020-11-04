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
      const destCanvas = document.getElementById('shareChartContainerCanvas');
      const srcCanvas = document.getElementById('chartCanvas');
      chartDrawing.init(srcCanvas,
                        destCanvas, 
                        chartDrawConfig, 
                        watermark, 
                        logo);
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
            <canvas 
              width={chartDrawConfig.canvas.width} 
              height={chartDrawConfig.canvas.height} 
              onMouseMove={ (e) => { chartDrawing.drawAnnotations(e) } } 
              onMouseUp={ (e) => { chartDrawing.captureGraphState(); chartDrawing.setDrawMode(0); } } 
              onMouseDown={ () => { chartDrawing.setDrawMode(1) } } 
              className={styles.visibleCanvas} 
              id="shareChartContainerCanvas" />
          </p>
        </span>
        <div className={styles.downloadButton}>
          <a href="#" download={chartDrawing.exportFileName} onClick={ (e) => { chartDrawing.downloadChartAction(e) } } id="download-chart-image">DOWNLOAD</a>
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
