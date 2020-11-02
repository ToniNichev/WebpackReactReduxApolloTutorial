import React, { useState } from 'react';
import Header from '../../components/Header';
import styles from './styles.scss';



function PageTwo(props) {
  const [labelData, setLabelData] = useState('no data');


  function setTest(val) {
    window.location.hash = val;
  }

  return(<div data-text={labelData} className={styles.wrapper}>
          <Header title="Page-Two" />
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