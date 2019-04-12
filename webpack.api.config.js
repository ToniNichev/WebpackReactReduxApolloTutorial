const webpack = require('webpack');
let config = require('./webpack.base.config.js');

config.entry = [
  '@babel/polyfill',    
  './src/index.js',
  'webpack/hot/dev-server',
  'webpack-dev-server/client?http://localhost:8080/',       
];

config.plugins = [
  new webpack.HotModuleReplacementPlugin(),
];

module.exports = config;