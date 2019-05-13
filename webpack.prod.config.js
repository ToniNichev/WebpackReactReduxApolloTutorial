const webpack = require('webpack');
let config = require('./webpack.base.config.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
config.mode = "production";
config.devtool = "";
config.entry = [
    './src/index.js', 
];
config.module.rules[1].use[0] = MiniCssExtractPlugin.loader;
config.plugins = [ ... [new MiniCssExtractPlugin({
        // these are optional
        filename: "[name].css",
        chunkFilename: "[id].css"
    })], 
    ... config.plugins
];
module.exports = config;