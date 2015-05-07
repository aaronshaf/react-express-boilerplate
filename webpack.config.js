var webpack = require('webpack')

module.exports = {
  entry: {
    'public/main': [
//      'babel/polyfill',
      './client/main.js'
    ]
  },
  output: {
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: [ 'babel?stage=1' ] }
    ]
  },
/*
  plugins: [
    new webpack.DefinePlugin({
      "process.env": Object.keys(process.env).reduce(function(o, k) {
        o[k] = JSON.stringify(process.env[k])
        return o
      }, {})
    })
  ],
  cssnext: {
    browsers: [ 'last 2 versions' ],
    compress: true,
    // until cssnext handles loaders properly: https://github.com/cssnext/cssnext-loader/issues/4
    url: {
      // note: doesn't handle absolute urls
      maxSize: 10, // kb
      url: 'inline'
    }
  },
  formatMessage: {
    translations: require('./locales/en'),
    missingTranslation: 'ignore',
    locale: 'en'
  },
  devServer: {
    contentBase: 'dist/',
    host: 'localhost',
    inline: true
  }*/
}