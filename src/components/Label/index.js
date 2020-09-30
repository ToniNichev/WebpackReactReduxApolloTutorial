import React from 'react';
import styles from './styles.scss';

function Label(props) {
  return(<div className={styles.wrapper}>
          <h2>{props.user}</h2>
        </div>);
}
export default Label;