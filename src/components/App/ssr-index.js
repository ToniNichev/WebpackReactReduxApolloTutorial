import React, { Component } from 'react';
import PageLayout from '../../containers/PageLayout';
import { StaticRouter,  Route, Switch } from 'react-router-dom';
import fetch from 'isomorphic-fetch';
import { createStore } from 'redux';
import reducers from '../../reducers';

import styles from './styles.scss';

const store = createStore(reducers, {});

export default ( {req} ) => {

  const GRAPHQL_URL = process.env.GRAPHQL_URL;
  const client = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
     uri: GRAPHQL_URL,
     fetch: fetch,
     credentials: 'same-origin',
     headers: {
       cookie: req.header('Cookie'),
     },
   }), 
    cache: new InMemoryCache()
  });    
   const context = {};
   const store = createStore(reducers, {});

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