import React from 'react';
import { Link } from 'react-router-dom';
import Facebook from '../SocialShare/Buttons/Facebook.js';
import Twitter from '../SocialShare/Buttons/Twitter.js';
import Linkedin from '../SocialShare/Buttons/Linkedin.js';
import Tumblr from '../SocialShare/Buttons/Tumblr.js';
import Reddit from '../SocialShare/Buttons/Reddit.js';
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
          <Facebook text='123' popupCloded={ () => {console.log('FB popup closed!')} } url={process.env.SITE_BASE_URL} />
          <Twitter url={process.env.SITE_BASE_URL} />
          <Linkedin url={process.env.SITE_BASE_URL} />          
          <Tumblr url={process.env.SITE_BASE_URL} />
          <Reddit url={process.env.SITE_BASE_URL} />
        </li>
      </ul>
    </div>
  </div>
);
export default Header;