const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
let config = require('./webpack.base.config.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

config.mode = "development";
config.devtool = "";
config.target = "node";
config.externals = [nodeExternals()];

config.entry = {
    server: './ssr-server.js'
  }

config.output = {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, 'server-build')    
}

config.module.rules[1].use[0] = MiniCssExtractPlugin.loader;
config.plugins = [ 
    ... config.plugins,
    ... [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }), 
        new OptimizeCSSAssetsPlugin({}),  
        // on the server we still need one bundle
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
        })
    ]
];
module.exports = config;