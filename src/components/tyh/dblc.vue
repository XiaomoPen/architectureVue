<template>
  <div>
    <div>
      <el-row :gutter="10">
        <el-col :span="5">
          <el-input placeholder="请输入提交人" clearable>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
      </el-row>
    </div>
    <div>
      <template>
        <el-table :data="tableList.content" border style="width: 100%" >
          <el-table-column prop="myapplyNumber" label="流程编号" width=""></el-table-column>
          <el-table-column prop="myapplyName" label="流程名称" width=""></el-table-column>
          <el-table-column prop="" label="发起部门"width=""></el-table-column>
          <el-table-column prop="tPmUser.userName" label="发起人" width=""></el-table-column>
          <el-table-column prop="tPsApply.applyDate" label="发起日期" width=""></el-table-column>
          <el-table-column prop="myapplyUrge" label="催办"></el-table-column>
          <el-table-column prop="myapplyState" label="状态" width="">
            <template slot-scope="scope">
              <span v-if="scope.row.myapplyState===0">待审批</span>
              <span v-if="scope.row.myapplyState===1">通过</span>
              <span v-if="scope.row.myapplyState===2">不通过</span>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="150">
            <template slot-scope="scope">
              <el-button type="text" @click="tg(1,scope.row.myapplyNumber)" size="small">通过</el-button>
              <el-button type="text" @click="tg(2,scope.row.myapplyNumber)" size="small">不通过</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>
  </div>
</template>

<script>
  export default {

    name: 'dblc',
    data() {
      return {
        tableList:[],
      }
    },
    methods: {
      selmyapp(){
        this.$axios.get("http://localhost:7777/shenpi/selmyapp2")
          .then((v) => {
            this.tableList = v.data
            console.log(this.tableList)
          }).catch()
      },
      tg(a,b){
        this.$axios.get("http://localhost:7777/shenpi/updateapp",{params: {id:b,jg:a}})
          .then((v) => {
            alert("审批成功")
            this.selmyapp()
          }).catch()
      }
    },
    created() {
      this.selmyapp();
    }

  }
</script>

<style>
</style>
