const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].js',
  },

  plugins: [],
});
