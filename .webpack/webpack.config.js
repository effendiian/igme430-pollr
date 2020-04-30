// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////

const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

// ////////////////////////
// MODULE EXPORTS
// ////////////////////////

module.exports = merge(common, {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    cache: true,
                    fix: true,
                    emitWarning: true,
                    failOnError: true,
                    configFile: path.resolve(`${__dirname}/../.eslintrc`)
                }
            }
        ]
    }
});