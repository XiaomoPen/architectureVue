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

  .headerImg {
    width: 88px;
    height: 88px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #fcb243;
    font-size: 32px;
    border-radius: 50%;
    margin-top: 20px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }
  .containerInfor>li{
    width: 100%;
    text-align: center;
    margin: 6px 0;
    color: #DCDFE6;
    font-size: 14px;
  }
</style>
<template>
  <div class="main">
    <el-container style="width: 100%;height: 100%;">
      <el-header height="68px" style="background-color: #409EFF;">
        <ul class="headerUl">
          <li>项目管理</li>
          <li>个人</li>
          <li>人事</li>
          <li>客户</li>
        </ul>
      </el-header>
      <el-container>
        <el-aside width="200px" style="background-color: #8cc5ff;">
          <div class="headerImg">晓陌</div>
          <ul class="containerInfor">
            <li>部门：总经办</li>
            <li>职位：总经理</li>
          </ul>
          <el-menu class="el-menu-vertical-demo" @open="handleOpen" background-color="#4791eb" text-color="#fff"
            active-text-color="#ffd04b" @:unique-opened="true">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-star-on" style="color: white"></i>
                <span>首页</span>
              </template>
              <el-menu-item index="1-2">员工首页展示</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-s-check" style="color: white"></i>
                <span>组织管理</span>
              </template>
              <!-- 二级菜单 -->
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
              <el-menu-item index="2-2">职位管理</el-menu-item>
              <el-menu-item index="2-5">操作日志</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
</script>
