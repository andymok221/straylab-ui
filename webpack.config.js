const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: [
      'react-hot-loader/patch',
      './src/doc/App'
    ],
    vendor: [
      'react',
      'react-dom'
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      Tether: 'tether',
      Drop: 'tether-drop',
      TetherTooltip: 'tether-tooltip'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      filename: "vendor.js",
      name: "vendor"
    })
  ]
};
