import 'lib-flexible'
import './style/index.scss'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import http from './utils/http'
import axios from 'axios'
Vue.prototype.$axios = axios
Vue.config.productionTip = false
window.http = http
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
