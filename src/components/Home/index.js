import React from 'react';
import Facebook from '../SocialShare/Buttons/Facebook.js';
import Twitter from '../SocialShare/Buttons/Twitter.js';
import Linkedin from '../SocialShare/Buttons/Linkedin.js';

const Home = ( {subDomain} ) => {
  const styles = require(`./brands/${subDomain}/styles.scss`);

  return (
    <div>
      <div className={styles.wrapper}>This is my home section!</div>
      <Facebook url={"https://www.toni-develops.com/2019/12/17/check-if-string-has-all-unique-characters/"} />
      <Twitter />
      <Linkedin url={"https://www.toni-develops.com/2019/12/17/check-if-string-has-all-unique-characters/"} />
    </div>
  )
}
export default Home;