const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    index: 'index',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },

  // Resolve the `./src` directory so we can avoid writing
  resolve: {
    modules: ['node_modules', 'lib']
  },

  externals: {
    // Use external version of React
    "react": "React"
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: true,

      compress: {
        warnings: false
      },

      output: {
        comments: false
      }
    }),

    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css|html|json|ico|svg|eot|otf|ttf)$/
    })
  ]
};