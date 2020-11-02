import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageOne from "../../Pages/PageOne";
import PageTwo from "../../Pages/PageTwo";
import PageThree from "../../Pages/PageThree";
import Header from '../Header';
import styles from './styles.scss';

export default class App extends Component {
  render() {
    return (
      <div className={styles.appWrapper}>
        <h1>React is running</h1>
        <Router>
          <Header title="TEST" />          
          <Switch>
            <Route exact path="/page-one" component={PageOne}/>
            <Route exact path="/page-two" component={PageTwo}/>
            <Route exact path="/page-three" component={PageThree}/>
          </Switch>
        </Router>
      </div>
    );
  }
}