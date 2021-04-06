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
              <span>客户管理</span>
            </template>
            <el-submenu index="1-1">
              <template slot="title">客户信息</template>
              <el-menu-item index="1-1-1" @click="$router.push('/khxxf')">客户信息</el-menu-item>
              <el-menu-item index="1-1-2" @click="$router.push('/khxx')" >客户信息列表</el-menu-item>
            </el-submenu>
            <el-submenu index="1-2">
              <template slot="title">我的客户</template>
              <el-menu-item index="1-2-1"  @click="$router.push('/wdkh')" >我的客户</el-menu-item>
            </el-submenu>
            <el-submenu index="1-3">
              <template slot="title">客户分配</template>
              <el-menu-item index="1-3-1" @click="$router.push('/khfpf')" >客户分配</el-menu-item>
              <el-menu-item index="1-3-2" @click="$router.push('/khfp')" >客户分配列表</el-menu-item>
            </el-submenu>
            <!-- <el-submenu index="1-4">
              <template slot="title">项目勘察</template>
              <el-menu-item index="1-4-1">项目勘察</el-menu-item>
              <el-menu-item index="1-4-2">项目勘察列表</el-menu-item>
            </el-submenu> -->
            <el-submenu index="1-5">
              <template slot="title">客户联系人</template>
              <el-menu-item index="1-5-1" @click="$router.push('/khlxrf')" >客户联系人</el-menu-item>
              <el-menu-item index="1-5-2" @click="$router.push('/khlxr')" >客户联系人列表</el-menu-item>
            </el-submenu>
            <el-submenu index="1-6">
              <template slot="title">联系记录</template>
              <el-menu-item index="1-6-1" @click="$router.push('/lxjlf')" >联系记录</el-menu-item>
              <el-menu-item index="1-6-2" @click="$router.push('/lxjl')" >联系记录列表</el-menu-item>
            </el-submenu>
            <el-submenu index="1-7">
              <template slot="title">合同信息</template>
              <el-menu-item index="1-7-1" @click="$router.push('/htxxf')" >合同信息</el-menu-item>
              <el-menu-item index="1-7-2" @click="$router.push('/htxx')" >合同信息列表</el-menu-item>
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
