const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('../webpack.common.js');
const path = require('path');
const dotenv = require('dotenv');

const resolve = (dir) => path.resolve(__dirname, dir);

const envFile = dotenv.config({ path: resolve('../env/.env.prod') }).parsed;
const envKeys = Object.keys(envFile).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(envFile[next]);
  return prev;
}, {});

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin(envKeys)
  ]
})
