import React from 'react';
import { Link } from 'react-router-dom';

const styles = require('./styles.scss');

const Header = ( {title} ) => (
  <div className={styles.wrapper} key="Header">      
    <h2>{ title }</h2>
    <ul>
      <li><Link to='/home'>HOME</Link></li>
      <li><Link to='/greetings'>GREETINGS</Link></li>       
      <li><Link to='/about'>ABOUT</Link></li>
    </ul>
  </div>
);
export default Header;