/*
 * WebpackReactor
 * Plasmoxy's React Babel Webpack config.
 */

const webpack = require('webpack')

module.exports = {
    entry: './src/App.jsx',

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modles/,
          use: ['babel-loader']
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader' ]
        },
        {
          test: /\.(sass|scss)$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },

        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'url-loader?limit=1000000&mimetype=application/font-woff'
        }, {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file-loader'
        }, {
          test: /\.json$/,
          loader: "json-loader"
        }, {
          test: /\.(png|jpg)$/,
          loader: 'file-loader?name=images/[name].[ext]'
        }
      ]
    },

    resolve: {
      extensions: ['*', '.js', '.jsx']
    },


    devtool: 'source-map',

    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
      contentBase: './dist',
      hot: true
    }

}