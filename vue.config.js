const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  lintOnSave: false,

  devServer: { 
    proxy: { // proxyTable 설정 
            '/api': { 
                    target: 'http://localhost:40000/api',                           //로컬_백엔드 APIs 호출 Arhtur.Kim
                    //target: 'https://dev.hkpalette.com/api',                     //운영_백엔드 APIs 호출 Arhtur.Kim
                    changeOrigin: true , 
                    pathRewrite:{ "^/api" : '' 
                            } 
                    } ,
    }
  },
})
