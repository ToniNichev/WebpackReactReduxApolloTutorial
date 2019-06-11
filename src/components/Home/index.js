import React from 'react';
import ShowText from '../ShowText';

const styles = require('./styles.scss');

export default ( {text} ) => (
  <div>
    <div className={styles.wrapper}>Home<ShowText text="Test1234" /></div>
  </div>
)
 