module.exports = {
  entry: "./entry.js",
  output: {
    path: 'dist',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: 'node_modules',
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass',
      }
    ],
  },
}
