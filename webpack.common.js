const path = require('path');

module.exports = {
  entry: {
    index: './src/index',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'ReactBootstrap4Modal',
    libraryTarget: 'umd',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  externals: {
    // Use external version of React
    react: 'React',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
