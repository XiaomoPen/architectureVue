// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import {get, post, del} from '../api/axios'

Vue.use(ElementUI)
// Vue.config.productionTip = false
axios.defaults.baseURL = "http://localhost:7777"

//导入QS
import qs from 'qs';
//导入通用的axios对象
Vue.prototype.$axios = axios
Vue.prototype.$get = get
Vue.prototype.$post = post
Vue.prototype.$del = del

Vue.prototype.qs = qs
// Vue.prototype.$post = post
Vue.prototype.$fetch = fetch;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
