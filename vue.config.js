const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackCdnPlugin = require("webpack-cdn-plugin");
module.exports = {
  configureWebpack: {
    plugins: [
      new HtmlWebpackPlugin(),
      new WebpackCdnPlugin({
        modules: [
          {
            name: "vue",
            var: "Vue",
            path: "dist/vue.runtime.min.js"
          },
          {
            name: "vue-router",
            var: "VueRouter",
            path: "dist/vue-router.min.js"
          },
          {
            name: "vuex",
            var: "Vuex",
            path: "dist/vuex.min.js"
          }
        ],
        publicPath: "/node_modules"
      })
    ]
  },
  publicPath: process.env.NODE_ENV === "production" ? "/Browser-Riddles/" : "/"
};
