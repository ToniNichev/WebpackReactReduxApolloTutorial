import React, { Component } from 'react';
import PageLayout from '../../containers/PageLayout';
import { StaticRouter,  Route, Switch } from 'react-router-dom';

import styles from './styles.scss';

export default class App extends Component {
  render() {
    return (
      <div className={styles.appWrapper}>
        <h1>React is running</h1>
        <StaticRouter>
          <Switch>
            <Route exact path="*" component={PageLayout} />  
          </Switch>            
        </StaticRouter>
      </div>
    );
  }
}