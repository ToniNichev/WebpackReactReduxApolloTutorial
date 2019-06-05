/* eslint-disable react/no-danger */

import React from 'react';

const Html = ({ content, client: { cache } }) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" type="text/css" href="./server-build/main.css" />
      <title>TEST</title>
    </head>
    <body>
      <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
      <script type="text/javascript" src="dist/main-bundle.js" charSet="UTF-8" />
    </body>
  </html>
);

export default Html;