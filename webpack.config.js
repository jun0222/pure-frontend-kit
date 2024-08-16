const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "pure-frontend-kit.min.js",
    path: path.resolve(__dirname, "dist"),
    library: "PureFrontendKit",
    libraryTarget: "umd",
  },
  mode: "production",
};
