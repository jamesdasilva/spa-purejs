const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'scripts.js',
    path: path.resolve(__dirname, 'assets'),
    publicPath: '/assets/'
  },
  devtool: 'source-map',
  devServer: {
    hotOnly: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env"]
          }
        }
      }
    ]
  }
};