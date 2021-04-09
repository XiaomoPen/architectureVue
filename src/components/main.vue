<style scoped="scoped">
  .main {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .headerUl {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: white;
  }

  .headerUl>li {
    margin: 0 16px;
    cursor: pointer;
  }
</style>
<template>
  <div class="main">
    <el-container style="width: 100%;height: 100%;position: absolute;">
      <el-header style="background-color: #24292e;width: 100%;height: 10%;position: relative;">
        <ul class="headerUl">
          <li @click="$router.push('/cProject')">项目管理</li>
          <li @click="$router.push('/cPersonal')">个人</li>
          <!-- <li @click="$router.push('/cMatters')">人事</li> -->
          <li>人事</li>
          <li @click="$router.push('/cCustomer')">客户</li>
        </ul>
      </el-header>
      <router-view></router-view>
    </el-container>
  </div>
</template>

<script>
 
</script>
