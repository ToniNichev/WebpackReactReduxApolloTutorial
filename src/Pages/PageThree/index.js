import React, { useState, useEffect } from 'react';
import DownloadChartButton from '../../components/ChartModules/DownloadChartButton';
import DownloadChartPopup from '../../components/ChartModules/DownloadChartPopup';
import Chart from '../../images/chart.png';
import styles from './styles.scss';

const quoteData =  {
  //curmktstatus: 'POST_MKT',
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

const chartContainer = 'chartContainer';
const chartTimeIntervalSelected = 'chartTimeIntervalSelected';

function PageThree() {
  
  useEffect(() => {
    const chartCanvas = document.getElementById('chartCanvas');
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
      <div className={chartTimeIntervalSelected}>1D</div>
      <div className={styles.QuoteStrip}>
        <div className={styles.symbolTitle}>Apple Inc</div>
        <DownloadChartButton sendData={() => { setValueOfDownloadImagePopupVisible(!downloadImagePopupVisible); }} />
      </div>
      <div className={chartContainer}>
        <canvas height="350" width="678" id="chartCanvas" className={styles.canvas}/>
      </div>        
      { downloadImagePopupVisible && <DownloadChartPopup 
                                      quoteData={quoteData} 
                                      sendData={() => { setValueOfDownloadImagePopupVisible(!downloadImagePopupVisible); }} /> }
    </div>);
}
export default PageThree;