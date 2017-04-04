module.exports = {
  entry: './src/index.js',
  target: 'node',
  output: {
    path: './lib',
    filename: 'index.js',
    library: 'HelloWorld',
    libraryTarget: 'umd',
  },
  externals: [/^rxjs.*/],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
    }],
  },
};
