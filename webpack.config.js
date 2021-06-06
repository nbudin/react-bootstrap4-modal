import path from 'path';
import { env } from 'process';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const config = {
  mode: env.NODE_ENV === 'production' ? 'production' : 'development',
  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/[name]-[contenthash].chunk.js',
    hotUpdateChunkFilename: 'js/[id]-[fullhash].hot-update.js',
    assetModuleFilename: 'static/[name][ext]',
  },
  entry: {
    ModalTester: path.resolve('./src/ModalTester.tsx'),
  },
  devServer: {
    port: 3043,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
  resolve: {
    extensions: ['.js', '.mjs', '.ts', '.tsx'],
    modules: [path.resolve('./src'), 'node_modules'],
    // alias: {
    //   'react/jsx-dev-runtime': 'react/jsx-dev-runtime.js',
    //   'react/jsx-runtime': 'react/jsx-runtime.js',
    // },
  },
  plugins: [],
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};

if (process.env.ANALYZE_BUNDLE_SIZE) {
  config.plugins.push(new BundleAnalyzerPlugin());
}

export default config;
