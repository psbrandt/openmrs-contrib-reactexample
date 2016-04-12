import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import express from 'express';
import path from 'path';
import http from 'http';
import webpackConfig from './webpack.config';


const isProduction = process.env.NODE_ENV === 'production';
const isDeveloping = !isProduction;

const app = express();
const port = 8000;

// Webpack dev server
if (isDeveloping) {
  const WEBPACK_PORT = 3001;
  const compiler = webpack(webpackConfig);
  app.use(webpackMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false,
    },
  }));

  app.use(webpackHotMiddleware(compiler));
  app.listen(WEBPACK_PORT, 'localhost', (err) => {
    if (err) {
      console.log(err); // eslint-disable-line no-console
    }

    console.log(`WebpackDevServer listening at localhost:${WEBPACK_PORT}`); // eslint-disable-line no-console
  });
}

// this is necessary to handle URL correctly since client uses Browser History
app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '', 'index.html'));
});

// We need to use basic HTTP service to proxy
// websocket requests from webpack
const server = http.createServer(app);

server.listen(port, (err) => {
  if (err) {
    console.log(err); // eslint-disable-line no-console
  }
  console.log(`Server running on port ${port}`); // eslint-disable-line no-console
});
