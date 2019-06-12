import React from 'react';
const styles = require('./styles.scss');

export default ( {textToShow} ) => (
  <div>
    <div className={styles.wrapper}>{textToShow}</div>
  </div>
)
