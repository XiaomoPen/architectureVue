<template>
  <div>
    <div>
      <el-row :gutter="10">
        <el-col :span="2">
          <router-link to="/addcard">
            <el-button :gutter="0" type="primary" plain >新增</el-button>
          </router-link>
        </el-col>
        <el-col :span="5">
          <el-input placeholder="请输入姓名" v-model="search.user.userName" clearable>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-input placeholder="请输入合同类型" v-model="search.contractLeix"></el-input>
        </el-col>
        <el-col :span="4"> <el-button type="primary" icon="el-icon-search" @click="likeMgr(currPage,pageSize,search)"></el-button></el-col>
      </el-row>
    </div>
    <div>
      证件管理
      <template>
        <el-table :data="tableData" border style="width: 100%" >
          <el-table-column prop="mobilizeSerial" label="单据编号" width="90px"></el-table-column>
          <el-table-column prop="tPmUser.userName" label="姓名" ></el-table-column>
          <el-table-column prop="mobilizeLeix" label="调动类型" width="220px"></el-table-column>
          <el-table-column prop="mobilizeTime" label="调动日期" ></el-table-column>
          <el-table-column prop="mobilizeDept" label="调动前部门" ></el-table-column>
          <el-table-column prop="mobilizeGw" label="调动前职位" ></el-table-column>
          <el-table-column prop="tPmUser.department.departmentName" label="调动后部门" ></el-table-column>
          <el-table-column prop="tPmUser.tPmPosition.positionName" label="调动后职位" ></el-table-column>
          <el-table-column prop="mobilizeState" label="状态" ></el-table-column>



          <el-table-column fixed="right" label="操作" width="150">
            <template slot-scope="scope">
              <router-link to="/addpositive">
                <el-button type="primary">转正申请</el-button>
              </router-link>
            </template>
          </el-table-column>
        </el-table>
      </template>
      <div class="t1">
        <!-- 分页区域 -->
        <el-pagination background :page-size="pageSize" :current-page.sync="currPage"
                       @current-change="pageChange"
                       layout="prev, pager, next,jumper" :total="totalSize">
        </el-pagination>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  data() {
    return {

      tableData:[],
      totalSize: 0,//总记录数
      pageSize: 5,//页大小
      currPage: 1,//当前页码

      search:{
        user:{
          userName:'',
        },
        contractLeix:'',
      },


      /* multipleSelection: [], */


    }},


  methods: {

    initData(page, size) {//当前页，页大小
      this.$axios.get("http://localhost:7777/tpm/find-card", {params: {pageNum: page, size: size}})
        .then((v) => {
          this.tableData = v.data.content.rows;
          this.totalSize = v.data.content.total;

        })
    },

    likeMgr(page, size, search) {//当前页，页大小
      this.$axios.get("http://localhost:7777/tpm/find-card2", {
        params: {
          pageNum: page,
          size: size,
          search: JSON.stringify(search)
        }
      })
        .then((v) => {
          this.tableData = v.data.content.rows;
          this.totalSize = v.data.content.total;

        })
    },

    pageChange(p){
      this.initData(p,this.pageSize)
    },


  },
  created() {
    this.initData(this.currPage,this.pageSize)
  }
}
</script>

<style scoped>

</style>
