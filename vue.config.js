const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
})
// module.exports = {
//   devServer: {
//     open: false,
//     port: 8080,
//     // 代理
//     proxy: {
//       '/': {
//         target: 'http://localhost:8088',
//         changeOrigin: true
//       }
//     }
//   }
// }
