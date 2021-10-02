const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const SOURCE_DIRECTORY = path.resolve(__dirname, '..', 'src');
const BUILD_DIRECTORY = path.resolve(__dirname, '..', 'build');
const PUBLIC_DIRECTORY = path.resolve(__dirname, '..', 'public');

module.exports.default = {
  entry: [`${SOURCE_DIRECTORY}/index.tsx`],
  output: {
    path: BUILD_DIRECTORY,
    publicPath: '/',
    filename: '[name].[contenthash].js',
    sourceMapFilename: '[file].map'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|eot|woff|ttf|ico|mp3|wav)$/i,
        use: ['file-loader?&name=[hash].[ext]']
      },
      {
        test: /\.svg$/i,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              title: false
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, '..', 'src/'),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: `${SOURCE_DIRECTORY}/index.html`
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          to: BUILD_DIRECTORY
        }
      ]
    })
  ]
};

module.exports.SOURCE_DIRECTORY = SOURCE_DIRECTORY;
module.exports.BUILD_DIRECTORY = BUILD_DIRECTORY;
module.exports.PUBLIC_DIRECTORY = PUBLIC_DIRECTORY;
