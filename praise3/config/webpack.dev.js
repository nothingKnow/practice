const path = require('path');
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');
module.exports = {
  entry: {
  	index: [
  		path.join(__dirname, '../src/public/scripts/index.es6'),
  		path.join(__dirname, '../src/public/scripts/indexadd.es6')
  	],
  	tag: [
  		path.join(__dirname, '../src/public/scripts/tag.es6'),
  	]
  },
  output: {
    filename: 'public/scripts/[name]-[hash:5].js',
    path: path.join(__dirname, '../build/')
  },
  plugins: [
    new webpack.DefinePlugin({
       'process.env.NODE_ENV': '"dev"',
    }),
    new LiveReloadPlugin({
      appendScriptTag: true
    })
  ]
};