const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: {
          loader: "style-loader",
        }
      },
      {
        test: /\.css$/,
        use: { // I don't know what this does
          loader: "css-loader",
          options: {
            modules: true,
          }
        }
      },
    ],
  },
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};
