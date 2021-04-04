const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => ({
  mode: 'production',
  devtool: 'source-map',
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.css', '.json', '.png', '.ico'],
  },
  entry: {
    background: ['./src/background.ts'],
    options: ['./src/options.ts'],
    content_script: ['./src/content_script.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader'],
        exclude: ['/node_modules'],
      },
      {
        test: /\.html$/, // html loader
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif|ico)$/,
        use: [{ loader: 'file-loader' }],
      },
    ],
  },
  plugins: [new HtmlWebPackPlugin(), new MiniCssExtractPlugin()],
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js',
  },
});
