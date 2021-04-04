// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

//导入axios库和qs库
import axios from 'axios';
//导入QS
import qs from 'qs';
//导入通用的axios对象
Vue.prototype.$axios = axios

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
