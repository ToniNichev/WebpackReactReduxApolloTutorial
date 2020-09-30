import React from 'react';
import styles from './styles.scss';
import UsersContext from "../../UsersContext";

function Label(props) {
  return(
    <UsersContext.Consumer>
      {context => (
        <div className={styles.wrapper}>
            <h2>{context.name}</h2>
        </div>
      )}
    </UsersContext.Consumer>
    );     
}


export default Label;