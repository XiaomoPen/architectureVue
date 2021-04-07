// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

Vue.use(ElementUI)
Vue.config.productionTip = false
axios.defaults.baseURL = "http://localhost:7777"

//导入axios库和qs库
//导入QS
import qs from 'qs';
//导入通用的axios对象
Vue.prototype.$axios = axios

Vue.prototype.qs = qs
// Vue.prototype.$post = post
Vue.prototype.$fetch = fetch;

// 路由
router.beforeEach((to, from, next) => {
  // eslint-disable-next-line eqeqeq
  if (to.path == '/login' || sessionStorage.getItem('token')) {
    next()
  } else {
    Message.error('请重新登录')
    next('login')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  data:function(){
    return{
      myEvent: new Vue()
    }
  },
  template: '<App/>'
})
