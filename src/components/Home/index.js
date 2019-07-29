import React from 'react';


const Home = ( {subDomain} ) => {
  const styles = require(`./brands/${subDomain}/styles.scss`);

  return (
    <div>
      <div className={styles.wrapper}>This is my home section!</div>
    </div>
  )
}
export default Home;