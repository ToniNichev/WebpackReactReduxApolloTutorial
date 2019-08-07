const webpack = require('webpack');
let config = require('./webpack.base.config.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const Loadable  = require('react-loadable/webpack');

config.mode = "production";
config.devtool = "";

config.entry = [
    './src/index.js', 
];
config.module.rules[1].use[0] = MiniCssExtractPlugin.loader;

config.plugins = [ 
    ... config.plugins,
    ... [
        new Loadable.ReactLoadablePlugin({
            filename: './dist/loadable-manifest.json',
          }),  
        new MiniCssExtractPlugin({
            // these are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new OptimizeCSSAssetsPlugin({})
    ]
];
module.exports = config;