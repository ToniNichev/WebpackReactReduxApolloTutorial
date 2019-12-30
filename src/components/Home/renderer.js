import React from 'react';

const Renderer = ({styles, title}) => {
  return (
    <div>
      <div className={styles.wrapper}>{title}</div>
    </div>
  );
}

export default Renderer;