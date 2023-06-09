import { resolve as _resolve } from 'path';

import webpack from 'webpack';
import { merge } from 'webpack-merge';

import * as common from './webpack.common.js';

import { fileURLToPath } from 'url';
import path from 'path';

const { ProvidePlugin } = webpack;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = merge(common, {
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

console.log(config)

export default config;
