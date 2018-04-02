/**
 * others
 */
var path = require('path');
var webpackMerge = require('webpack-merge');
/**
 * files
 */
var commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
    mode: "production",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },
    module: {
        rules: []
    }
});