import React from 'react';
import ShowText from '../ShowText'
const styles = require('./styles.scss');

const Home = () => (
  <div>
    <div className={styles.wrapper}>This is my <ShowText textToShow="HOME"/> section!</div>
  </div>
)
 
export default Home;