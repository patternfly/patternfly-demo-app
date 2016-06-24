// For more examples of using HMR, refer to:
// http://andrewhfarmer.com/webpack-hmr-tutorial/
var webpack = require('webpack');
var config = require('./webpack.config');

config.entry = [
    './scripts/main',
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080/'
];

config.plugins.push(
    //HMR
    new webpack.HotModuleReplacementPlugin()
);

module.exports = config;