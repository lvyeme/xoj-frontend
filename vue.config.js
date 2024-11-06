const { defineConfig } = require("@vue/cli-service");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
module.exports = defineConfig({
  devServer: {
    client: {
      overlay: false,
    },
  },
  transpileDependencies: true,
  chainWebpack(config) {
    config.plugin("monaco").use(new MonacoWebpackPlugin());
  },
});
// const { defineConfig } = require("@vue/cli-service");
// const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
//
// module.exports = defineConfig({
//   transpileDependencies: true,
//   chainWebpack(config) {
//     config.plugin("monaco").use(new MonacoWebpackPlugin());
//   },
// });
