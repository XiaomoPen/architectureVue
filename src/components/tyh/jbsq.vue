<style scoped="scoped">

</style>
<template>
  <div>
    <el-form :inline="true" label-width="120px">
      <el-row>
        <el-col :span="24">
          <el-form-item>
            <el-button type="primary" @click="addapp">添加</el-button>
          </el-form-item>
        </el-col>
      </el-row>

      <h2 style="text-align: center;">加班申请</h2>

      <h3 style="text-align: left;">基本信息</h3>

      <el-row>
        <el-col :span="8">
          <el-form-item label="申请人" prop="title">
            <el-select @click="seluser" placeholder="请选择员工" :date="userList" v-model="qjFrom.tPmUser" value-key="userNumber" class="filter-item" margin-left="100px">
              <el-option :key="item.userNumber" v-for="item in userList"  :label="item.userName" :value="item"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-form-item label="开始时间" prop="type">
          <el-col :span="8">
            <el-date-picker v-model="qjFrom.applyDate" type="date" placeholder="选择日期"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="结束时间" prop="type">
          <el-col :span="8">
            <el-date-picker v-model="qjFrom.applyTime" type="date" placeholder="选择日期"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-col :span="8">
          <el-form-item label="加班时长:" prop="">
            <el-input v-model="qjFrom.applyNumber">
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <el-form-item label="备注:" prop="">
            <el-input type="textarea" v-model="qjFrom.applyReason" placeholder="请输入内容" rows="5" maxlength="500"
                      style="width: 1200px;" show-word-limit>
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'jbsq',
    data() {
      return {
        qjFrom:{
          applyNum:"",
          applyType:"",
          userNumber:"",
          applyDate:"",
          applyTime:"",
          applyNumber:"",
          applyReason:"",
          applyTheme:"",
          applyDatetime:"",
          tPmUser: {
            userNumber: '',
            userName: '',
          },
        },
        userList:[],
      }
    },
    methods: {
      addapp(){
        console.log(this.qjFrom)
        this.$axios.post("http://localhost:7777/shenqing/addapplyjb",this.qjFrom)
          .then((v) => {
            alert("新增成功")
            this.cleraFrom()
          }).catch()
      },
      cleraFrom() {
        this.qjFrom={
          applyNum:"",
          applyType:"",
          userNumber:"",
          applyDate:"",
          applyTime:"",
          applyNumber:"",
          applyReason:"",
          applyTheme:"",
          applyDatetime:"",
        }
      },
      seluser(){
        console.log(this.userList)
        this.$axios.get("http://localhost:7777/shenpi/seluser")
          .then((v) => {
            this.userList = v.data
          }).catch()
      },

    },
    created() {
      this.seluser()
    }
  }

</script>
