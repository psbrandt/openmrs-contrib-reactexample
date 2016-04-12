'use strict'; // eslint-disable-line strict

var path = require('path'); // eslint-disable-line no-var
var webpack = require('webpack'); // eslint-disable-line no-var
var StatsPlugin = require('stats-webpack-plugin'); // eslint-disable-line no-var

module.exports = {
  entry: [
    'babel-polyfill',
    path.join(__dirname, 'src/index.js'),
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true,
      },
    }),
    new StatsPlugin('webpack.stats.json', {
      source: false,
      modules: false,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
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
