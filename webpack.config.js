const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          // presets: ['react', 'es2015', 'es2016', 'es2017', 'stage-1', 'stage-0']
          presets: ['react', 'es2017', 'stage-0']
        }
      }
    ]
  }
}
