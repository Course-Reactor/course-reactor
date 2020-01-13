const path = require("path");

module.exports = {
  entry: "./resources/src/app.ts",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "app.bundle.js",
    chunkFilename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  }
};
