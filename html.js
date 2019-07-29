import React from 'react';

const Html = ({ content, cssBundles, jsBundles, apolloClient }) => (
  <html lang="en">
  <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Server Side Rendering and Bundle Splitting</title>
    <link
    href="/dist/main.css"
    rel="stylesheet"
    as="style"
    media="screen, projection"
    type="text/css"
    charSet="UTF-8"
  />

    {
      cssBundles.map( (bundle) => 
        (<link
          href={`${bundle.publicPath}`}
          rel="stylesheet"
          as="style"
          media="screen, projection"
          type="text/css"
          charSet="UTF-8"
        />))
    }

    {jsBundles.map( ( {file}) => (<script src={`/dist/${file}`}>{file}</script>) )}
  </head>
  <body cz-shortcut-listen="true">
    <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
    <script dangerouslySetInnerHTML={{
          __html: `window.__APOLLO_STATE__=${JSON.stringify(apolloClient.cache.extract())}`}} />
  
    <script src="/dist/main-bundle.js"></script>
  </body>
</html>  

);

export default Html;  