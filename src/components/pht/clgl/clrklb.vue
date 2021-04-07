<style>
  .el-row {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
<template>
  <div v-loading="loading">
    <div>
      <el-row :gutter="10">
        <el-col :span="2">
          <el-button :gutter="0" type="primary" plain @click="$router.push('/clrk')">新增</el-button>
        </el-col>
        <el-col :span="5">
          <el-input placeholder="请输入合同名称或录入人名称" clearable v-model="searchData">
            <el-button slot="append" icon="el-icon-search" @click="search()"></el-button>
          </el-input>
        </el-col>
      </el-row>
    </div>
    <div>
      <template>
        <el-table border style="width: 100%" :data="tableDate">
          <el-table-column prop="clcrkNumber" label="材料入库编号"></el-table-column>
          <el-table-column prop="clcrkName" label="材料入库主题"></el-table-column>
          <el-table-column prop="lxxxdjXmmc" label="所属项目"></el-table-column>
          <el-table-column prop="gysMc" label="供应商"></el-table-column>
          <el-table-column prop="clcrkTime" label="入库日期"></el-table-column>
          <el-table-column prop="clcrkApproval" label="审批流程"></el-table-column>
          <el-table-column fixed="right" label="操作">
            <template slot-scope="scope">
              <el-button type="text" size="small" v-if="scope.row.clcrkApproval=='未提交'" @click="submit(scope)">发起审批
              </el-button>
              <el-button type="text" size="small" v-if="scope.row.clcrkApproval=='未审批'" @click="sure(scope)">同意
              </el-button>
              <el-button type="text" size="small" v-if="scope.row.clcrkApproval=='未审批'" @click="nosure(scope)">不同意
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>

      <!-- 分页区域 -->
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
        :page-sizes="[10]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {

    name: 'test1',
    data() {
      return {
        //当前页码
        currentPage: 1,
        //总记录数
        total: 20,
        //每页显示记录
        pagesize: 10,
        scyh: '', //模糊搜索员工
        tableDate: [],
        loading: true,
        searchData: ""
      }
    },
    methods: {
      //搜索
      search() {
        if (this.searchData.length == 0) {
          this.$message({
            showClose: true,
            message: '请输入入库主题或项目名称',
            type: 'warning'
          });
          return;
        }
        this.loading = true;
        this.$axios.get("/clcrl/getClcrtSearch/" + this.searchData).then(v => {
          this.loading = false;
          if (v.data.state == 200) {
            this.tableDate = JSON.parse(v.data.content);
            for (var i = 0; i < this.tableDate.length; i++) {
              var n = this.tableDate[i].clcrkApproval;
              switch (n) {
                case 0:
                  this.tableDate[i].clcrkApproval = "未提交";
                  break;
                case 1:
                  this.tableDate[i].clcrkApproval = "未审批";
                  break;
                case 2:
                  this.tableDate[i].clcrkApproval = "审批通过";
                  break;
                case 3:
                  this.tableDate[i].clcrkApproval = "审批未通过";
                  break;
              }
            }
          } else {
            this.$message({
              showClose: true,
              message: '获取数据失败',
              type: 'warning'
            });
          }
        });
      },
      //提交审批
      submit(scope) {
        this.loading = true;
        this.$axios.post("/clcrl/upClcrt/1/" + scope.row.clcrkNumber).then(v => {
          this.loading = false;
          if (v.data.state == 200) {
            var index = scope.$index;
            this.tableDate[index].clcrkApproval = '未审批';
          } else {
            this.$message({
              showClose: true,
              message: '提交审批失败',
              type: 'warning'
            });
          }
        })
      },
      //同意审批
      sure(scope) {
        this.loading = true;
        this.$axios.post("/clcrl/upClcrt/2/" + scope.row.clcrkNumber).then(v => {
          this.loading = false;
          if (v.data.state == 200) {
            var index = scope.$index;
            this.tableDate[index].clcrkApproval = '未审批';
          } else {
            this.$message({
              showClose: true,
              message: '提交审批失败',
              type: 'warning'
            });
          }
        })
      },
      //不同意审批
      nosure(scope) {
        this.loading = true;
        this.$axios.post("/clcrl/upClcrt/3/" + scope.row.clcrkNumber).then(v => {
          this.loading = false;
          if (v.data.state == 200) {
            var index = scope.$index;
            this.tableDate[index].clcrkApproval = '未审批';
          } else {
            this.$message({
              showClose: true,
              message: '提交审批失败',
              type: 'warning'
            });
          }
        })
      },
      handleClick(row) {
        console.log(row);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        /* this.pagesize = val;
        this.mhsc(this.currentPage); */
      },
      handleCurrentChange(val) {
        this.$axios.get("/clcrl/getClcrt/" + val).then(v => {
          this.loading = false;
          if (v.data.state == 200) {
            this.tableDate = JSON.parse(v.data.content);
            for (var i = 0; i < this.tableDate.length; i++) {
              var n = this.tableDate[i].clcrkApproval;
              switch (n) {
                case 0:
                  this.tableDate[i].clcrkApproval = "未提交";
                  break;
                case 1:
                  this.tableDate[i].clcrkApproval = "未审批";
                  break;
                case 2:
                  this.tableDate[i].clcrkApproval = "审批通过";
                  break;
                case 3:
                  this.tableDate[i].clcrkApproval = "审批未通过";
                  break;
              }
            }
          } else {
            this.$message({
              showClose: true,
              message: '获取数据失败',
              type: 'warning'
            });
          }
        });
      },
    },
    created() {
      this.$axios.get("/clcrl/getClcrtSum").then(v => {
        if (v.data.state == 200) {
          this.total = parseInt(v.data.content);
        }
      });
      this.$axios.get("/clcrl/getClcrt/1").then(v => {
        this.loading = false;
        if (v.data.state == 200) {
          this.tableDate = JSON.parse(v.data.content);
          for (var i = 0; i < this.tableDate.length; i++) {
            var n = this.tableDate[i].clcrkApproval;
            switch (n) {
              case 0:
                this.tableDate[i].clcrkApproval = "未提交";
                break;
              case 1:
                this.tableDate[i].clcrkApproval = "未审批";
                break;
              case 2:
                this.tableDate[i].clcrkApproval = "审批通过";
                break;
              case 3:
                this.tableDate[i].clcrkApproval = "审批未通过";
                break;
            }
          }
        } else {
          this.$message({
            showClose: true,
            message: '获取数据失败',
            type: 'warning'
          });
        }
      });
    }

  }
</script>
