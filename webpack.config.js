var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: [
    'react-hot-loader/patch',
    // 入口文件
    './index.js'
  ],
  output: {
    filename: 'pack.js',
    path: __dirname
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }, {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }, {
        test: /\.scss$/,
        loader: "style!css!sass"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Draft',
      favicon: './img/tx-red.png'
    }),
  ]
}