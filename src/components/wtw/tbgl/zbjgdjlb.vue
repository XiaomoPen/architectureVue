<template>
  <div>
    <div>
      <el-row :gutter="10">
        <el-col :span="2">
          <el-button :gutter="0" type="primary" @click="$router.push('/zbjgdj')" plain>新增</el-button>
        </el-col>
        <el-col :span="5">
          <el-input placeholder="请输入客户名称或负责人名称" v-model="scyh" clearable>
            <el-button slot="append" icon="el-icon-search" @click="selects(scyh)"></el-button>
          </el-input>
        </el-col>

      </el-row>
    </div>
    <div>
      <template>
        <el-table :data="ruleForm" border style="width: 100%">
          <el-table-column prop="zbjgdjXmmc" label="项目名称" width="320"></el-table-column>
          <el-table-column prop="zbjgdjXmlx" label="项目类型"></el-table-column>
          <el-table-column prop="zbjgdjZbdw" label="中标单位" width="220"></el-table-column>
          <el-table-column prop="zbjgdjZbje" label="中标金额"></el-table-column>
          <el-table-column prop="zbjgdjDjr" label="登记人"></el-table-column>
          <el-table-column prop="zbjgdjDjsj" label="登记时间" width="120">
            <template slot-scope="scope">
              {{scope.row.zbjgdjDjsj|formatDate}}
            </template>
          </el-table-column>

          <el-table-column prop="zbjgdjSplc" label="流程状态" width="120">
            <template slot-scope="scope">
              <span v-if="scope.row.zbjgdjSplc==0">未提交</span>
              <span v-if="scope.row.zbjgdjSplc==1">未审批</span>
              <span v-if="scope.row.zbjgdjSplc==2">审批通过</span>
              <span v-if="scope.row.zbjgdjSplc==3">审批不通过</span>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="150">
            <template slot-scope="scope">
              <el-button v-if="scope.row.zbjgdjSplc==0" type="text" @click="updates(scope.row.zbjgdjId)" size="small">
                提交审批</el-button>
              <!-- <el-button type="text" size="small">编辑</el-button> -->
              <el-button type="text" v-if="scope.row.zbjgdjSplc==0" @click="deletes(scope.row.zbjgdjId)" size="small">删除
              </el-button>
              <el-button v-if="scope.row.zbjgdjSplc==1" type="text" size="small" @click="updates1(scope.row.zbjgdjId)">
                通过</el-button>
              <el-button type="text" v-if="scope.row.zbjgdjSplc==1" size="small" @click="updates2(scope.row.zbjgdjId)">
                不通过</el-button>

            </template>
          </el-table-column>
        </el-table>
      </template>

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

  import {
    formatDate
  } from '@/assets/utils';

  export default {

    name: 'test1',
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

        /* multipleSelection: [], */
        ruleForm: [{
          zbjgdjXmmc: '',
          zbjgdjXmlx: '123456',
          zbjgdjZbdw: '',
          zbjgdjZbje: '',
          zbjgdjDjr: '',
          zbjgdjDjsj: '',
          zbjgdjSplc: 0,
          tbxxBh: ''
        }, ]

      }
    },
    filters: {
      formatDate(time) {
        var date = new Date(time);
        return formatDate(date, "yyyy-MM-dd");
      }
    },
    methods: {
      handleClick(row) {
        console.log(row);
      },
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
        this.$get("/zbjgdj/queryAll").then(v => {
          console.log(v.data);
          this.ruleForm = v.data.content;
        });
      },
      deletes(val) {
        this.$confirm('确认删除？')
          .then(_ => {
            this.$post("/zbjgdj/deletes/" + JSON.stringify(val)).then(v => {
              this.queryAll();
              this.$message.success("删除成功");
            })
          })
          .catch(_ => {});

      },
      updates(val) {
        this.$confirm('确认审批操作？')
          .then(_ => {
            this.$get("/zbjgdj/updates/" + JSON.stringify(val)).then(v => {
              this.queryAll();
              this.$message.success("提交审批成功");
            })
          })
          .catch(_ => {});

      },
      updates1(val) {
        this.$confirm('确认审批操作？')
          .then(_ => {
            this.$get("/zbjgdj/updates1/" + JSON.stringify(val)).then(v => {
              this.queryAll();
              this.$message.success("提交审批成功");
            })
          })
          .catch(_ => {});

      },
      updates2(val) {
        this.$confirm('确认审批操作？')
          .then(_ => {
            this.$get("/zbjgdj/updates2/" + JSON.stringify(val)).then(v => {
              this.queryAll();
              this.$message.success("提交审批成功");
            })
          })
          .catch(_ => {});
      },
      selects(val) {
        this.$get("/zbjgdj/selects/" + JSON.stringify(val)).then(v => {
          this.ruleForm = v.data.content;
          this.$message.success("数据传输成功");
        })
      },
    },
    created() {
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
