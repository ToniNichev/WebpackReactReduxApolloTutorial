const webpack = require('webpack');
let config = require('./webpack.base.config.js');
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const { ReactLoadablePlugin } = require('react-loadable/webpack');

config.mode = "production";
config.devtool = "";

config.entry = [
    './src/index.js', 
];
config.module.rules[1].use[0] = ExtractCssChunks.loader;
config.plugins = [ ... 
  [
    new ExtractCssChunks(
      {
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[name].css",
        orderWarning: true, // Disable to remove warnings about conflicting order between imports
      }
    ),
    new ReactLoadablePlugin({
      filename: './dist/loadable-manifest.json'
    }),   
  ],
    ... config.plugins
];
module.exports = config;