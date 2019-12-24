import React from 'react';
import Facebook from '../SocialShare/Buttons/Facebook.js'

const Home = ( {subDomain} ) => {
  const styles = require(`./brands/${subDomain}/styles.scss`);

  return (
    <div>
      <div className={styles.wrapper}>This is my home section!</div>
      <Facebook url={"toni-develops.com"} />
    </div>
  )
}
export default Home;