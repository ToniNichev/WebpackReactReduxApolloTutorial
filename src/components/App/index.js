import React, { Component } from 'react';
import PageLayout from '../../containers/PageLayout';
import { BrowserRouter,  Route, Switch } from 'react-router-dom';

import styles from './styles.scss';

export default ( {req, client} ) => {
  return (
    <div className={styles.appWrapper}>
      <h1>React is running</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="*" component={PageLayout} />  
        </Switch>            
      </BrowserRouter>
    </div>
  );

}