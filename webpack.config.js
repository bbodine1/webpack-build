const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },


  module: {
    rules: [
      {
        test: /\.js$/
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [
          { loader: 'style-loader', options: { sourceMap: true } },
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      },
      {
        // test: /\.jpe?g$|\.gif$|\.png$|\.svg$/i,
        test: /\.(jpe?g|gif|png|svg)$/i,
        loader: "file-loader?name=/assets/img/[name].[ext]"
      }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8080
  },

  plugins: [

  ]

}
