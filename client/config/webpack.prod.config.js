const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: "../client/src/index.tsx",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "../build")
  },
  mode: "production",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "../client/public/index.html",
      filename: "index.html"
    }),
    new CleanWebpackPlugin()
  ]
};
