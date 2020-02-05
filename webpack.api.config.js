const webpack = require('webpack');
let config = require('./webpack.base.config.js');

config.plugins = [... [new webpack.HotModuleReplacementPlugin()], ... config.plugins ];

module.exports = config;