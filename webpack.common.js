const path = require('path');
const fs = require('fs');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function (x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function (mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });


module.exports = {

    entry: {
        sio_server: ['babel-polyfill',path.resolve(__dirname, 'src/start.js')],
        sio_client: ['babel-polyfill',path.resolve(__dirname, 'src/sio-client.js')]
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },

    target: 'node',
    externals: nodeModules,
    context: __dirname,
    node: {
        __filename: false,
        __dirname: true
    },

    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'])
    ],

}