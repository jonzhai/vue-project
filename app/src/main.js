import 'lib-flexible'
import './style/index.scss'
import 'font-awesome/css/font-awesome.min.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import http from './utils/http'
import axios from 'axios'
import FastClick from 'fastclick'
Vue.prototype.$axios = axios
FastClick.attach(document.body);
Vue.config.productionTip = false
window.http = http
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
