const path = require("path");

module.exports = {
  entry: "./src/index.js", // Entry point for the app
  target: "node", // Target platform (node.js)
  output: {
    filename: "bundle.js", // Output file for bundled code
    path: path.resolve(__dirname, "dist"), // Output directory
  },
}

module.exports = {
  externals: [require("webpack-node-externals")()], // Exclude node_modules from the bundle
  mode: "production", // Set production mode for optimizations
     module: {
    rules: [
      {
        test: /\.html$/,
        use: 'null-loader', // This loader does nothing essentially excluding the file
      },
]}};
