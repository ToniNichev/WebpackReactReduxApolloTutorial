import React from 'react';
import { UsersContextConsumer } from "../../usersContext";

import styles from './styles.scss';

function SetUsername() {

  function inputChanged(context) {
    const newUserName = document.querySelector('div.SetUsername-wrapper > input[type=text]').value;
    context.setUsername(newUserName)
  }

  return(
    <UsersContextConsumer>
      {context => (    
        <div className={styles.wrapper}>
          user:<input type="text" onChange={ () => { inputChanged(context) } } />
        </div>
      )}
    </UsersContextConsumer>
  );      
}
export default SetUsername;