const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})

module.exports = {
  // css: {
  //   loaderOptions: {
  //     scss: {
  //       prependData: '@import @/assets/sass/login.scss'
  //     }
  //   }
  // },

  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:40000',
        changeOrigin: true,
      },
    },
  },

  pluginOptions: {
    vuetify: {}
  }
};
