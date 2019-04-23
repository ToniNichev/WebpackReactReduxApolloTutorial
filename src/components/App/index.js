import React, { Component } from 'react';
import Home from '../Home';
import Greetings from '../Greetings';
import About from '../About';
import Header from '../Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './styles.scss';
export default class App extends Component {
  render() {
    return (
      <div className={styles.appWrapper}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/home" component={Home} />            
            <Route exact path="/greetings" render={(props) => <Greetings {...props} user="John" />} />
            <Route exact path="/about" component={About} />
          </Switch>
        </Router>
      </div>        
    );
  }
}