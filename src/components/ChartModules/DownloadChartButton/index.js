import React from 'react';
import PropTypes from 'prop-types';
import DownloadChartImg from '../../../images/quotePageDownload.svg';
import styles from './styles.scss';

const DownloadChartButton = (props) => (
  <div className={styles.wrapper}>
    <button onClick={() => { props.sendData(); }}>
      <img alt="download chart" src={DownloadChartImg} />
    </button>
  </div>
);

DownloadChartButton.propTypes = {
  sendData: PropTypes.func.isRequired,
};


export default DownloadChartButton;
