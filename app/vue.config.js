const path = require('path')
function resolve (dir) {
    return path.join(__dirname, './', dir)
  }
  
module.exports = {
    lintOnSave: false,
    //assetsDir: 'battleDuty',
    devServer: {
        open: true,
        proxy: {
            '/': {
                target: 'http://localhost:8001/',
                ws: true,
                changeOrigin: true
            },
        },  // 配置
        historyApiFallback: {
            rewrites: [{
                from: /./,
                to: '/public/index.html'
            }]
        }
    },
    configureWebpack: {
        resolve: {
          alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
          },
        },
    },
}