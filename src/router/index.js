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

import grda from "@/components/lyh/grda.vue";
import zaizhirenyuan from "../components/lyh/zaizhirenyuan";
import contract from "../components/lyh/contract";
import addcontract from "../components/lyh/addcontract";
import addpositive from "../components/lyh/addpositive";
import positive from "../components/lyh/positive";
import departure from "../components/lyh/departure";
import mobilize from "../components/lyh/mobilize";
import addmobilize from "../components/lyh/addmobilize";
import card from "../components/lyh/card";
import addcard from "../components/lyh/addcard";
import adddeparture from "../components/lyh/adddeparture";

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
      component:cMatters,
      redirect: '/grda',
      children: [{
        path: '/grda',
        component: grda
      },{
        path: '/zaizhirenyuan',
        component: zaizhirenyuan,
      },{
        path: '/contract',
        component: contract
      },{
        path: '/addcontract',
        component: addcontract,
      },{
        path: '/addpositive',
        component: addpositive,
      },{
        path: '/positive',
        component: positive,
      },{
        path: '/departure',
        component: departure,
      },{
        path: '/adddeparture',
        component: adddeparture
      },{
        path: '/mobilize',
        component: mobilize,
      },
        {
          path: '/addmobilize',
          component: addmobilize
        },{
        path: '/card',
          component: card
        },{
        path: '/addcard',
          component: addcard
        }
      ]
    }]
  }],
  mode:'history'//去掉地址中的#号
})
export default router;
