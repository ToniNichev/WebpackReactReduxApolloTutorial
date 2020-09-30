import React from 'react';
import UsersContext from "../../UsersContext";

import styles from './styles.scss';

function SetUsername() {

  function inputChanged(context) {
    const newUserName = document.querySelector('#root > div > div:nth-child(3) > input[type=text]').value;
    context.username = newUserName;
  }

  return(
    <UsersContext.Consumer>
      {context => (    
        <div className={styles.wrapper}>
          user:<input type="text" onChange={ () => { inputChanged(context) } } />
        </div>
      )}
    </UsersContext.Consumer>
  );      
}
export default SetUsername;