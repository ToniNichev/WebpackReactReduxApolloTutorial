import React, { Component } from 'react';
import Greetings from '../Greetings';
import styles from './styles.scss';

export default class App extends Component {
  render() {
    return (
      <div className={styles.appWrapper}>
        <h1>React is running</h1>
        <Greetings user="John" />
      </div>
    );
  }
}