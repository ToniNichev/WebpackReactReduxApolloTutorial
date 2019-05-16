const webpack = require('webpack');
let config = require('./webpack.base.config.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const nodeExternals = require('webpack-node-externals');
const path = require('path');

config.mode = "production";
config.target = 'node'; // # 1
config.devtool = "";
config.externals = [nodeExternals()];

config.entry = [
    './ssr-server.js', 
];

config.output = {
  path: path.resolve('server-build'),
  filename: '[name]-bundle.js',
  publicPath: '/server-build/',
};

config.module.rules[1].use[0] = MiniCssExtractPlugin.loader;
config.plugins = [ ... [new MiniCssExtractPlugin({
        // these are optional
        filename: "[name].css",
        chunkFilename: "[id].css"
    })], 
    new OptimizeCSSAssetsPlugin({}),  
    ... config.plugins
];
module.exports = config;