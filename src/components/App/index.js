import React from 'react';
import PageLayout from '../../containers/PageLayout';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import reducers from '../../reducers';
import './index.css';

const styles = require('./styles.scss');

const store = createStore(reducers, {});

export default () => {
  const GRAPHQL_URL = process.env.GRAPHQL_URL;
  const client = new ApolloClient({
    link: new HttpLink({ uri:  GRAPHQL_URL }),
    cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
  }); 
  
  const subDomain = window.location.host.split('.').length == 1 ? process.env.DEFAULT_BRAND : window.location.host.split('.')[0];
  return (
    <div className={styles.appWrapper}>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <Router>
            <Switch>
              <Route exact path="*" render={(props) => <PageLayout {...props} subDomain={subDomain} />} />
            </Switch>
          </Router>
        </ApolloProvider>
      </Provider>
    </div>        
  );
}