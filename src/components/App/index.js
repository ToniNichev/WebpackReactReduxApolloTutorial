import React, { Component } from 'react';
import Greetings from '../Greetings';
import UsersContext from "../../UsersContext";
import SetUsername from "../SetUsername";
import styles from './styles.scss';

export default class App extends Component {
  render() {
    return (
      <UsersContext.Provider value={ {"name": "no name"} }>
        <div className={styles.appWrapper}>
          <h1>React is running</h1>
          <Greetings />
          <SetUsername />
        </div>
      </UsersContext.Provider>
    );
  }
}