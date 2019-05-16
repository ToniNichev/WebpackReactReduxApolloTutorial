import React, { Component } from 'react';
import PageLayout from '../../containers/PageLayout';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { StaticRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import reducers from '../../reducers';
import fetch from 'isomorphic-fetch';

const styles = require('./styles.scss');

const store = createStore(reducers, {});

export default ( {req} ) => {
//export default class App extends Component {

    const GRAPHQL_URL = process.env.GRAPHQL_URL;
    
    /*
    const client = new ApolloClient({
      link: new HttpLink({ uri:  GRAPHQL_URL }),
      cache: new InMemoryCache()
    });  
    */

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
            <Router context={ context } location={ req.url }>
                <PageLayout location={ req.url } />    
            </Router>
          </ApolloProvider>
        </Provider>
      </div>        
    );
  
}