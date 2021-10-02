const { merge } = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const WEBPACK_BASE = require('./webpack.base').default;
const SRC_MAP_STRATEGY = 'eval-source-map';

const ENV_FILE = process.env.ENV_FILE;

module.exports = merge(WEBPACK_BASE, {
  mode: 'development',
  devtool: SRC_MAP_STRATEGY,
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    hot: true,
    port: process.env.port || 3000,
    contentBase: require('./webpack.base').BUILD_DIR,
    historyApiFallback: true,
    publicPath: '/',
    open: true,
    host: '0.0.0.0',
    disableHostCheck: true,
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new ESLintWebpackPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx']
    }),
    new Dotenv({
      systemvars: true,
      path: ENV_FILE ? `./.env.${ENV_FILE}` : './env'
    })
  ]
});
