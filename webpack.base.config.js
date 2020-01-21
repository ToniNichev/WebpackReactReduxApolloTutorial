const getEnvironmentConstants = require('./getEnvironmentConstants');
const webpack =require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: [
    '@babel/polyfill',    
    './src/index.js',
  ],
  output: {
    filename: '[name]-bundle.js',
    publicPath: '/dist/',
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
        test: /\.(s)?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true,              
              modules: {
                localIdentName: '[folder]-[local]--[hash:base64:5]',
              }
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
              sourceMap: true
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
    new webpack.DefinePlugin({ 'process.env' : getEnvironmentConstants() } ),  
  ]
};