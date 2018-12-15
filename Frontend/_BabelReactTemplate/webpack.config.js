// universal webpack config of Plasmoxy

const path = require('path')
const dist = path.resolve(__dirname, 'dist')

module.exports = {
    entry: './src/index.jsx',

    devServer: {
        publicPath: '/',
        contentBase: dist,
        hot: false
    },

    output: {
        filename: '[name].bundle.js',
        path: dist,
    },

    devtool: 'source-map',

    resolve: {
        extensions: ['.js', '.json', '.jsx'],
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [ 'babel-loader' ]
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
        ],
    },
};