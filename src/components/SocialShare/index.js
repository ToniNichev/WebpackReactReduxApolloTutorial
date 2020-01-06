import React from 'react';
import Facebook from './Buttons/Facebook';
import Twitter from './Buttons/Twitter';
import Linkedin from './Buttons/Linkedin';
import Email from './Buttons/Email';
import Reddit from './Buttons/Reddit';
import Tumblr from './Buttons/Tumblr';

const styles = require('./styles.scss');

const SocialShare = props => {

  const services = [
    Facebook(props),
    Twitter(props),
    Linkedin(props),
    Email(props),
    Reddit(props),
    Tumblr(props),
  ];

  const renderer = services.map( (obj) => { 
    return obj;
  });

  return (
    <div className={styles.wrapper}>
      {renderer}
    </div>
  );
}

export default SocialShare
