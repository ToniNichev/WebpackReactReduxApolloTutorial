import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import PageLayout from '../../containers/PageLayout';
import { StaticRouter,  Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import reducers from '../../reducers';
import fetch from 'isomorphic-fetch';
import styles from './styles.scss';




export default ( {req} ) => {
  const store = createStore(reducers, {});
  const context = {};
  
  const GRAPHQL_URL = process.env.GRAPHQL_URL;
  const client = new ApolloClient({
    ssrMode: true,
    link: new HttpLink({ uri:  GRAPHQL_URL }),
    cache: new InMemoryCache()
  });  

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