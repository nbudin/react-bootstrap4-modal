const path = require('path');

module.exports = {
  entry: {
    ModalTester: './src/ModalTester',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
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
