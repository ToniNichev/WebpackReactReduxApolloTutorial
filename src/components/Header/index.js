import React from 'react';
import { Link } from 'react-router-dom';
import Facebook from '../SocialShare/Buttons/Facebook.js';
import Twitter from '../SocialShare/Buttons/Twitter.js';
import Linkedin from '../SocialShare/Buttons/Linkedin.js';
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
        <li>
          <Facebook url={"https://www.toni-develops.com/2019/12/17/check-if-string-has-all-unique-characters/"} />
          <Twitter />
          <Linkedin url={"https://www.toni-develops.com/2019/12/17/check-if-string-has-all-unique-characters/"} />
        </li>
      </ul>
    </div>
  </div>
);
export default Header;