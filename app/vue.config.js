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
            '/api/': {
                target: 'http://localhost:8001/',
                pathRewrite: {'^/api' : ''},
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
    // chainWebpack: config => {
    //     config
    //   .module
    //   .rule('scss')
    //   .use('sass-resources-loader')
    //   .loader('sass-resources-loader')
    //   .options({
    //     resources: resolve('./src/style/common.scss'),
    //   })
    //   return config
    // },
    css: {
        loaderOptions: {
            sass: {
              prependData: `
                @import "./src/style/common.scss";
                @import "./src/style/var.scss";
              `
            }
        }
    }
}