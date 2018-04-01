var path = require('path');
var webpack = require('webpack');

module.exports = {
    mode: "production",
    entry: './src/app/main.ts',
    resolve: {
       extensions: ['.ts', '.js']
    },
    output: {
       path: path.resolve(__dirname, 'dist'),
       filename: 'bundle.js'
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {
                test: /\.tsx?$/, 
                loader: "ts-loader"
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true,
                    }
                }]
            }
        ]
    }
};