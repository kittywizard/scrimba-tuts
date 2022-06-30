var HTMLWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/index.html',
    filename: 'newindex.html',
    inject: 'body'
});


module.exports = {
    entry: __dirname + 'script.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    output: {
        filename: 'transformed.js',
        path: __dirname + '/'
    }

};