
module.exports = {
  publicPath: './',
  devServer: {
    open: true,
    proxy: {
      '/api': {
        //target: 'http://localhost:3000/',  
        target: 'http://8.134.163.132:3000/', // 线上后端地址
        changeOrigin: true, //允许跨域
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}