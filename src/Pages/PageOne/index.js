import React from 'react';
import { UsersContextProvider } from "../../usersContext";
import Greetings from '../../components/Greetings';
import SetUsername from '../../components/SetUsername';
import SmartTextField from '../../components/SmartTextField';
//import WithContextConnectedWrapperComponent from '../../components/WithContextConnectedWrapperComponent';

import styles from './styles.scss';

class PageOne extends React.Component {

  render() {
    return (
      <div className={styles.wrapper}>
        <h1>PAGE ONE</h1>
        <UsersContextProvider>
          <SetUsername />   
          <hr/>       
          <Greetings />
          <hr/>
          <SmartTextField />
        </UsersContextProvider>
      </div>);
  }
}

export default PageOne;