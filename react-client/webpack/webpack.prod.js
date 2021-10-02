const { merge } = require('webpack-merge');
const Dotenv = require('dotenv-webpack');

const WEBPACK_BASE = require('./webpack.base').default;
const SRC_MAP_STRATEGY = 'source-map';

const ASSETS_LIMIT = 1000 * 1000 * 3;
const ENTRY_POINT_LIMIT = 1000 * 1000 * 3;

module.exports = merge(WEBPACK_BASE, {
  mode: 'production',
  devtool: SRC_MAP_STRATEGY,
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  performance: {
    maxEntrypointSize: ENTRY_POINT_LIMIT,
    maxAssetSize: ASSETS_LIMIT,
  },
  plugins: [
    new Dotenv({
      systemvars: true,
      path: './.env'
    })
  ]
});
