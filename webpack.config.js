const webpack = require('webpack')

module.exports = {
  entry: {
    main: [
//      'babel/polyfill',
      './app/main.js'
    ]
  },
  output: {
    path: './dist',
    publicPath: '/',
    filename: '[name].js'
  },
  devtool: '#source-map',
  module: {
    loaders: [
      { test: /\.css$/, loaders: [ 'file?name=[name].css', 'cssnext' ] },
      { test: /\.js$/, exclude: /node_modules/, loaders: [ 'babel?stage=0', 'format-message' ] }
    ]
  },
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
/*
  formatMessage: {
    translations: require('./locales/en'),
    missingTranslation: 'ignore',
    locale: 'en'
  },
  devServer: {
    contentBase: 'dist/',
    host: 'localhost',
    inline: true
  }
*/
}