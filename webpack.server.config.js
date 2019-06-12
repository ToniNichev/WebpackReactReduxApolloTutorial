const webpack =require('webpack');
let config = require('./webpack.base.config.js');
const nodeExternals = require('webpack-node-externals');
const ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require('path');

module.exports = {
  mode: 'development',
  target: 'node',
  devtool: 'eval-source-map',
  externals: [nodeExternals()],
  entry: [ 
    './ssr-server.js',
  ],
  output: {
    path: path.resolve('server-build'),
    filename: '[name]-bundle.js',
    publicPath: '/server-build/',
  },  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },

      // SCSS
      {
        test:/\.(s*)css$/, 
        use: [
          {
            loader:ExtractCssChunks.loader,
            options: {
              hot: true, // if you want HMR - we try to automatically inject hot reloading but if it's not working, add it to the config
              reloadAll: true, // when desperation kicks in - this is a brute force HMR flag
            }
          },  
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
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')()],
            },
          },          
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'expanded',
              sourceMap: false
            }
          }
        ],
      },
      // images
      {
        test: /\.(png|jp(e*)g|svg)$/,  
        use: [{
            loader: 'url-loader',
            options: { 
                limit: 8000, // Convert images < 8kb to base64 strings
                name: 'images/[hash]-[name].[ext]'
            } 
        }]
      },
      //File loader used to load fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }                    
    ]
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env' : 'development' } ),        
    new OptimizeCSSAssetsPlugin({}),  
    new ExtractCssChunks(
      {
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css",
        orderWarning: true, // Disable to remove warnings about conflicting order between imports
      },     
    ),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),          
  ]
};