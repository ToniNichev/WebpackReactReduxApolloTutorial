import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import PageLayout from './src/containers/PageLayout/ssr-index';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { StaticRouter } from "react-router-dom";
import { getDataFromTree } from "react-apollo";
import fetch from 'isomorphic-fetch';
import Html from './html.js';
import reducers from './src/reducers';
import { createStore} from 'redux';
import { Provider } from 'react-redux';


const PORT = process.env.PORT || 3006;
const app = express();

app.use(express.static('./build'));
app.use('/dist', express.static('dist')); // to serve frontent prod static files
app.use('/favicon.ico', express.static('./src/images/favicon.ico'));

app.get('/*', (req, res) => {

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

  const app = (
    <Provider store={store}>    
      <ApolloProvider client={client}>
        <StaticRouter context={ context } location={ req.url }>
          <PageLayout location={ req.url } />    
        </StaticRouter>
      </ApolloProvider>
    </Provider>
  );    

 
  getDataFromTree(app).then(() => {
    // We are ready to render for real
    const content = ReactDOMServer.renderToString(app);
    const initialState = client.extract();
  
    const html = <Html content={content} client={client} />;
  
    res.status(200);
    res.send(`<!doctype html>\n${ReactDOMServer.renderToStaticMarkup(html)}`);
    res.end();
  },(reason) => {
    // rejection
    console.log("ERROR in [getDataFromTree] !!!!!", reason)
  });  
 
});

app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});