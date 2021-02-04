import React from 'react';
import styles from './styles.scss';
import WithContextConnectedWrapperComponent from '../WithContextConnectedWrapperComponent';

const SmartTextField = (props) => {

    return(
      <div className={styles.wrapper}>
          <input type="text" value={props.secretToLife}/>
      </div>
    );  
}

export default WithContextConnectedWrapperComponent(SmartTextField);