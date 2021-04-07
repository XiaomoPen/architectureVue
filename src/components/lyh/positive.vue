<template>


  <div>
    <div>
      <el-row :gutter="10">
        <el-col :span="2">
          <router-link to="/addpositive">
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

      <template>
        <el-table :data="tableData" border style="width: 100%" >
          <el-table-column prop="positiveSerial" label="单据编号" width="200px"></el-table-column>
          <el-table-column prop="tPmUser.department.departmentName" label="部门" ></el-table-column>
          <el-table-column prop="tPmUser.userName" label="姓名" width="220px"></el-table-column>
          <el-table-column prop="positiveTime" label="申请时间" ></el-table-column>
          <el-table-column prop="tPmUser.userIntime" label="入职时间" ></el-table-column>
          <el-table-column prop="positiveSqpositive" label="申请转正时间"></el-table-column>
          <el-table-column prop="positiveState" label="流程状态" width="120px"></el-table-column>



          <!--          <el-table-column prop="tbxxYjhtje" label="预计合同金额" width="120"></el-table-column>-->
          <!--          <el-table-column prop="tbxxLxr" label="联系人" width="120"></el-table-column>-->
          <!--          <el-table-column prop="tbxxLxdh" label="联系电话" width="150"></el-table-column>-->
          <!--          <el-table-column prop="tbxxSpjg" label="流程状态" width="120">-->
          <!--            <template slot-scope="scope">-->
          <!--              <span v-if="scope.row.tbxxSpjg==0">待审批</span>-->
          <!--              <span v-if="scope.row.tbxxSpjg==1">通过</span>-->
          <!--              <span v-if="scope.row.tbxxSpjg==2">不通过</span>-->
          <!--            </template>-->
          <!--          </el-table-column>-->
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
  name: "positive",
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
      this.$axios.get("http://localhost:7777/tpm/find-positive", {params: {pageNum: page, size: size}})
        .then((v) => {
          this.tableData = v.data.content.rows;
          this.totalSize = v.data.content.total;

        })
    },

    likeMgr(page, size, search) {//当前页，页大小
      this.$axios.get("http://localhost:7777/find-positive2", {
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



    /* toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    } */

  },
  created() {
    this.initData(this.currPage,this.pageSize)
  }
}
</script>

<style scoped>

</style>
