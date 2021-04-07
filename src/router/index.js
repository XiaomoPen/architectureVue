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
//谭奕豪
import qjsq from "@/components/tyh/qjsq.vue"
import login from "@/components/tyh/index.vue"
import jbsq from "@/components/tyh/jbsq.vue"
import ccsq from "@/components/tyh/ccsq.vue"
import wdsq from "@/components/tyh/wdsq.vue"
import dblc from "@/components/tyh/dblc.vue"

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
      path: '/login',
      component: login,
    },{
      path: '/cCustomer',
      components: {
        default: cCustomer
      }
    }, {
      path: '/cPersonal',
      component:cPersonal,
      redirect: '/qjsq',
      children: [{
        path: '/qjsq',
        component: qjsq
      },{
        path: '/jbsq',
        component: jbsq
      },{
        path: '/ccsq',
        component: ccsq
      },{
        path: '/wdsq',
        component: wdsq
      },{
        path: '/dblc',
        component: dblc
      },],
    },{
      path: '/cMatters',
      components: {
        default: cMatters
      }
    }]
  }],
  mode: 'history' //去掉地址中的#号
})
export default router;
