/**
 * webpack
 */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
/**
 * others
 */
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts', // 第三方依赖，如Angular、lodash和bootstrap.cs
        'app': './src/main.ts'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devServer: {
        contentBase: './dist'
    },
    output: {
        // 虽然我们告诉Webpack把输出包放到dist目录，但实际上开发服务器把这些包都放在了内存里，而不会把它们写到硬盘中。 所以在dist目录下是找不到任何文件的(至少现在这个开发环境下构建时没有)
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
        }),
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
    ]
};