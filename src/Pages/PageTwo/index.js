import React, { useState } from 'react';
import styles from './styles.scss';


function PageTwo(props) {
  const [labelData, setLabelData] = useState('no data');

  return(<div className={styles.wrapper}>
          {labelData}
          <hr />
          <input type="text" placeholder={labelData} />
          <button onClick={ () => { setLabelData('TEST'); } }>TEST</button>
          <ul>
            <li><a href="#" onClick={ () => { setLabelData('one') } }>ONE</a></li>
            <li><a href="#" onClick={ () => { setLabelData('two') } }>TWO</a></li>
          </ul>   
        </div>);
}
export default PageTwo;