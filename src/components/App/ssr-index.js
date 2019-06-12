import React, { Component } from 'react';
import PageLayout from '../../containers/PageLayout';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { StaticRouter,  Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import fetch from 'isomorphic-fetch';
import { createStore } from 'redux';
import reducers from '../../reducers';

import styles from './styles.scss';

const store = createStore(reducers, {});

export default ( {req} ) => {

  const GRAPHQL_URL = 'http://localhost:4001/graphql'; // process.env.GRAPHQL_URL;

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
      <Provider store={store}>
        <ApolloProvider client={client}>
          <StaticRouter location={ req.url } context={context}>
            <Switch>
              <Route exact path="*" component={PageLayout} />  
            </Switch>            
          </StaticRouter>
        </ApolloProvider>
      </Provider>
    </div>
  );
}