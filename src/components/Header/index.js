import React from 'react';
import { Link } from 'react-router-dom';
import Facebook from '../SocialShare/Buttons/Facebook.js';
import Twitter from '../SocialShare/Buttons/Twitter.js';
import Linkedin from '../SocialShare/Buttons/Linkedin.js';
import Tumblr from '../SocialShare/Buttons/Tumblr.js';
import Reddit from '../SocialShare/Buttons/Reddit.js';
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
          <Facebook 
            text='FACEBOOK' 
            windowWidth={950}
            url={baseUrl} 
            onClick={()=>{ console.log('FB icon clicked!') }}
            onPopupClose={ () => {console.log('FB popup closed!')} } />

          <Twitter url={baseUrl} />
          <Linkedin url={baseUrl} />          
          <Tumblr url={baseUrl} />
          <Reddit url={baseUrl} />
        </li>
      </ul>
    </div>
  </div>
);
export default Header;