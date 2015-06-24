// var ExtractTextPlugin = require("extract-text-webpack-plugin");
// var css = require("!raw!sass!./file.scss");

module.exports = {

  devtool: 'source-map',
  entry: ['webpack/hot/dev-server', './src/app.js'],
  output: {
    filename: 'bundle.js',
    publicPath: 'http://localhost:8090/assets'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['jsx-loader?insertPragma=React.DOM&harmony', 'babel']
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  externals: {
    'react': 'React'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }

}

