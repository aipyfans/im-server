'use strict';

const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const _externals = require('externals-dependencies');


module.exports = {

    entry: {
        sio_server: [path.resolve(__dirname, 'src/start.js')],
        sio_client: [path.resolve(__dirname, 'src/sio-client.js')]
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/'
    },

    resolve: {
        extensions: ['.js'],
    },

    target: 'node',
    externals: _externals(),
    context: __dirname,
    node: {
        console: true,
        global: true,
        process: true,
        Buffer: true,
        __filename: true,
        __dirname: true,
        setImmediate: true,
        path: true,
    },

    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: 'babel-loader',
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'])
    ],

}