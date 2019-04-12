import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import config from './webpack.api.config.js';

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
  hot: true,
  publicPath: config.output.publicPath
});
server.listen(8080, 'localhost', function() {});