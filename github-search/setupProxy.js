const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    proxy('/api1',{ // 遇见/api1 的前缀请求，就会触发该代理配置
      target:'http://localhost:5000', //请求转发给谁
      changeOrigin:true,  // 控制服务器收到的请求头中Host的值
      pathRewrites:{'^/api1':''}, // 重写请求路径（必须）

    })
  )
}