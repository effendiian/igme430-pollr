// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

// ////////////////////////
// MODULE EXPORTS
// ////////////////////////

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    output: {
        filename: '[name].bundle.js',
    },
});