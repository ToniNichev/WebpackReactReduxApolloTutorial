import React from 'react';
import { UsersContextProvider } from "../../usersContext";
import Greetings from '../../components/Greetings';
import SetUsername from '../../components/SetUsername';

import styles from './styles.scss';

function PageOne(props) {
  return(<div className={styles.wrapper}>
          <h1>PAGE ONE</h1>
          <UsersContextProvider>
            <Greetings />
            <SetUsername />
          </UsersContextProvider>            
        </div>);
}
export default PageOne;