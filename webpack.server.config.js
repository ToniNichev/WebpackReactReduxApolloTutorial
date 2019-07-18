const path = require('path');
const webpack = require('webpack');
let config = require('./webpack.base.config.js');
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const nodeExternals = require('webpack-node-externals');
const { ReactLoadablePlugin } = require('react-loadable/webpack');

config.target = 'node';
config.mode = "production";
config.devtool = "";

config.entry = { 
  server: './ssr-server.js' 
}

config.output = {
  filename: '[name]-bundle.js',
  path: path.resolve(__dirname, 'server-build')
}

config.externals = [nodeExternals()];

config.module.rules[1].use[0] = ExtractCssChunks.loader;
config.plugins = [
  ... config.plugins,
  ... [
    new ReactLoadablePlugin({
      filename: './dist/loadable-manifest.json'
    }),      
    new ExtractCssChunks(
      {
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[name].css",
        orderWarning: true, // Disable to remove warnings about conflicting order between imports
      }
    ),
    // on the server we still need one bundle
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    })       
  ]
];

module.exports = config;