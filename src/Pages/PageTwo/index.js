import React, { useState, useEffect } from 'react';
import styles from './styles.scss';

let init = false;

const PageTwo = (props) => {
  const [labelData, setLabelData] = useState('no data');

  useEffect(() => {
    if(init)
      return;
    init = true;
    setLabelData("Initial state");
  });

  function setTest(val) {
    window.location.hash = val;
  }

  return(<div data-text={labelData} className={styles.wrapper}>
          {labelData}
          <hr />
          <input type="text" placeholder={labelData} />
          <button onClick={ () => { setTest('TEST'); } }>TEST</button>
          <ul>
            <li><a href="#" onClick={ () => { setLabelData('one') } }>ONE</a></li>
            <li><a href="#" onClick={ () => { setLabelData('two') } }>TWO</a></li>
          </ul>   
        </div>);
}
export default PageTwo;