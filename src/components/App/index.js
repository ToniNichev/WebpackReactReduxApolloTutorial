import React, { Component } from 'react';
import PageLayout from '../../containers/PageLayout';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Store from '../../store';
import Reducers from '../../reducers';
import styles from './styles.scss';


let test = Reducers;
window.store = Store(Reducers);

export default class App extends Component {
  render() {
    const GRAPHQL_URL = 'http://localhost:4001/graphql';
    const client = new ApolloClient({
      link: new HttpLink({ uri:  GRAPHQL_URL }),
      cache: new InMemoryCache()
    });  
    return (
      <div className={styles.appWrapper}>
        <ApolloProvider client={client}>
          <Router>
            <Switch>
            <Route exact path="*" component={PageLayout} />  
            </Switch>
          </Router>
        </ApolloProvider>
      </div>        
    );
  }
}