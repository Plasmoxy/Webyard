// Imports: Dependencies
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
require("@babel/register")

// Webpack Configuration
module.exports = {
  
  // Entry
  entry: "./src/index.jsx",

  // Output
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  // Loaders
  module: {
    rules : [
      // JavaScript/JSX Files
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // CSS Files
      /*
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
      */
    ]
  },
  
  // Plugins
  plugins: [
    new htmlWebpackPlugin({
      template: './dist/index.html',
      filename: 'index.html',
      hash: true
    })
  ],

};