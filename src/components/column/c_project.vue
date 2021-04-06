<style scoped="scoped">
</style>


<template>
  <div>
    <el-container style="height: 90%;width: 100%;position: absolute;">
      <el-aside width="240px" style="background-color: #8cc5ff;">
        <div class="headerImg">晓陌</div>
        <ul class="containerInfor">
          <li>部门：总经办</li>
          <li>职位：总经理</li>
        </ul>
        <el-menu class="el-menu-vertical-demo" background-color="#4791eb" text-color="#fff"
          active-text-color="#ffd04b" :unique-opened="true">
          <el-submenu index="1">
            <template slot="title">
              <span>投标管理</span>
            </template>
            <el-submenu index="1-1">
              <template slot="title">投标项目信息登记</template>
              <el-menu-item index="1-1-1" @click="$router.push('/tbxx')">投标项目信息登记</el-menu-item>
              <el-menu-item index="1-1-2" @click="$router.push('/tbxxlb')">项目信息列表</el-menu-item>
            </el-submenu>
            <el-submenu index="1-2">
              <template slot="title">招标文件购买</template>
              <el-menu-item index="1-2-1" @click="$router.push('/zbwj')">招标文件购买申请</el-menu-item>
              <el-menu-item index="1-2-2" @click="$router.push('/zbwjlb')">招标文件购买列表</el-menu-item>
            </el-submenu>
            <el-submenu index="1-3">
              <template slot="title">资格自审</template>
              <el-menu-item index="1-3-1" @click="$router.push('/zgzs')">资格自审</el-menu-item>
              <el-menu-item index="1-3-2" @click="$router.push('/zgzslb')">资格自审列表</el-menu-item>
              <el-menu-item index="1-3-3" @click="$router.push('/tbwjsc')">投标文件审查</el-menu-item>
              <el-menu-item index="1-3-4" @click="$router.push('/tbwjsclb')">投标文件审查列表</el-menu-item>
            </el-submenu>
            <el-submenu index="1-4">
              <template slot="title">项目勘察</template>
              <el-menu-item index="1-4-1" @click="$router.push('/xmkc')">项目勘察</el-menu-item>
              <el-menu-item index="1-4-2" @click="$router.push('/xmkclb')">项目勘察列表</el-menu-item>
            </el-submenu>
            <el-submenu index="1-5">
              <template slot="title">投标保证金申请</template>
              <el-menu-item index="1-5-1" @click="$router.push('/tbbzjsq')">投标保证金申请</el-menu-item>
              <el-menu-item index="1-5-2" @click="$router.push('/tbbzjsqlb')">投标保证金申请列表</el-menu-item>
            </el-submenu>
            <el-submenu index="1-6">
              <template slot="title">开标记录</template>
              <el-menu-item index="1-6-1" @click="$router.push('/kbdj')">开标登记</el-menu-item>
              <el-menu-item index="1-6-2" @click="$router.push('/jzdsqklb')">竞争对手情况列表</el-menu-item>
              <el-menu-item index="1-6-3" @click="$router.push('/zbjgdj')">中标结果登记</el-menu-item>
              <el-menu-item index="1-6-4" @click="$router.push('/zbjgdjlb')">中标结果登记列表</el-menu-item>
            </el-submenu>
            <el-submenu index="1-7">
              <template slot="title">项目业务费申请</template>
              <el-menu-item index="1-7-1" @click="$router.push('/xmywfsq')">项目业务费申请</el-menu-item>
              <el-menu-item index="1-7-2" @click="$router.push('/xmywfsqlb')">项目业务费申请列表</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <span>招标管理</span>
            </template>
            <el-submenu index="2-1">
              <template slot="title">招标计划</template>
              <el-menu-item index="2-1-1">大型物资招标采购计划</el-menu-item>
              <el-menu-item index="2-1-2">大型物资招标采购计划列表</el-menu-item>
              <el-menu-item index="2-1-3">分包招标采购计划</el-menu-item>
              <el-menu-item index="2-1-4">分包招标采购计划列表</el-menu-item>
            </el-submenu>
            <el-submenu index="2-2">
              <template slot="title">招标对比</template>
              <el-menu-item index="2-2-1">招标报价对比</el-menu-item>
              <el-menu-item index="2-2-2">招标报价对比列表</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <span>立项信息</span>
            </template>
            <el-submenu index="3-1">
              <template slot="title">立项信息</template>
              <el-menu-item index="3-1-1">立项信息登记</el-menu-item>
              <el-menu-item index="3-1-2">立项项目列表</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <span>劳务管理</span>
            </template>
            <el-submenu index="4-1">
              <template slot="title">劳务合同</template>
              <el-menu-item index="4-1-1">劳务合同</el-menu-item>
              <el-menu-item index="4-1-2">劳务合同列表</el-menu-item>
            </el-submenu>
            <el-submenu index="4-2">
              <template slot="title">进度款申报</template>
              <el-menu-item index="4-2-1">进度款申报</el-menu-item>
              <el-menu-item index="4-2-2">进度款申报列表</el-menu-item>
            </el-submenu>
            <el-submenu index="4-3">
              <template slot="title">完工结算</template>
              <el-menu-item index="4-3-1">完工结算</el-menu-item>
              <el-menu-item index="4-3-2">完工结算列表</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <span>材料管理</span>
            </template>
            <el-submenu index="5-1">
              <template slot="title">材料计划</template>
              <el-menu-item index="5-1-1" @click="$router.push('/clzjh')">材料总计划</el-menu-item>
              <el-menu-item index="5-1-2" >材料总计划列表</el-menu-item>
              <el-menu-item index="5-1-3" @click="$router.push('/clxqjh')">材料需用计划</el-menu-item>
              <el-menu-item index="5-1-4">材料需用计划列表</el-menu-item>
            </el-submenu>
            <el-submenu index="5-2">
              <template slot="title">材料合同</template>
              <el-menu-item index="5-2-1">材料合同</el-menu-item>
              <el-menu-item index="5-2-2">材料合同列表</el-menu-item>
            </el-submenu>
            <el-submenu index="5-3">
              <template slot="title">材料入库</template>
              <el-menu-item index="5-3-1">材料入库</el-menu-item>
              <el-menu-item index="5-3-2">材料入库列表</el-menu-item>
            </el-submenu>
            <el-submenu index="5-4">
              <template slot="title">材料出库</template>
              <el-menu-item index="5-4-1">材料出库</el-menu-item>
              <el-menu-item index="5-4-2">材料出库列表</el-menu-item>
            </el-submenu>
            <el-submenu index="5-5">
              <template slot="title">材料结算</template>
              <el-menu-item index="5-5-1">材料结算</el-menu-item>
              <el-menu-item index="5-5-2">材料结算列表</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <span>设备管理</span>
            </template>
            <el-submenu index="6-1">
              <template slot="title">设备领用</template>
              <el-menu-item index="6-1-1">设备领用申请</el-menu-item>
              <el-menu-item index="6-1-2">设备领用列表</el-menu-item>
            </el-submenu>
            <el-submenu index="6-2">
              <template slot="title">设备维修</template>
              <el-menu-item index="6-2-1">设备维修申请</el-menu-item>
              <el-menu-item index="6-2-2">设备维修列表</el-menu-item>
            </el-submenu>
            <el-submenu index="6-3">
              <template slot="title">设备报废</template>
              <el-menu-item index="6-3-1">设备报废申请</el-menu-item>
              <el-menu-item index="6-3-2">设备报废列表</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">
              <span>成本管理</span>
            </template>
            <el-submenu index="7-1">
              <template slot="title">项目总成本统计表</template>
              <el-menu-item index="7-1-1">项目总成本统计表</el-menu-item>
            </el-submenu>
            <el-submenu index="7-2">
              <template slot="title">项目利润表</template>
              <el-menu-item index="7-2-1">项目利润表</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
</script>
