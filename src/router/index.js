import Vue from 'vue'
import Router from 'vue-router'
//解决Vue前端的Session问题
import axios from 'axios'
axios.defaults.withCredentials =  true;
import main from "@/components/main.vue"

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new Router({
  routes:[{
    name:main,
    path: "/main",
    component: main
  },
    ],
  mode:'history'//去掉地址中的#号
})
export default router;
