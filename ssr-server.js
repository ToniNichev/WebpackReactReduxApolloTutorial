import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import { getDataFromTree } from "react-apollo";
import App from './src/components/App/ssr-index';

const PORT = process.env.PORT || 3006;
const app = express();


app.use(express.static('./build'));
app.use('/dist', express.static('dist')); // to serve frontent prod static files
app.use('/favicon.ico', express.static('assets/images/favicon.ico'));


app.get('/*', (req, res) => {


  const app = (
    <App req={req} />
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
    console.log("ERROR !!!!!", reason)
  });  
 
});

app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});