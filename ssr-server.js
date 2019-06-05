import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import Html from './html.js';
import App from './src/components/App';


const PORT = process.env.PORT || 3006;
const app = express();

app.use('/server-build', express.static('./server-build'));
app.use('/dist', express.static('dist')); // to serve frontent prod static files
app.use('/favicon.ico', express.static('./src/images/favicon.ico'));

app.get('/*', (req, res) => {

  const mainApp = (
    <App req={req} client={client} />
  );    

 
    const content = ReactDOMServer.renderToString(mainApp);
    const html = <Html content={content} />;
  
    res.status(200);
    res.send(`<!doctype html>\n${ReactDOMServer.renderToStaticMarkup(html)}`);
    res.end(); 
});

app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});