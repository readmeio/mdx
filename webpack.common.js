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
      test: /\.css$/,
      use: [_loader, 'css-loader'],
    },
    {
      test: /\.scss$/,
      use: [_loader, 'css-loader', 'sass-loader'],
    },
    {
      // eslint-disable-next-line unicorn/no-unsafe-regex
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
  ],
};
export const resolve = {
  extensions: ['.js', '.json', '.jsx'],
};
