const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  entry: [
    resolve('./src/index.tsx')
  ],
  output: {
    path: resolve('./dist'),
    publicPath: '/',
    filename: 'js/[name].[contenthash:8].js',
    chunkFilename: 'js/[name].[contenthash:8].chunk.js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$|\.tsx?$/,
        loader: 'eslint-loader',
        exclude: [
          /node_modules/
        ]
      },
      {
        test: /\.jsx?$|\.tsx?$/,
        exclude: [
          /node_modules/,
          resolve('./dist'),
        ],
        use: ['babel-loader'],
      },
      {
        test: /\.css$|\.scss$/,
        use: [
          'style-loader',
          'css-loader?url=false',
          'postcss-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [resolve('./src/assets/sass/variables.scss')],
              caches: true
            },
          },
        ],
        include: [
          resolve('./src'),
          resolve('./node_modules/normalize.css'),
          resolve('./node_modules/react-toastify/dist/ReactToastify.css'),
        ],
      },
      {
        test: /\.jpe?g$|\.png$|\.svg$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'assets/[name]-[hash:8].[ext]'
            }
          },
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader?assets/[name]-[hash:8].[ext]'
        ]
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.es6', '.ts', '.tsx'],
    alias: {
      '@': resolve('src'),
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      name: 'common',
      minChunks: 2
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('./public/index.html'),
      favicon: resolve('./src/assets/images/favicon.svg'),
      title: '百姓网',
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns:['**/*']
    }),
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    host: '0.0.0.0',
    overlay:true,
    proxy: {
      '/api/**': {
        target: 'http://dev-api.baixing.cn',
        changeOrigin: true,
        secure: false,
      },
    }
  }
};
