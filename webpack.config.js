const path = require("path");

module.exports = {
  entry: {
    index: "./script/calculadora.js",
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "index.min.js",
  },
  mode: "production",
};
