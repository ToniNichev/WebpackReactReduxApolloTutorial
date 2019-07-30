import React from 'react';
import express from 'express';
import App from './src/components/App/ssr-index';
import Loadable from 'react-loadable';
import manifest from './dist/loadable-manifest.json';
import { getDataFromTree } from "react-apollo";
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { renderToStringWithData } from "react-apollo"
import { createHttpLink } from 'apollo-link-http';
import { getBundles } from 'react-loadable/webpack';
import ReactDOMServer from 'react-dom/server';
import Html from './html.js';

const PORT = process.env.PROD_SERVER_PORT;
const app = express();

app.use('/server-build', express.static('./server-build'));
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

  // Prepare to get list of all modules that have to be loaded for this route
  const modules = [];
  const mainApp = (
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <App req={req} client={client} />
    </Loadable.Capture>    
  );

  // Execute all queries and fetch the results before continue
  getDataFromTree(mainApp).then(() => {        
    // Once we have the data back, this will render the components with the appropriate GraphQL data.
    renderToStringWithData(<App req={req} client={client} />).then( (HTML_content) => {
      // Extract CSS and JS bundles
      const bundles = getBundles(manifest, modules);
      console.log(bundles);
      const cssBundles = bundles.filter(bundle => bundle && bundle.file.split('.').pop() === 'css');
      const jsBundles = bundles.filter(bundle => bundle && bundle.file.split('.').pop() === 'js');
    
      const html = <Html content={HTML_content} cssBundles={cssBundles} jsBundles={jsBundles} apolloClient={client} />;

      res.status(200);
      res.send(`<!doctype html>\n${ReactDOMServer.renderToStaticMarkup(html)}`);
      res.end(); 
    });    



  }).catch( (error) => {
    console.log("ERROR !!!!", error);
  });
});

Loadable.preloadAll().then(() => {
  app.listen(PORT, () => {
    console.log(`😎 Server is listening on port ${PORT}`);
  });
});