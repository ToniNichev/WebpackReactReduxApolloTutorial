import React from 'react';
import styles from './styles.scss';

function Greetings(props) {
  return(<div className={styles.wrapper}>
          <h2>Hello, {props.user}</h2>
        </div>);
}
export default Greetings;