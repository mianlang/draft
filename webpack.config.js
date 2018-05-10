const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    // 入口文件
    './index.jsx',
  ],
  output: {
    filename: 'pack.js',
    path: __dirname,
    // publicPath: '/assets/'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
        },
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      favicon: './img/tx-red.png',
      title: 'Draft',
      inject: true,
      hash: true,
    }),
  ],
};
