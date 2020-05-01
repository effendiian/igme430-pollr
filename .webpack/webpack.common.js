// ////////////////////////
// MODULE/LIBRARY IMPORT
// ////////////////////////

const path = require('path');

// ////////////////////////
// MODULE EXPORTS
// ////////////////////////

module.exports = {

  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom',
    },
  },
  entry: {
    main: './client/src/index.js',
    util: './client/util/index.js',
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
            cache: true,
            fix: true,
            emitWarning: true,
            failOnError: false,
            configFile: path.resolve(`${__dirname}/../client/.eslintrc`)
        },
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
    }]
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