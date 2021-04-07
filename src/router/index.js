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
import clrklb from "@/components/pht/clgl/clrklb.vue"

//王涛文

import tbxx from "@/components/wtw/tbgl/tbxx.vue"
import tbxxlb from "@/components/wtw/tbgl/tbxxlb.vue"
import zbwj from "@/components/wtw/tbgl/zbwj.vue"
import zbwjlb from "@/components/wtw/tbgl/zbwjlb.vue"
import zgzs from "@/components/wtw/tbgl/zgzs.vue"
import zgzslb from "@/components/wtw/tbgl/zgzslb.vue"
import tbwjsc from "@/components/wtw/tbgl/tbwjsc.vue"
import tbwjsclb from "@/components/wtw/tbgl/tbwjsclb.vue"
import xmkc from "@/components/wtw/tbgl/xmkc.vue"
import xmkclb from "@/components/wtw/tbgl/xmkclb.vue"
import tbbzjsq from "@/components/wtw/tbgl/tbbzjsq.vue"
import tbbzjsqlb from "@/components/wtw/tbgl/tbbzjsqlb.vue"
import kbdj from "@/components/wtw/tbgl/kbdj.vue"
import jzdsqklb from "@/components/wtw/tbgl/jzdsqklb.vue"
import zbjgdj from "@/components/wtw/tbgl/zbjgdj.vue"
import zbjgdjlb from "@/components/wtw/tbgl/zbjgdjlb.vue"
import xmywfsq from "@/components/wtw/tbgl/xmywfsq.vue"
import xmywfsqlb from "@/components/wtw/tbgl/xmywfsqlb.vue"
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
      },{
        path: '/clrklb',
        component: clrklb
      },
      {
        path: '/tbxx',
        component: tbxx
      },
      {
        path: '/tbxxlb',
        component: tbxxlb
      },{
        path: '/zbwj',
        component: zbwj
      },{
        path: '/zbwjlb',
        component: zbwjlb
      },{
        path: '/zgzs',
        component: zgzs
      },{
        path: '/zgzslb',
        component: zgzslb
      },{
        path: '/tbwjsc',
        component: tbwjsc
      },{
        path: '/tbwjsclb',
        component: tbwjsclb
      },{
        path: '/xmkc',
        component: xmkc
      },{
        path: '/xmkclb',
        component: xmkclb
      },{
        path: '/tbbzjsq',
        component: tbbzjsq
      },{
        path: '/tbbzjsqlb',
        component: tbbzjsqlb
      },{
        path: '/kbdj',
        component: kbdj
      },{
        path: '/jzdsqklb',
        component: jzdsqklb
      },{
        path: '/zbjgdj',
        component: zbjgdj
      },{
        path: '/zbjgdjlb',
        component: zbjgdjlb
      },{
        path: '/xmywfsq',
        component: xmywfsq
      },{
        path: '/xmywfsqlb',
        component: xmywfsqlb
      },{path: '/equipment/requisition', component: () => import('../components/equipment/requisition.vue')},
        {path: '/equipment/requisitionList', component: () => import('../components/equipment/requisitionList.vue')},]
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
      }]
    },{
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
