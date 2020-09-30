import React from 'react';
import styles from './styles.scss';
import Label from '../Label';

function Greetings(props) {
  return(<div className={styles.wrapper}>
          <Label user={props.user} />
        </div>);
}
export default Greetings;