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
          <el-button :gutter="0" type="primary" plain @click="$router.push('/clht')">新增</el-button>
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
         <el-table-column prop="contractNumber" label="材料合同编号"></el-table-column>
         <el-table-column prop="contractName" label="材料合同名称"></el-table-column>
         <el-table-column prop="contractMoney" label="合同金额"></el-table-column>
         <el-table-column prop="lxxxdjXmmc" label="所属项目"></el-table-column>
         <el-table-column prop="gysMc" label="供应商"></el-table-column>
         <el-table-column prop="contractAwardTime" label="签约日期"></el-table-column>
         <el-table-column prop="userName" label="录入人"></el-table-column>
         <el-table-column prop="contractApproval" label="流程状态"></el-table-column>
          <el-table-column fixed="right" label="操作">
            <template slot-scope="scope">
              <el-button type="text" size="small" v-if="scope.row.contractApproval=='未提交'" @click="submit(scope)">发起审批</el-button>
              <el-button type="text" size="small" v-if="scope.row.contractApproval=='未审批'" @click="sure(scope)">同意</el-button>
              <el-button type="text" size="small" v-if="scope.row.contractApproval=='未审批'" @click="nosure(scope)">不同意</el-button>
              <el-button type="text" size="small" v-if="scope.row.contractApproval=='未提交'||scope.row.contractApproval=='审批未通过'" @click="deletes(scope)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>

      <!-- 分页区域 -->
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
        :page-sizes="[10]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper"
        :total="total"></el-pagination>
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
        tableDate:[],
        loading:true,
        searchData:""
      }
    },
    methods: {
      //搜索
      search(){
        if(this.searchData.length==0){
          this.$message({showClose: true, message: '请输入合同名称或录入人名称',type: 'warning'});
          return;
        }
        this.loading=true;
        this.$axios.get("/material/getMaterialContractSearch/"+this.searchData).then(v => {
          this.loading=false;
          if(v.data.state==200){
            this.tableDate=JSON.parse(v.data.content);
            for(var i=0;i<this.tableDate.length;i++){
              var n=this.tableDate[i].contractApproval;
              switch(n){
                case 0:this.tableDate[i].contractApproval="未提交";break;
                case 1:this.tableDate[i].contractApproval="未审批";break;
                case 2:this.tableDate[i].contractApproval="审批通过";break;
                case 3:this.tableDate[i].contractApproval="审批未通过";break;
              }
            }
          }else{
            this.$message({showClose: true, message: '获取数据失败',type: 'warning'});
          }
        })
      },
      //提交审批
      submit(scope){
        this.loading=true;
        this.$axios.post("/material/upMCapproval/"+scope.row.contractNumber).then(v => {
          this.loading=false;
          if(v.data.state==200){
              var index=scope.$index;
              this.tableDate[index].contractApproval='未审批';
          }else{
            this.$message({showClose: true, message: '提交审批失败',type: 'warning'});
          }
        })
      },
      //同意审批
      sure(scope){
        this.loading=true;
        this.$axios.post("/material/upMCapprovalSure/"+scope.row.contractNumber).then(v => {
          this.loading=false;
          if(v.data.state==200){
              var index=scope.$index;
              this.tableDate[index].contractApproval='审批通过';
          }else{
            this.$message({showClose: true, message: '提交审批失败',type: 'warning'});
          }
        })
      },
      //不同意审批
      nosure(scope){
        this.loading=true;
        this.$axios.post("/material/upMCapprovalnoSure/"+scope.row.contractNumber).then(v => {
          this.loading=false;
          if(v.data.state==200){
              var index=scope.$index;
              this.tableDate[index].contractApproval='审批不通过';
          }else{
            this.$message({showClose: true, message: '提交审批失败',type: 'warning'});
          }
        })
      },
      //删除
      deletes(scope){
        this.loading=true;
        this.$axios.post("/material/delMaterialContract/"+scope.row.contractNumber).then(v => {
          this.loading=false;
          if(v.data.state==200){
              var index=scope.$index;
              this.tableDate.splice(index,1);
          }else{
            this.$message({showClose: true, message: '删除合同失败',type: 'warning'});
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
        this.$axios.get("/material/getMaterialContract/"+val).then(v => {
          this.loading=false;
          if(v.data.state==200){
            this.tableDate=JSON.parse(v.data.content);
            for(var i=0;i<this.tableDate.length;i++){
              var n=this.tableDate[i].contractApproval;
              switch(n){
                case 0:this.tableDate[i].contractApproval="未提交";break;
                case 1:this.tableDate[i].contractApproval="未审批";break;
                case 2:this.tableDate[i].contractApproval="审批通过";break;
                case 3:this.tableDate[i].contractApproval="审批未通过";break;
              }
            }
          }else{
            this.$message({showClose: true, message: '获取数据失败',type: 'warning'});
          }
        });
      },
    },
    created() {
      this.$axios.get("/material/getMaterialContractSum").then(v => {
        if(v.data.state==200){
          this.total=parseInt(v.data.content);
        }
      });
      this.$axios.get("/material/getMaterialContract/1").then(v => {
        this.loading=false;
        if(v.data.state==200){
          this.tableDate=JSON.parse(v.data.content);
          for(var i=0;i<this.tableDate.length;i++){
            var n=this.tableDate[i].contractApproval;
            switch(n){
              case 0:this.tableDate[i].contractApproval="未提交";break;
              case 1:this.tableDate[i].contractApproval="未审批";break;
              case 2:this.tableDate[i].contractApproval="审批通过";break;
              case 3:this.tableDate[i].contractApproval="审批未通过";break;
            }
          }
          console.log(this.tableDate);
        }else{
          this.$message({showClose: true, message: '获取数据失败',type: 'warning'});
        }
      });
    }

  }
</script>
