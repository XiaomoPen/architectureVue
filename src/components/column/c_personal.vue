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
      <el-main>

         <router-view></router-view>
      </el-main>
    </el-container>



<!--    <el-dialog :visible.sync="diformVisibleT" width="40%">-->
<!--      <el-form :ref="actFrom" :model="actFrom" label-position="left" label-width="100px" style="width: 400px; margin-left:80px;">-->
<!--        <el-form-item label="退款理由" prop="type">-->
<!--          <el-select v-model="abc" placeholder="请选择" @change="wwe()">-->
<!--            <el-option-->
<!--              v-for="item in options"-->
<!--              :key="item.value"-->
<!--              :label="item.label"-->
<!--              :value="item.value">-->
<!--            </el-option>-->
<!--          </el-select>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="应退款" prop="type">-->
<!--          <el-input v-model="biu" :disabled="true"></el-input>-->
<!--        </el-form-item>-->
<!--      </el-form>-->
<!--      <div slot="footer" class="dialog-footer">-->
<!--        &lt;!&ndash;取消按钮&ndash;&gt;-->
<!--        <el-button @click="formVisibleT = false">取消</el-button>-->
<!--        &lt;!&ndash;确定按钮&ndash;&gt;-->
<!--        <el-button @click="formVisibleT = false,tdzs()" type="primary" >确定</el-button>-->
<!--      </div>-->
<!--    </el-dialog>-->
  </div>


</template>

<script>
  export default {
    data: function () {

    },
    methods: {},
    created() {
      this.$root.myEvent.$on("pushAddress", function (msg){
        this.address = msg;
        console.log(this.address);
      });
    }
  }
</script>
