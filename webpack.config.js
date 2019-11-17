const path = require('path');

module.exports = {
  mode: 'production',
  context: path.join(__dirname, './'),
  entry: './views/app.jsx',
  output: {
    path: path.join(__dirname, 'views/views'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'jsx-loader',
        exclude: /node_modules/,
        include: path.join(__dirname, 'views'),
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
        exclude: /node_modules/,
        include: path.join(__dirname, 'views'),
      },
    ],
  },
};