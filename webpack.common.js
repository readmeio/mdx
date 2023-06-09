import ExtractCSS from 'mini-css-extract-plugin';
const { loader: _loader } = ExtractCSS;

export const plugins = [
  new ExtractCSS({
    filename: '[name].css',
  }),
];
export const module = {
  rules: [
    {
      test: /node_modules\/.*(is-plain-obj|parse5)\/.*.js$/,
      use: {
        loader: 'babel-loader',
        options: { extends: './.babelrc' },
      },
    },
    {
      test: /\.jsx?$/,
      exclude: /node_modules\/(?!@readme\/[\w-]+\/)/,
      use: {
        loader: 'babel-loader',
        options: { extends: './.babelrc' },
      },
    },
    {
      test: /\.css$/,
      use: [_loader, 'css-loader'],
    },
    {
      test: /\.scss$/,
      use: [_loader, 'css-loader', 'sass-loader'],
    },
    {
      test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'file-loader',
        options: {
          name: 'dist/fons/[hash].[ext]',
        },
      },
    },
    {
      test: /\.(txt|md)$/i,
      type: 'asset/source',
    },
    {
      test: /\.m?js$/,
      include: /node_modules/,
      type: 'javascript/auto',
      resolve: {
        fullySpecified: false,
      },
    }
  ],
};
export const resolve = {
  extensions: ['.js', '.json', '.jsx'],
};
