// vue.config.js

// webpack 在进行打包的时候，底层用到了node.js
// 因此，在vue. config.js配置文件中，可以导入并使用node.js 中的核心模块
const path = require('path')
const themePath = path.join(__dirname, './src/theme.less')

module.exports = {
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
        modifyVars: {
          // 直接覆盖变量  缺点：每修改一次就需要重启一次js
          // 'nav-bar-background-color': '#007bfe'
          // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
          hack: `true; @import "${themePath}";`
        }
      }
    }
  }
}
