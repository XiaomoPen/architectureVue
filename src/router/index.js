import Vue from 'vue'
import Router from 'vue-router'
//解决Vue前端的Session问题
import axios from 'axios'
axios.defaults.withCredentials = true;
import main from "@/components/main.vue"
import cProject from "@/components/column/c_project.vue"
import cCustomer from "@/components/column/c_customer.vue"
import cPersonal from "@/components/column/c_personal.vue"
import cMatters from "@/components/column/c_matters.vue"
// 彭海涛
import clzjh from "@/components/pht/clgl/clzjh.vue"
import clxqjh from "@/components/pht/clgl/clxqjh.vue"
import clzjhlb from "@/components/pht/clgl/clzjhlb.vue"
import clxqjhlb from "@/components/pht/clgl/clxqjhlb.vue"
import clht from "@/components/pht/clgl/clht.vue"
import clhtlb from "@/components/pht/clgl/clhtlb.vue"
import clrk from "@/components/pht/clgl/clrk.vue"

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new Router({
  routes: [{
    name: main,
    path: "/main",
    component: main,
    redirect: '/cProject',
    children: [{
      path: '/cProject',
      component: cProject,
      redirect: '/clzjh',
      children: [{
        path: '/clzjh',
        component: clzjh
      }, {
        path: '/clzjhlb',
        component: clzjhlb
      }, {
        path: '/clxqjh',
        component: clxqjh
      }, {
        path: '/clxqjhlb',
        component: clxqjhlb
      }, {
        path: '/clht',
        component: clht
      }, {
        path: '/clhtlb',
        component: clhtlb
      }, {
        path: '/clrk',
        component: clrk
      }]
    }, {
      path: '/cCustomer',
      components: {
        default: cCustomer
      }
    }, {
      path: '/cPersonal',
      components: {
        default: cPersonal
      }
    }, {
      path: '/cMatters',
      components: {
        default: cMatters
      }
    }]
  }],
  mode: 'history' //去掉地址中的#号
})
export default router;
