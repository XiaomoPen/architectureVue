<style scoped="scoped">
</style>


<template>
  <div>
    <el-container style="height: 90%;width: 100%;position: absolute;">
      <el-aside width="240px" style="background-color: #f6f8fa;">
        <div class="headerImg">晓陌</div>
        <ul class="containerInfor">
          <li>部门：总经办</li>
          <li>职位：总经理</li>
        </ul>
        <el-menu class="el-menu-vertical-demo" active-text-color="#409EFF"
          :unique-opened="true" background-color="#f6f8fa">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location-information"></i>
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
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location-information"></i>
              <span>材料管理</span>
            </template>
            <el-submenu index="5-1">
              <template slot="title">材料计划</template>
              <el-menu-item index="5-1-1" @click="$router.push('/clzjh')">材料总计划</el-menu-item>
              <el-menu-item index="5-1-2" @click="$router.push('/clzjhlb')">材料总计划列表</el-menu-item>
              <el-menu-item index="5-1-3" @click="$router.push('/clxqjh')">材料需用计划</el-menu-item>
              <el-menu-item index="5-1-4" @click="$router.push('/clxqjhlb')">材料需用计划列表</el-menu-item>
            </el-submenu>
            <el-submenu index="5-2">
              <template slot="title">材料合同</template>
              <el-menu-item index="5-2-1" @click="$router.push('/clht')">材料合同</el-menu-item>
              <el-menu-item index="5-2-2" @click="$router.push('/clhtlb')">材料合同列表</el-menu-item>
            </el-submenu>
            <el-submenu index="5-3">
              <template slot="title">材料入库</template>
              <el-menu-item index="5-3-1" @click="$router.push('/clrk')">材料入库</el-menu-item>
              <el-menu-item index="5-3-2" @click="$router.push('/clrklb')">材料入库列表</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-location-information"></i>
              <span>设备管理</span>
            </template>
            <el-submenu index="6-1">
              <template slot="title">设备领用</template>
              <el-menu-item index="6-1-1" @click="$router.push('/equipment/requisition')">设备领用申请</el-menu-item>
              <el-menu-item index="6-1-2" @click="$router.push('/equipment/requisitionList')">设备领用列表</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main style="background-color: white;">
        <router-view style="border: 1px solid #ebecf0;padding: 18px;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)"></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
</script>
