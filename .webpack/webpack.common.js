// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////

const path = require('path');

// ////////////////////////
// MODULE EXPORTS
// ////////////////////////

module.exports = {
    entry: {
        client: './client/js/index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(`${__dirname}/../hosted/js/`)
    },
    module: {
        rules: [
            {
              test: /\.css$/i,
              use: ['to-string-loader', 'css-loader']
            },
            {
              test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
              loader: 'url-loader',
              options: {
                limit: 8192,
              },
            },
        ]
    }
};