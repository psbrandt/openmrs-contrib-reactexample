'use strict'; // eslint-disable-line strict

var path = require('path'); // eslint-disable-line no-var
var webpack = require('webpack'); // eslint-disable-line no-var

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client?reload=true',
    './src/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      include: __dirname,
      query: {
        presets: ['es2015', 'stage-0', 'react'],
      },
    }, {
      test: /\.json?$/,
      loader: 'json',
    }, {
      test: /\.css?$/,
      loaders: ['style', 'raw'],
      include: __dirname,
    }, {
      test: /\.(jpe?g|png|gif|svg)$/,
      loader: 'url',
      query: {
        limit: 10240,
      },
    }],
  },
};
