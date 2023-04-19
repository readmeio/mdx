const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');

const common = require('./webpack.common');

const shared = ({ target }) => ({
  entry: './index',
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
    libraryTarget: target === 'node' ? 'commonjs2' : undefined,
  },
  optimization: {
    minimize: false,
    minimizer: [new TerserPlugin()],
  },
  resolve: {},
  target,
});

const browserConfig = merge(common({ target: 'web' }), shared({ target: 'web' }));
const serverConfig = merge(common({ target: 'node' }), shared({ target: 'node' }));

module.exports = [browserConfig, serverConfig];
