import React, { Component } from 'react';
import PageLayout from '../../containers/PageLayout';
import { StaticRouter,  Route, Switch } from 'react-router-dom';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-fetch';


import styles from './styles.scss';


export default ( {req, client} ) => {

  const context = {};
  return (
    <div className={styles.appWrapper}>
      <h1>React is running</h1>
      <ApolloProvider client={client}>            
        <StaticRouter location={ req.url } context={context}>
          <Switch>
            <Route exact path="*" component={PageLayout} />  
          </Switch>            
        </StaticRouter>
      </ApolloProvider>
    </div>
  );
}