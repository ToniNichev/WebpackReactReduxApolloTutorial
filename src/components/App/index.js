import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageOne from "../../Pages/PageOne";
import PageTwo from "../../Pages/PageTwo";
import styles from './styles.scss';

export default class App extends Component {
  render() {
    return (
      <div className={styles.appWrapper}>
        <h1>React is running</h1>
        <Router>
          <Switch>
            <Route exact path="/page-one" component={PageOne}/>
            <Route exact path="/page-two" component={PageTwo}/>
          </Switch>
        </Router>
      </div>
    );
  }
}