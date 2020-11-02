import React from 'react';
import { Link } from 'react-router-dom';
const styles = require('./styles.scss');


const Header = ( {title} ) => (
  <div>
    <div className={styles.wrapper}>      
      <h2>{ title }</h2>
      <ul>
        <li><Link to='/page-one'>PAGE-ONE</Link></li>
        <li><Link to='/page-two'>PAGE-TWO</Link></li>
        <li><Link to='/page-three'>PAGE-THREEE</Link></li>        
      </ul>
    </div>
  </div>
);
export default Header;