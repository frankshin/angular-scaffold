/**
 * others
 */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = webpackMerge(commonConfig, {
    mode: "production",
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts', // 第三方依赖，如Angular、lodash和bootstrap.cs
        'app': './src/main.ts'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                test: /\.html$/,
                use: [ {
                    loader: 'html-loader',
                    options: {
                        minimize: false
                    }
                }],
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: true
        })
    ]
});
