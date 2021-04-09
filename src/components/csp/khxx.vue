<template>
  <div>
    <div>
      <el-row>
        <el-button :gutter="0" type="primary" @click="$router.push('/htxxf')" plain>新增</el-button>
        <!-- <el-button :gutter="0" type="primary" plain>修改</el-button>
        <el-button :gutter="0" type="primary" plain>删除</el-button>
        <el-button :gutter="0" type="primary" plain>过滤</el-button>
        <el-button :gutter="0" type="primary" plain>还原</el-button>
        <el-button :gutter="0" type="primary" plain>打印</el-button>
        <el-button :gutter="0" type="primary" plain>导入</el-button>
        <el-button :gutter="0" type="primary" plain>导出</el-button> -->
      </el-row>
    </div>
    <div>
      <el-row :gutter="10">
        <el-col :span="6">
          <el-input placeholder="请输入客户名称或负责人名称" v-model="khxxm" clearable>
            <el-button slot="append" icon="el-icon-search" @click="mhsc()"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-date-picker v-model="value1" type="date" placeholder="录入时间之前" format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd">
          </el-date-picker>
        </el-col>
      </el-row>
    </div>
    <div>
      <el-table border max-height="700" stripe :data="khxx">
        <!-- <el-table-column type="selection" width="60"> ></el-table-column> -->
        <!-- ref="multipleTable" @selection-change="handleSelectionChange" -->
        <el-table-column prop="khxxXm" label="客户名称"></el-table-column>
        <el-table-column prop="khxxKhlx" label="客户类型"></el-table-column>
        <el-table-column prop="khxxKhhy" label="客户行业"></el-table-column>
        <el-table-column prop="khxxKhly" label="客户来源"></el-table-column>
        <el-table-column prop="userMc" label="负责人名称"></el-table-column>
        <el-table-column prop="khxxLrsj" label="录入时间"></el-table-column>
        <el-table-column prop="cz" label="操作" width="200px" fixed="right">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" size="mini" plain>编辑</el-button>
            <el-button type="danger" icon="el-icon-delete" size="mini" @click="sckh(scope.row)" plain>删除</el-button>
          </template>
        </el-table-column>
        <!-- <el-table-column prop="ygjcxxSj" label="手机号"></el-table-column> -->
      </el-table>
      <!-- 分页区域 -->
      <!-- <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
        :page-sizes="[5,10,15,20]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper"
        :total="total"></el-pagination> -->
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  import qs from 'qs'

  export default {

    name: 'khxx',
    data() {
      return {
        //当前页码
        currentPage: 1,
        //总记录数
        total: 20,
        //每页显示记录
        pagesize: 20,
        khxxm: '', //模糊搜索
        value1: null, //模糊搜索时间
        user: [], //接受后台传来的员工表信息
        khxx: [{
          khxxBh: '',
          khxxXm: '',
          khxxKhlx: '',
          khxxKhhy: '',
          khxxKhly: '',
          khxxKhdj: '',
          khxxKhdh: '',
          khxxLrsj: '',
          userNumber: '',
          userMc: '',
        }],
        /* multipleSelection: [], */
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        /* this.pagesize = val;
        this.mhsc(this.currentPage); */
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        /* this.mhsc(val); */
      },
      //查询全部的客户信息，没绑定的
      queryNullAll() {
        this.$get("/khxx/queryNullAll").then(v => {
          console.log(v.data);
          this.khxx = v.data.content;
        });
      },
      /* //查询全部的员工id和姓名，用于选择负责人
      alluser:function(){
        this.$get("/khxx/queryUserId").then(v => {
          console.log(v.data);
          this.user = v.data.content;
        });
      }, */
      //模糊查询
      mhsc() {
        var sc = {
          khxxXm: this.khxxm,
          khxxLrsj: this.value1,
        };
        /* alert(sc.khxxXm)
        alert(sc.khxxLrsj) */
        /* alert(sc) */
        this.$get("/khxx/mhcxsj/" + JSON.stringify(sc)).then(v => {
          console.log(v.data);
          this.khxx = v.data.content;
        });
        /* this.$get("/khxx/querymhcx/"+JSON.stringify(this.khxxm)).then(v => {
          console.log(v.data);
          this.khxx = v.data.content;
        }); */
      },
      //删除信息
      sckh: function(row) {
        this.$confirm('确认删除？')
          .then(_ => {
            /* alert(row.khxxBh) */
            this.$get("/khxx/delKhxx/" + JSON.stringify(row.khxxBh)).then(v => {
              console.log(v.data);
              this.khxx = v.data.content;
              this.$message.success("修改成功!");
            });
          })
          .catch(_ => {});

      },
    },
    created: function() {
      this.queryNullAll();
    }
  }
</script>

<style>
  .el-row {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
