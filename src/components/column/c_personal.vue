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
              <span>个人模块</span>
            </template>
            <el-submenu index="1-1">
              <template slot="title">流程发起</template>
              <el-menu-item index="1-1-1" @click="$router.push('/qjsq')">请假申请</el-menu-item>
              <el-menu-item index="1-1-2" @click="$router.push('/jbsq')">加班申请</el-menu-item>
              <el-menu-item index="1-1-3" @click="$router.push('/ccsq')">出差申请</el-menu-item>
            </el-submenu>
            <el-submenu index="1-2">
              <template slot="title">我的申请</template>
              <el-menu-item index="1-2-1" @click="$router.push('/wdsq')">我的申请</el-menu-item>
            </el-submenu>
            <el-submenu index="1-3">
              <template slot="title">待办流程</template>
              <el-menu-item index="1-3-1" @click="$router.push('/dblc')">待办流程</el-menu-item>
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
