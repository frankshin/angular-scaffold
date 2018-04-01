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
            {
                test: /\.tsx?$/, 
                loader: "ts-loader"
            },
        ]
    }
};