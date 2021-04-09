<style scoped="scoped">
</style>

<template>
  <div>
    <el-container  style="height: 90%;width: 100%;position: absolute;">
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
              <i class="el-icon-location-information" style="color: white;"></i>
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
      <el-main style="background-color: white;">
        <router-view style="border: 1px solid #ebecf0;padding: 18px;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)"></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
</script>
