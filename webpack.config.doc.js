const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');

module.exports = {
  entry: {
    app: [
      './src/doc/App'
    ],
    vendor: [
      'react',
      'react-dom'
    ]
  },
  output: {
    path: path.resolve(__dirname, './doc'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'ReactComponentNpm'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader",
            "sass-loader"
          ]
        })
      },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      filename: "vendor.js",
      name: "vendor"
    }),
    new webpack.ProvidePlugin({
      Tether: 'tether',
      Drop: 'tether-drop',
      TetherTooltip: 'tether-tooltip'
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      comments: false
    }),
    new ExtractTextPlugin("styles.css")
  ]
};
