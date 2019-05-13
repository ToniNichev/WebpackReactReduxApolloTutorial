import React from 'react';
import { Link } from 'react-router-dom';
const styles = require('./styles.scss');


const Header = ( {title} ) => (
  <div>
    <div className={styles.wrapper}>      
      <h2>{ title } { process.env.APP_NAME } </h2>
      <ul>
        <li><Link to='/home'>HOME</Link></li>
        <li><Link to='/greetings'>GREETINGS</Link></li>       
        <li><Link to='/dogs-catalog'>DOGS CATALOG</Link></li>
        <li><Link to='/about'>ABOUT</Link></li>
      </ul>
    </div>
  </div>
);
export default Header;