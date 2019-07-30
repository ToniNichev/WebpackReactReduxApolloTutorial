import React from 'react';
import PageLayout from '../../containers/PageLayout';
import { StaticRouter,  Route, Switch } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import reducers from '../../reducers';
import fetch from 'isomorphic-fetch';

import styles from './styles.scss';

const store = createStore(reducers, {});

export default ( {req, client} ) => {

  const subDomain = req.headers.host.split('.').length == 1 ? process.env.DEFAULT_BRAND : req.headers.host.split('.')[0];
  const context = {};
  return (
    <div className={styles.appWrapper}>
      <Provider store={store}>   
        <ApolloProvider client={client}>            
          <StaticRouter location={ req.url } context={context}>
            <Switch>
              <Route exact path="*" render={(props) => <PageLayout {...props} subDomain={subDomain} />} />  
            </Switch>            
          </StaticRouter>
        </ApolloProvider>
      </Provider>
    </div>
  );
}