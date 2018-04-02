/**
 * others
 */
var path = require('path');
var webpackMerge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
/**
 * files
 */
var commonConfig = require('./webpack.common.js');


module.exports = webpackMerge(commonConfig, {
    output: {
        // path: helpers.root('dist'), // 虽然我们告诉Webpack把输出包放到dist目录，但实际上开发服务器把这些包都放在了内存里，而不会把它们写到硬盘中。 所以在dist目录下是找不到任何文件的(至少现在这个开发环境下构建时没有)
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },
    module: {
        rules: []
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerHost: '127.0.0.1',
            analyzerPort: 8889,
            reportFilename: 'report.html',
            defaultSizes: 'parsed',
            openAnalyzer: false,
            generateStatsFile: false,
            statsFilename: 'stats.json',
            statsOptions: null,
            logLevel: 'info'
        })
    ],
    devServer: {
        devServer: {
            contentBase: './dist'
        },
    }
});