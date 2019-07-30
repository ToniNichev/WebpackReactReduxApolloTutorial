import React from 'react';

const Renderer = ({styles}) => {
  return (
    <div>
      <div className={styles.wrapper}>This is my home section rendered by renderer!</div>
    </div>
  );
}

export default Renderer;