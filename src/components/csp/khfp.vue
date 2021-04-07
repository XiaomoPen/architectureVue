<template>
  <div>
    <div>
      <el-row>
        <el-button :gutter="0" type="primary" plain>新增</el-button>
        <el-button :gutter="0" type="primary" plain>修改</el-button>
        <el-button :gutter="0" type="primary" plain>删除</el-button>
        <el-button :gutter="0" type="primary" plain>过滤</el-button>
        <el-button :gutter="0" type="primary" plain>还原</el-button>
        <el-button :gutter="0" type="primary" plain>打印</el-button>
        <el-button :gutter="0" type="primary" plain>导入</el-button>
        <el-button :gutter="0" type="primary" plain>导出</el-button>
      </el-row>
    </div>
    <div>
      <el-row :gutter="10">
        <el-col :span="5">
          <el-input placeholder="请输入客户名称或负责人名称" v-model="scyh" clearable>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
        </el-col>
      </el-row>
    </div>
    <div>
      <el-table border max-height="700" stripe :data="khfp"   >
        <!-- <el-table-column type="selection" width="60"> ></el-table-column> --><!-- ref="multipleTable" @selection-change="handleSelectionChange" -->
        <el-table-column prop="khfp_bh" label="分配编号"></el-table-column>
        <el-table-column prop="kh_bh" label="客户姓名"></el-table-column>
        <el-table-column prop="user_mc" label="客户编号"></el-table-column>
        <el-table-column prop="khxx_khlx" label="客户类型"></el-table-column>
        <el-table-column prop="khxx_khhy" label="客户行业"></el-table-column>
        <el-table-column prop="user_mc" label="负责人名称"></el-table-column>
        <el-table-column prop="cz" label="操作" width="200px" fixed="right">
          <el-button type="primary" icon="el-icon-edit" size="mini" plain @click="tz(scope.row)">编辑</el-button>
          <el-button  type="danger" icon="el-icon-delete" size="mini" plain>删除</el-button>
        </el-table-column>
        <!-- <el-table-column prop="ygjcxxSj" label="手机号"></el-table-column> -->

      </el-table>
      <!-- 分页区域 -->
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
        :page-sizes="[5,10,15,20]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper"
        :total="total"></el-pagination>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  import qs from 'qs'

  export default {

    name: 'khfp',
    data() {
      return {
        //当前页码
        currentPage: 1,
        //总记录数
        total: 20,
        //每页显示记录
        pagesize: 20,

        scyh: '', //模糊搜索员工
        value1: null, //模糊搜索时间
        khfp: [{
            khfp_bh: '分配编号11',
            kh_bh: '客户编号11',
            user_mc: '客户名称11',
            khxx_khlx: '客户类型11',
            khxx_khhy: '客户行业11',
            user_mc: '业务员名称11',
          },
          {
            khfp_bh: '分配编号22',
            kh_bh: '客户编号22',
            user_mc: '客户名称22',
            khxx_khlx: '客户类型22',
            khxx_khhy: '客户行业22',
            user_mc: '业务员名称22',
          }
        ],
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
