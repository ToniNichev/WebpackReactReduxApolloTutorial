import React, { Component } from 'react';
import Home from '../Home';
import Greetings from '../Greetings';
import About from '../About';
import DogsCatalog from '../../containers/DogsCatalog';
import Header from '../Header';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
              <Route exact path="/home" user="Test" component={Home} />
              <Route exact path="/greetings" user="Test" component={Greetings} />
              <Route exact path="/dogs-catalog" component={DogsCatalog} />              
              <Route exact path="/about" component={About} />
            </Switch>
          </Router>
        </ApolloProvider>
      </div>        
    );
  }
}