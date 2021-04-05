import Vue from 'vue'
import Router from 'vue-router'
//解决Vue前端的Session问题
import axios from 'axios'
axios.defaults.withCredentials =  true;
import main from "@/components/main.vue"
import cProject from "@/components/column/c_project.vue"
import cCustomer from "@/components/column/c_customer.vue"
import cPersonal from "@/components/column/c_personal.vue"
import cMatters from "@/components/column/c_matters.vue"
// 彭海涛
import clzjh from "@/components/pht/clgl/clzjh.vue"
import clxqjh from "@/components/pht/clgl/clxqjh.vue"
//陈思畔
import khxx from "@/components/csp/khxx.vue"
import khxxf from "@/components/csp/khxxf.vue"
import htxx from "@/components/csp/htxx.vue"
import htxxf from "@/components/csp/htxxf.vue"
import khfp from "@/components/csp/khfp.vue"
import khfpf from "@/components/csp/khfpf.vue"
import khlxr from "@/components/csp/khlxr.vue"
import khlxrf from "@/components/csp/khlxrf.vue"
import lxjl from "@/components/csp/lxjl.vue"
import lxjlf from "@/components/csp/lxjlf.vue"
import wdkh from "@/components/csp/wdkh.vue"

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new Router({
  routes:[{
    name:main,
    path: "/main",
    component: main,
    redirect: '/cProject',
    children: [{
      path: '/cProject',
      component:cProject,
      redirect: '/clzjh',
      children: [{
        path: '/clzjh',
        component: clzjh
      },{
        path: '/clxqjh',
        component: clxqjh
      }]
    },{
      path: '/cCustomer',
      component:cCustomer,
      redirect: '/htxx',
      children:[{
        path: '/htxx',
        component: htxx
      },{
        path: '/htxxf',
        component: htxxf
      },{
        path: '/khfp',
        component: khfp
      },{
        path: '/khfpf',
        component: khfpf
      },{
        path: '/khlxr',
        component: khlxr
      },{
        path: '/khlxrf',
        component: khlxrf
      },{
        path: '/khxx',
        component: khxx
      },{
        path: '/khxxf',
        component: khxxf
      },{
        path: '/lxjl',
        component: lxjl
      },{
        path: '/lxjlf',
        component: lxjlf
      },{
        path: '/wdkh',
        component: wdkh
      }],
      components: {
        default: cCustomer
      }
    },{
      path: '/cPersonal',
      components: {
        default: cPersonal
      }
    },{
      path: '/cMatters',
      components: {
        default: cMatters
      }
    }]
  }],
  mode:'history'//去掉地址中的#号
})
export default router;
