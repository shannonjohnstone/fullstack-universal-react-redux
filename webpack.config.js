const path = require('path')
const webpack = require('webpack')

function createApiUrl(NODE_ENV) {
  switch (process.env.NODE) {
    case 'production':
      return 'api.production'
    case 'test':
      return 'api.test'
    case 'development':
      return 'http://localhost:3000/'
    default:
      return 'http://localhost:3000/'
  }
}

module.exports = {
  entry: ['babel-polyfill', './src/app.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'es2016', 'es2017', 'stage-1', 'stage-0']
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_URL: JSON.stringify(createApiUrl(process.env.NODE_ENV))

      }
    })
  ],
  devServer: {
    historyApiFallback: true
  }
}
