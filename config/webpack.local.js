const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('../webpack.common.js');
const path = require('path');
const dotenv = require('dotenv');

const resolve = (dir) => path.resolve(__dirname, dir);

const envFile = dotenv.config({ path: resolve('../env/.env.local') }).parsed;
const envKeys = Object.keys(envFile).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(envFile[next]);
  return prev;
}, {});

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  plugins: [
    new webpack.DefinePlugin(envKeys),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      test: /\.jsx?$|\.tsx?$/,
      loader: 'eslint-loader',
      exclude: /node_modules/,
      configFile: '../.eslintrc.js'
    })
  ]
});
