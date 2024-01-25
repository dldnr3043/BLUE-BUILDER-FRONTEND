import Vue from 'vue'
import App from './App.vue'
import router from "./router/index";
import vuetify from './plugins/vuetify'
import { post } from '@/util/api.js'

Vue.config.productionTip = false
Vue.prototype.$post = post;

new Vue({
  render: h => h(App),
  vuetify,
  router,
}).$mount('#app')
