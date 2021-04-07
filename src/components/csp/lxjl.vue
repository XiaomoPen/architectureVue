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
          <el-date-picker v-model="value1" type="date" placeholder="选择联络时间" format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd">
          </el-date-picker>
        </el-col>
      </el-row>
    </div>
    <div>
      <el-table border max-height="700" stripe :data="lxjl">
        <!-- <el-table-column type="selection" width="60"> ></el-table-column> -->
        <!-- ref="multipleTable" @selection-change="handleSelectionChange" -->
        <el-table-column prop="khxxXm" label="客户姓名"></el-table-column>
        <el-table-column prop="lxjlSj" label="记录时间"></el-table-column>
        <el-table-column prop="lxjlFs" label="记录方式"></el-table-column>
        <el-table-column prop="lxjlXq" label="联系记录详情" width="480px"></el-table-column>
        <el-table-column prop="lxjlXcmb" label="下次联系目标"></el-table-column>
        <el-table-column prop="cz" label="操作" width="200px" fixed="right">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" size="mini" plain>编辑</el-button>
            <el-button type="danger" icon="el-icon-delete" size="mini" @click="sclxjl(scope.row)" plain>删除</el-button>
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

    name: 'lxjl',
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
        lxjl: [{
          lxjlBh: '',
          khxxXm: '',
          userNumber: '',
          lxjlJd: '',
          lxjlSj: '',
          lxjlFs: '',
          lxjlXq: '',
          lxjlXcsj: '',
          lxjlXcmb: '',
          userMc: '',
          khxxBh: '',
        }, ],
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
      queryAll() {
        this.$get("/lxjl/queryAll").then(v => {
          console.log(v.data);
          this.lxjl = v.data.content;
        });
      },
      //删除信息
      sclxjl: function(row) {
        /* alert(row.khxxBh) */
        this.$get("/lxjl/dellxjl/" + JSON.stringify(row.lxjlBh)).then(v => {
          console.log(v.data);
          this.lxjl = v.data.content;
          this.$message.success("修改成功!");
        });
      }
    },
    created: function() {
      this.queryAll();
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
