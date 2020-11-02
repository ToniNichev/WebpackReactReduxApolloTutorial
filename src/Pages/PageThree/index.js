import React, { useState, useEffect } from 'react';
import DownloadChartButton from '../../components/ChartModules/DownloadChartButton';
import DownloadChartPopup from '../../components/ChartModules/DownloadChartPopup';
import Chart from '../../images/chart.png';
import styles from './styles.scss';

const quoteData =  {
  ExtendedMktQuote: {
    last_timedate: "7:59 PM EDT",
  },
  name: "Apple Inc",
  symbol: "AAPL",
  exchange: "NASDAQ",
  currencyCode: "USD",
  last_timedate: "4:00 PM EDT",
}

let chartCanvas;

function PageThree() {
  
  useEffect(() => {
    chartCanvas = document.getElementById('chartCanvas');
    if(chartCanvas === null)
      return;
    const canvasContext = chartCanvas.getContext('2d');
    var image = new Image();
    image.src = Chart;
    image.onload = function() {
      canvasContext.drawImage(image, 0, 0);
    };
  });

  const [downloadImagePopupVisible, setValueOfDownloadImagePopupVisible] = useState(false);

  return(
    <div className={styles.wrapper}>
      <DownloadChartButton sendData={() => { setValueOfDownloadImagePopupVisible(!downloadImagePopupVisible); }} />
      <canvas height="350" width="678" id="chartCanvas" className={styles.canvas}/>
      { downloadImagePopupVisible && <DownloadChartPopup 
                                      quoteData={quoteData} 
                                      chartCanvas={chartCanvas} 
                                      timeSpan="1D"
                                      sendData={() => { setValueOfDownloadImagePopupVisible(!downloadImagePopupVisible); }} /> }
    </div>);
}
export default PageThree;