import { resolve as _resolve } from 'path';

import pkg from 'webpack';
import merge from 'webpack-merge';

import common from './webpack.common';

import { fileURLToPath } from 'url';
import path from 'path';

const { ProvidePlugin } = pkg;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = merge(module, {
  entry: {
    demo: './example/index.jsx',
  },
  output: {
    path: _resolve(__dirname, 'example/'),
    filename: '[name].js',
  },
  devServer: {
    static: './example',
    compress: true,
    port: 9966,
    hot: true,
  },
  plugins: [
    new ProvidePlugin({
      process: 'process/browser',
    }),
  ],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
});

export default config;
