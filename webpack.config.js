var ExtractTextPlugin = require("extract-text-webpack-plugin");

var prod_entry = ['./src/app.js'];
var dev_entry = ['./src/app.js', 'webpack/hot/dev-server'];
var entry = process.env.NODE_ENV === 'production' ? prod_entry : dev_entry;

module.exports = {

  devtool: 'source-map',
  entry: entry,
  output: {
    filename: 'bundle.js',
    path: './dist/statics/', // for production
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
        loader: ExtractTextPlugin.extract(
          // activate source maps via loader query
          'css?sourceMap!' +
          'sass?sourceMap'
        )
      }
    ]
  },
  externals: {
    'react': 'React'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    // extract inline css into separate 'styles.css'
    new ExtractTextPlugin('styles.css')
  ]

}

