import React from 'react';
import styles from './styles.scss';
import { UsersContextConsumer } from "../../usersContext";

function Label(props) {
  return(
    <UsersContextConsumer>
      {context => (
        <div className={styles.wrapper}>
            <h2>{context.username}</h2>
        </div>
      )}
    </UsersContextConsumer>
    );     
}

Label.contextType = UsersContextConsumer;

export default Label;