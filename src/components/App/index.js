import React, { Component } from 'react';
import Greetings from '../Greetings';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from '../About';
import { ApolloProvider, graphql } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import DogsCatalog from '../../containers/DogsCatalog';
import Header from '../Header';
import styles from './styles.scss';
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
            <Header />
            <Switch>
              <Route exact path="/greetings" user="Test" component={Greetings} />
              <Route exact path="/about" component={About} />
              <Route exact path="/dogs" component={DogsCatalog} />
            </Switch>
          </Router>
        </ApolloProvider>
      </div>        
    );
  }
}