var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var loaders = [
  {
    "test": /\.js?$/,
    "exclude": /node_modules/,
    "loader": "babel-loader"
  }
];

module.exports = {
  devtool: 'eval-source-map',
  entry: path.resolve('static/js', 'main.js'),
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: loaders
  },
  resolve: {
    extensions: ['.js', '.svg'],
    alias: {
      views: path.resolve(__dirname, 'static/js/views'),
      pages: path.resolve(__dirname, 'static/js/pages'),
      components: path.resolve(__dirname, 'static/js/components')
    },
    modules: [
      path.join(__dirname),
      path.join(__dirname, 'node_modules')
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('index.html'),
      inject: 'body',
      filename: 'index.html'
    })
  ],
};
