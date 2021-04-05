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

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new Router({
  routes:[{
    name:main,
    path: "/main",
<<<<<<< HEAD
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
  }]
=======
    component: main
  },
    ],
  mode:'history'//去掉地址中的#号
>>>>>>> a85de72b9fd977522cc9f414cc0c63b1dfbb05d3
})
export default router;
