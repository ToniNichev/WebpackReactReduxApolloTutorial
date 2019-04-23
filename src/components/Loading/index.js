import React from 'react';

const styles = require('./styles.scss');

/**
 * HELPER COMPONENT TO DISPLAY LOADING ... AND HANDLE ERRORS WHEN COMPONENTS LOADS DYNAMICALLY 
 * @param {} props 
 */
const Loading = (props) => {
  if (props.error) {
    return (<div className={styles.wrapper}>
              <h3>Error loading component!</h3> 
              <p><b>{props.error.message}</b></p>
              <p>{props.error.stack}</p>
              <div><button onClick={ props.retry }>Retry</button></div>
            </div>);
  } else {
    return <div>Loading...</div>;
  }
} 

export default Loading;