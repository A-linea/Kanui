const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './source/js/app.js'],
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  externals: {
    jquery: 'jQuery'
  }
};