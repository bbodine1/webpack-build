const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var outputDir = 'dist';

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),

  output: {
    path: path.resolve(__dirname, outputDir),
    filename: 'bundle.js'
  },


  module: {
    rules: [
      {
        test: /\.js$/
      },
      {
        test: /\.(css|scss|sass)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { sourceMap: true } },
            { loader: 'postcss-loader', options: { sourceMap: true } },
            { loader: 'sass-loader', options: { sourceMap: true } }
          ]
        })
      },
      {
        // test: /\.jpe?g$|\.gif$|\.png$|\.svg$/i,
        test: /\.(jpe?g|gif|png|svg)$/i,
        use: 'file-loader?name=[path][name].[ext]'
      }
    ]
  },

  devServer: {
    contentBase: path.resolve(__dirname, outputDir),
    compress: true,
    port: 8080,
    stats: 'minimal',
    overlay: true,
    open: true,
    openPage: ''
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'HTML Webpack Template',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      template: './src/index.html'
    }),
    new ExtractTextPlugin({
     filename: 'style.css',
     disable: true
    })
  ]

}
