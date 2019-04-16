import React, { Component } from 'react';
import Greetings from '../Greetings';
import About from '../About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import styles from './styles.scss';
export default class App extends Component {
  render() {
    return (
      <div className={styles.appWrapper}>
        <Router>
          <Switch>
            <Route exact path="/greetings" render={(props) => <Greetings {...props} user="John" />} />
            <Route exact path="/about" component={About} />
          </Switch>
        </Router>
      </div>        
    );
  }
}