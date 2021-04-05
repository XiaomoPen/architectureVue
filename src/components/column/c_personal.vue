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
              <span>个人模块</span>
            </template>
            <el-submenu index="1-1">
              <template slot="title">流程发起</template>
              <el-menu-item index="1-1-1">请假申请</el-menu-item>
              <el-menu-item index="1-1-2">加班申请</el-menu-item>
              <el-menu-item index="1-1-3">出差申请</el-menu-item>
            </el-submenu>
            <el-submenu index="1-2">
              <template slot="title">我的申请</template>
              <el-menu-item index="1-2-1">我的申请</el-menu-item>
            </el-submenu>
            <el-submenu index="1-3">
              <template slot="title">待办流程</template>
              <el-menu-item index="1-3-1">待办流程</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        ss
        <!-- <router-view></router-view> -->
      </el-main>
    </el-container>
  </div>
</template>

<script>
</script>
