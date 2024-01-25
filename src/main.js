import Vue from 'vue'
import App from './App.vue'
import router from "./router/index";
import vuetify from './plugins/vuetify'
import { post } from '@/util/api.js'
import store from '@/store'

Vue.config.productionTip = false
Vue.prototype.$post = post
Vue.prototype.$store = store

new Vue({
  render: h => h(App),
  vuetify,
  router,
  store,
}).$mount('#app')
