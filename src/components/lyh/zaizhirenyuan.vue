<template>
<div>
    <div>
      <el-row :gutter="10">
        <el-col :span="2">
          <router-link to="/grda">
          <el-button :gutter="0" type="primary" plain >新增</el-button>
          </router-link>
        </el-col>
        <el-col :span="5">
          <el-input placeholder="请输入姓名" v-model="search.userName" clearable>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-input placeholder="请输入部门名称" v-model="search.department.departmentName"></el-input>
        </el-col>
        <el-col :span="4">
          <el-input placeholder="请输入岗位名称" v-model="search.tPmPosition.positionName">
          </el-input>
        </el-col>
        <el-col :span="4"> <el-button type="primary" icon="el-icon-search" @click="likeMgr(currPage,pageSize,search)"></el-button></el-col>
      </el-row>
    </div>
    <div>
      <template>
        <el-table :data="tableData" border style="width: 100%" >
          <el-table-column prop="department.departmentName" label="所在部门" width="90px"></el-table-column>
          <el-table-column prop="userName" label="姓名" ></el-table-column>
          <el-table-column prop="userJobNumber" label="工号" width="220px"></el-table-column>
          <el-table-column prop="userNumber" label="编号" ></el-table-column>
          <el-table-column prop="userSex" label="性别" width="60px"></el-table-column>
          <el-table-column prop="userBirthday" label="出生日期" ></el-table-column>
          <el-table-column prop="userState" label="人员分类" width="100px">
            <template slot-scope="scope">
              <template v-if="scope.row.userState=='0'">
                在职人员
              </template>
              <template v-if="scope.row.userState=='1'">
                离职人员
              </template>
            </template>
          </el-table-column>

          <el-table-column label="岗位" prop="tPmPosition.positionName"></el-table-column>

          <el-table-column label="入职时间" prop="userIntime"></el-table-column>
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
              <el-button type="primary">转正申请</el-button>
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
  name: "zaizhirenyuan",
  data() {
    return {

      tableData:[],
      totalSize: 0,//总记录数
      pageSize: 5,//页大小
      currPage: 1,//当前页码

    search:{
      userName:'',
      department:{
        departmentName:'',
      },
      tPmPosition:{
        positionName:'',
      }
    },


      /* multipleSelection: [], */


    }},
  methods: {

    initData(page, size) {//当前页，页大小
      this.$axios.get("http://localhost:7777/tpm/find-user", {params: {pageNum: page, size: size}})
        .then((v) => {
          this.tableData = v.data.content.rows;
          this.totalSize = v.data.content.total;

        })
    },

    likeMgr(page, size, search) {//当前页，页大小
      this.$axios.get("http://localhost:7777/tpm/find-user2", {
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
.t1{
  margin-left: 400px;
}
</style>
