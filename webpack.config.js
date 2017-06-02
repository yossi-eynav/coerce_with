const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        background: './src/background',
        options: './src/options',
        switcher: './src/switcher',
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    plugins: [
      new CopyWebpackPlugin([
          {from: './manifest.json'},
          {from: './background.html'},
          {from: './options.html'},
          {from: './assets/'},
      ])
    ],
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    devtool: '#eval-source-map'
};