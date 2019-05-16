import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

const PORT = process.env.PORT || 3006;
const app = express();


app.get('/*', (req, res) => {


  const app = (
    <div>TEST 123</div>
  );    

 
  //const content = ReactDOMServer.renderToString(app);

  res.status(200);
  //res.send(`<!doctype html>\n${content}`);
  res.send("TEST 123");
  res.end();
 
});

app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});