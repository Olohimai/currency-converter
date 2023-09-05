// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('js')
      .test(/\.js$/)
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .exclude.add(/node_modules/);
  },
  configureWebpack: {
    devtool: 'source-map',
  },
};
