const path = require('path')
const dist = path.resolve(__dirname, 'dist')

module.exports = {
    entry: './src/index.tsx',

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
        extensions: ['.js', '.json', '.ts', '.tsx'],
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: [ 'ts-loader' ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader' ]
            },
            {
                test: /\.sass$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ],
    },
};