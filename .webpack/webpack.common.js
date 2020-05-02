// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////

const path = require('path');

// ////////////////////////
// MODULE EXPORTS
// ////////////////////////

module.exports = {

  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
    "prop-types": "PropTypes",
  },
  entry: {
    util: './client/util/index.js',
    authentication: './client/views/authentication.js',
    feed: './client/views/feed.js',
    poll: './client/views/poll.js',
    profile: './client/views/profile.js',
  },
  output: {
      path: path.resolve(`${__dirname}/../hosted/js`)
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: [ 
          /node_modules/,
          /server/,
        ],
        loader: 'eslint-loader',
        options: {
            cache: false,
            fix: true,
            emitWarning: true,
            failOnError: false,
            configFile: path.resolve(`${__dirname}/../client/.eslintrc`)
        },
      },
      {
        test: /\.css$/i,
        use: [ 'style-loader', 'css-loader' ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            configFile: "./.babelrc.json",
          },
        },
      },
    ]
  },
  resolve: {
    extensions: [ '.js', '.jsx' ]
  },
  devServer: {
    contentBase: path.resolve(`${__dirname}/../hosted/js`),
    compress: true,
    port: 9000,
  }

};



/*
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
*/