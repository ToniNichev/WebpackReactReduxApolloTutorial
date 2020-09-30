import React, { Component } from 'react';
import Greetings from '../Greetings';
import { UsersContextProvider } from "../../usersContext";
import SetUsername from "../SetUsername";
import styles from './styles.scss';

export default class App extends Component {
  render() {
    return (
      <UsersContextProvider>
        <div className={styles.appWrapper}>
          <h1>React is running</h1>
          <Greetings user="John" />
          <SetUsername />
        </div>
      </UsersContextProvider>
    );
  }
}