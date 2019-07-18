import React, { Component } from 'react';
import PageLayout from '../../containers/PageLayout';
import { StaticRouter,  Route, Switch } from 'react-router-dom';
import styles from './styles.scss';


export default ( {req} ) => {
  const context = {};
  return (
    <div className={styles.appWrapper}>
      <h1>React is running</h1>
      <StaticRouter location={ req.url } context={context}>
        <Switch>
          <Route exact path="*" component={PageLayout} />  
        </Switch>            
      </StaticRouter>
    </div>
  );
}