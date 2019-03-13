module.exports = {
  mode: 'development',
  entry: [
    '@babel/polyfill',    
    './src/app.js'
  ],
  output: {
    filename: '[name]-bundle.js',
  },  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};