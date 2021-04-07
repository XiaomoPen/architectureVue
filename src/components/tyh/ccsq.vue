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

      <h2 style="text-align: center;">出差申请</h2>

      <h3 style="text-align: left;">基本信息</h3>

      <el-row>
        <el-col :span="8">
          <el-form-item label="请假人:" prop="" clearable>
            <el-input placeholder="请输入" class="filter-item" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="部门:" prop="" clearable>
            <el-input></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="职位:" prop="" clearable>
            <el-input></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="出差主题:" prop="">
            <el-input v-model="qjFrom.applyTheme"></el-input>
          </el-form-item>
        </el-col>
        <el-form-item label="申请日期" prop="type">
          <el-col :span="8">
            <el-date-picker v-model="qjFrom.applyDatetime" type="date" placeholder="选择日期"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="开始日期" prop="type">
          <el-col :span="8">
            <el-date-picker v-model="qjFrom.applyDate" type="date" placeholder="选择日期"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="结束日期" prop="type">
          <el-col :span="8">
            <el-date-picker v-model="qjFrom.applyTime" type="date" placeholder="选择日期"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-col :span="8">
          <el-form-item label="请假天数:" prop="">
            <el-input v-model="qjFrom.applyNumber">
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <el-form-item label="出差事由:" prop="">
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
    name: 'ccsq',
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
        }
      }
    },
    methods: {
      addapp(){
        console.log(this.qjFrom)
        this.$axios.post("http://localhost:7777/shenqing/addapplycc",this.qjFrom)
          .then((v) => {
          }).catch()
      },
      created() {

      }
    }
  }

</script>
