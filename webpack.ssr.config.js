const webpack = require('webpack');
let config = require('./webpack.base.config.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const LoadablePlugin = require('@loadable/webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const nodeExternals = require('webpack-node-externals');

const path = require('path');

config.mode = "development";
config.target = 'node'; // # 1
config.devtool = "";
config.externals = [nodeExternals()];

config.entry = [
    './ssr-server.js', 
];

config.module.rules[1] =       {
  test:/\.(s*)css$/, 
  use: [
    {
      loader: 'css-loader',
      options: {
        modules: true,
        importLoaders: 2,
        localIdentName: '[folder]-[local]',
        sourceMap: true
      }
    },
    {
      loader: 'sass-loader',
      options: {
        outputStyle: 'expanded',
        sourceMap: true
      }
    }
  ],
}

config.output = {
  path: path.resolve('server-build'),
  filename: '[name]-bundle.js',
  publicPath: '/server-build/',
};


config.plugins = [ ... [
    new LoadablePlugin(),
    new OptimizeCSSAssetsPlugin({})],  
    ... config.plugins
];

module.exports = config;