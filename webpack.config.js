import TerserPlugin from 'terser-webpack-plugin';
import { merge } from 'webpack-merge';

import * as common from './webpack.common.js';

const browserConfig = merge(common, {
  entry: './index.js',
  externals: {
    '@readme/variable': '@readme/variable',
    '@tippyjs/react': '@tippyjs/react',
    react: {
      amd: 'react',
      commonjs: 'react',
      commonjs2: 'react',
      root: 'React',
      umd: 'react',
    },
    'react-dom': {
      amd: 'react-dom',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      root: 'ReactDOM',
      umd: 'react-dom',
    },
  },
  output: {
    library: {
      type: 'umd',
    },
  },
  optimization: {
    minimize: false,
    minimizer: [new TerserPlugin()],
  },
  resolve: {
    fallback: { path: require.resolve('path-browserify') },
  },
});

const serverConfig = merge(browserConfig, {
  target: 'node',
  output: {
    filename: '[name].node.js',
  },
});

export default [browserConfig, serverConfig];
