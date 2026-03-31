const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const basePath = process.env.NODE_ENV === 'production' ? '/blueprint/' : '/';

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: basePath,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.module\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // IMPORTANT: css-loader 7.x changed from CommonJS to ES Module exports by default.
              // With ES Modules, CSS Module class names are exported as named exports instead of
              // on the default export. Setting esModule: false reverts to legacy behavior where
              // the default export contains the classNames object, which is what our imports expect:
              // import styles from './styles.module.scss' -> styles.className
              // Without this, you'll get: "Cannot read properties of undefined (reading 'className')"
              esModule: false,
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      react: path.resolve(__dirname, '../../node_modules/react'),
      'react-dom': path.resolve(__dirname, '../../node_modules/react-dom'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public/current-icons',
          to: 'current-icons',
        },
        {
          from: 'public/new-icons',
          to: 'new-icons',
        },
      ],
    }),
    new webpack.DefinePlugin({
      'process.env.BASE_PATH': JSON.stringify(basePath),
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 3001,
    hot: true,
    open: true,
    client: {
      overlay: {
        warnings: false,
        errors: true,
      },
    },
  },
};
