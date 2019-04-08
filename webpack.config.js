const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
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
        loaders: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};

// const path = require('path');

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-react', '@babel/preset-env'],
//           },
//         },
//       },
//       {
//         test: /\.css$/,
//         loader: "style-loader"
//       },
//       {
//         test: /\.css$/,
//         loader: "css-loader",
//         options: {
//           modules: true,
//           localIdentName: "[name]__[local]___[hash:base64:5]"
//         }
//       }
//     ],
//   },
//   resolve: {
//     extensions: ['*', '.js', '.jsx'],
//   },
// };
