var webpack = require('webpack');

module.exports = {
  entry: './source/app.ts',
  target: "node",
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  moduleDirectories: ['node_modules'],
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      {
        test: /\.json($|\?)/,
        loader: 'json-loader'
      }]
  },
  ts: {
    transpileOnly: false
  }
};