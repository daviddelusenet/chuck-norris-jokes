const { resolve } = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { distPath, publicPath } = require('./paths');

module.exports = () => ({
  entry: {
    'chuck-noris-jokes': ['babel-polyfill', resolve(__dirname, './../src/index.js')],
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        exclude: /(node_modules)/,
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'react-svg-loader',
          },
        ],
      },
    ],
  },
  output: {
    filename: '[name].[hash].min.js',
    path: distPath,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: publicPath,
        to: distPath,
      },
    ]),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, './../src/templates/index.html'),
    }),
  ],
});
