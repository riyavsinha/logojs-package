module.exports = {
  entry: './src/index.js',
  optimization: { usedExports: true },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js',
    library: 'logojs',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devServer: {
    contentBase: './dist'
  }
};
