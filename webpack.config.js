/* eslint-disable */
const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const app_root = 'src'; // the app root folder: src, etc
const projectDir = path.join(__dirname, '../src/public');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    // http://gaearon.github.io/react-hot-loader/getstarted/
    // 'webpack-dev-server/client?http://localhost:8081',
    // 'webpack/hot/only-dev-server',
    'babel-polyfill',
    __dirname + '/' + app_root + '/index.js',
  ],
  output: {
    path: projectDir + '/js',
    publicPath: 'js/',
    filename: 'bundle.js',
  },
  resolveLoader: {
    moduleExtensions: ["-loader"]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/
      },
      {
        // https://github.com/jtangelder/sass-loader
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader?classPrefix'
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      },
    ],
  },
  devServer: {
    contentBase: __dirname + '/public',
    headers: {"Access-Control-Allow-Origin": "*"},
    compress: true,
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new CleanWebpackPlugin(['css/main.css', 'js/bundle.js'], {
      root: __dirname + '/public',
      verbose: true,
      dry: false, // true for simulation
    }),
  ],
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000, // How often check for changes (in milliseconds)
  },
  externals: [{
    xmlhttprequest: '{XMLHttpRequest:XMLHttpRequest}',
  }]
};
