import React from 'react';
import { Link } from 'react-router-dom';
import Facebook from '../SocialShare/Buttons/Facebook';
import Twitter from '../SocialShare/Buttons/Twitter';
import Linkedin from '../SocialShare/Buttons/Linkedin';
import Tumblr from '../SocialShare/Buttons/Tumblr';
import Reddit from '../SocialShare/Buttons/Reddit';
import Email from '../SocialShare/Buttons/Email';
import SocialShare from '../SocialShare';
const styles = require('./styles.scss');

const baseUrl = process.env.SITE_BASE_URL;
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
          <SocialShare url={baseUrl} />
        </li>
      </ul>
    </div>
  </div>
);
export default Header;