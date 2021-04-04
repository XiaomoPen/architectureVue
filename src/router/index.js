import Vue from 'vue'
import Router from 'vue-router'

import main from "@/components/main.vue"

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new Router({
  routes:[{
    path: "/main",
    component: main
  }]
})
export default router;