/*
* Author: fengkun
* Create Time: 2020-03-2020/3/13 00:12:58
* */
const path = require('path')

const resolve = dir => path.join(__dirname, dir)

module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@pages', resolve('src/pages'))
  }
}
