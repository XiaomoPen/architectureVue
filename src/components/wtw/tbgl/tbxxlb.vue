<template>
  <div>
    <div>
      <el-row :gutter="10">
        <el-col :span="2">
          <el-button :gutter="0" type="primary" plain>新增</el-button>
        </el-col>
        <el-col :span="5">
          <el-input placeholder="请输入项目名称" v-model="scyh" clearable>
            <el-button slot="append" icon="el-icon-search" @click="tbxxSelect(scyh)"></el-button>
          </el-input>
        </el-col>

      </el-row>
    </div>
    <div>
      <template>
        <el-table :data="ruleForm" border style="width: 100%">
          <el-table-column prop="tbxxName" label="项目名称" width="320"></el-table-column>
          <el-table-column prop="tbxxLx" label="项目类型"></el-table-column>
          <el-table-column prop="tbxxDz" label="项目地址" width="220"></el-table-column>
          <el-table-column prop="tbxxLrr" label="录入人"></el-table-column>
          <el-table-column prop="tbxxTbrq" label="日期" width="120">
            <template slot-scope="scope">
              {{scope.row.tbxxTbrq|formatDate}}
            </template>
          </el-table-column>
          <el-table-column prop="tbxxFzr" label="投标负责人" width="120"></el-table-column>
          <el-table-column prop="tbxxJsdw" label="建设单位"width="220"></el-table-column>
          <el-table-column prop="tbxxYjhtje" label="预计合同金额" width="120"></el-table-column>
          <el-table-column prop="tbxxLxr" label="联系人"></el-table-column>
          <el-table-column prop="tbxxLxdh" label="联系电话" width="120"></el-table-column>
          <el-table-column prop="tbxxSpjg" label="流程状态">
            <template slot-scope="scope">
              <span v-if="scope.row.tbxxSpjg==0">未提交</span>
              <span v-if="scope.row.tbxxSpjg==1">未审批</span>
              <span v-if="scope.row.tbxxSpjg==2">审批通过</span>
              <span v-if="scope.row.tbxxSpjg==3">审批不通过</span>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="150">
            <template slot-scope="scope">
              <el-button v-if="scope.row.tbxxSpjg==0" type="text" @click="tbxxUpdate(scope.row.tbxxBh)" size="small">
                提交审批</el-button>
              <!-- <el-button type="text" size="small">编辑</el-button> -->
              <el-button type="text" v-if="scope.row.tbxxSpjg==0" @click="tbxxDelete(scope.row.tbxxBh)" size="small">删除
              </el-button>
              <el-button v-if="scope.row.tbxxSpjg==1" type="text" size="small" @click="tbxxUpdate1(scope.row.tbxxBh)">通过
              </el-button>
              <el-button type="text" v-if="scope.row.tbxxSpjg==1" size="small" @click="tbxxUpdate2(scope.row.tbxxBh)">
                不通过</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>

      <!-- 分页区域 -->
      <!--      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
        :page-sizes="[5,10,15,20]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper"
        :total="total"></el-pagination> -->
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  import qs from 'qs'

  import {formatDate} from '@/assets/utils';

  export default {
    name: 'test1',
    data() {
      return {
        //当前页码
        currentPage: 1,
        //总记录数
        total: 5,
        //每页显示记录
        pagesize: 20,
        scyh: '', //模糊搜索员工
        value1: null, //模糊搜索时间

        /* multipleSelection: [], */
        ruleForm: [{
          tbxxDate: '',
          tbxxBh: '',
          tbxxName: '',
          tbxxJj: '',
          tbxxDz: '',
          tbxxXz: '',
          tbxxLx: '',
          tbxxFzr: '',
          tbxxTbrq: '',
          tbxxYjtbfy: '',
          tbxxYjhtje: '',
          tbxxJsdw: '',
          tbxxLxr: '',
          tbxxLxdh: '',
          tbxxLrr: '',
          tbxxSpjg: ''
        }],

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
      tbxxAll() {
        this.$get("/tbxx/queryAll").then(v => {
          console.log(v.data);
          this.ruleForm = v.data.content;
        });
      },
      tbxxDelete(val) {
        this.$post("/tbxx/tbxxDelete/" + JSON.stringify(val)).then(v => {
          this.tbxxAll();
          this.$message.success("删除成功");
        })
      },
      tbxxUpdate(val) {
        this.$get("/tbxx/tbxxUpdate/" + JSON.stringify(val)).then(v => {
          this.tbxxAll();
          this.$message.success("提交审批成功");
        })
      },
      tbxxUpdate1(val) {
        this.$get("/tbxx/tbxxUpdate1/" + JSON.stringify(val)).then(v => {
          this.tbxxAll();
          this.$message.success("提交审批成功");
        })
      },
      tbxxUpdate2(val) {
        this.$get("/tbxx/tbxxUpdate2/" + JSON.stringify(val)).then(v => {
          this.tbxxAll();
          this.$message.success("提交审批成功");
        })
      },
      tbxxSelect(val) {
        this.$get("/tbxx/tbxxSelect/" + JSON.stringify(val)).then(v => {
          this.ruleForm = v.data.content;
          this.$message.success("数据传输成功");
        })
      }
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
      this.tbxxAll();
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
