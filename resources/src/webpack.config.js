const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

module.exports = {
  entry: {
    main: './js/main.js'
  },
  output: {
    path: path.resolve(__dirname, '../'),
    filename: 'js/[name].js'
  },
  mode: 'production',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.scss$/,
        use: [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: './images',
          publicPath: '../images'
        }
      }
    ]
  },
  plugins: [ 
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    })
  ]
};