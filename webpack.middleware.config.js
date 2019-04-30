const webpack = require('webpack');
let config = require('./webpack.base.config.js');

config.entry = [
  '@babel/polyfill',    
  './src/index.js',
  'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',        
];

config.plugins = [... [new webpack.HotModuleReplacementPlugin()], ... config.plugins ];

module.exports = config;