import React from 'react';
import styles from './styles.scss';
import { UsersContextConsumer } from "../../usersContext";

function Label(props) {
  return(
    <UsersContextConsumer>
      {contextProperty => (
        <div className={styles.wrapper}>
            <h2>{contextProperty.username}</h2>
        </div>
      )}
    </UsersContextConsumer>
    );     
}

Label.contextType = UsersContextConsumer;

export default Label;