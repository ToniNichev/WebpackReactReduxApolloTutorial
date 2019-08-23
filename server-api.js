import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import config from './webpack.api.config.js';
require('dotenv').config();

console.log(">>>" + process.env.GRAPHQL_URL);

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
  hot: true,
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  disableHostCheck: true,
});
server.listen(8080, 'localhost', function() {});