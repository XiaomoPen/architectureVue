<style scoped="scoped">
</style>

<template>
  <div>
    <el-container  style="height: 90%;width: 100%;position: absolute;">
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
              <span>人事模块</span>
            </template>
            <el-submenu index="1-1">
              <template slot="title">人力档案</template>
              <el-menu-item index="1-1-1" @click="$router.push('/grda')">人员档案</el-menu-item>
              <el-menu-item index="1-1-2" @click="$router.push('/zaizhirenyuan')">在职人员列表</el-menu-item>
            </el-submenu>
            <el-submenu index="1-2">
              <template slot="title">劳动合同列表</template>
              <el-menu-item index="1-2-1" @click="$router.push('/contract')">劳动合同列表</el-menu-item>
            </el-submenu>
            <el-submenu index="1-3">
              <template slot="title">转正管理</template>
              <el-menu-item index="1-3-1" @click="$router.push('/positive')">转正管理</el-menu-item>
            </el-submenu>
            <el-submenu index="1-4">
              <template slot="title">离职管理</template>
              <el-menu-item index="1-4-1" @click="$router.push('/departure')">离职管理</el-menu-item>
            </el-submenu>
            <el-submenu index="1-5">
              <template slot="title">人事调动</template>
              <el-menu-item index="1-5-1" @click="$router.push('/mobilize')">人事调动</el-menu-item>
            </el-submenu>
            <el-submenu index="1-6">
              <template slot="title">证件管理</template>
              <el-menu-item index="1-6-1" @click="$router.push('/card')">证件管理</el-menu-item>
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
