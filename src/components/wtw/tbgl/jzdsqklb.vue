<template>
  <div>
    <div>
      <el-row :gutter="10">
        <el-col :span="2">
          <el-button :gutter="0" type="primary" plain>新增</el-button>
        </el-col>
        <el-col :span="5">
          <el-input placeholder="请输入客户名称或负责人名称" v-model="scyh" clearable>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <!-- <el-col :span="4">
          <el-date-picker v-model="value1" type="date" placeholder="选择录入时间" format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd">
            <template slot-scope="scope">
              {{scope.row.zbwjGmrq|formatDate}}
            </template>
          </el-date-picker>
        </el-col> -->
      </el-row>
    </div>
    <div>
      <template>
        <el-table :data="ruleForm" border style="width: 100%">
          <el-table-column prop="kbdjBh" label="录入编号" width="220"></el-table-column>
          <el-table-column prop="kbdjXmmc" label="项目名称" width="320"></el-table-column>
          <el-table-column prop="kbdjXmlx" label="项目类型"></el-table-column>
          <el-table-column prop="kbdjLrr" label="录入人"></el-table-column>
          <el-table-column prop="kbdjRq" label="日期" width="120">
            <template slot-scope="scope">
              {{scope.row.kbdjRq|formatDate}}
            </template>
          </el-table-column>
          <el-table-column prop="kbdjKbsj" label="开标时间" width="120">
            <template slot-scope="scope">
              {{scope.row.kbdjKbsj|formatDate}}
            </template>
          </el-table-column>
          <el-table-column prop="kbdjKbdd" label="开标地点" width="320"></el-table-column>
          <el-table-column prop="kbdjLbjg" label="拦标价" width="120"></el-table-column>
          <el-table-column prop="kbdjYzbr" label="拟标人" width="320"></el-table-column>
          <el-table-column prop="kbdjSpjg" label="流程状态" width="120">
            <template slot-scope="scope">
              <span v-if="scope.row.kbdjSpjg==0">未提交</span>
              <span v-if="scope.row.kbdjSpjg==1">未审批</span>
              <span v-if="scope.row.kbdjSpjg==2">审批通过</span>
              <span v-if="scope.row.kbdjSpjg==3">审批不通过</span>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="150">
            <template slot-scope="scope">
              <el-button v-if="scope.row.kbdjSpjg==0" type="text" @click="updates(scope.row.kbdjBh)" size="small">
                提交审批</el-button>
              <!-- <el-button type="text" size="small">编辑</el-button> -->
              <el-button type="text" v-if="scope.row.kbdjSpjg==0" @click="deletes(scope.row.kbdjBh)" size="small">删除
              </el-button>
              <el-button v-if="scope.row.kbdjSpjg==1" type="text" size="small" @click="updates1(scope.row.kbdjBh)">
                通过</el-button>
              <el-button type="text" v-if="scope.row.kbdjSpjg==1" size="small" @click="updates2(scope.row.kbdjBh)">
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

  import {formatDate} from '@/assets/utils';

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
          kbdjRq: '',
          kbdjBh: '',
          kbdjXmmc: '',
          kbdjXmlx: '',
          kbdjKbsj: '',
          kbdjKbdd: '',
          kbdjLbjg: 0.01,
          kbdjPbjzz: 0.02,
          kbdjYzbr: '',
          kbdjLrr: '',
          kbdjBz: '',
          kbdjSpjg: 0
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
        this.$get("/kbdj/queryAll").then(v => {
          console.log(v.data);
          this.ruleForm = v.data.content;
        });
      },
      deletes(val) {
        this.$post("/kbdj/deletes/" + JSON.stringify(val)).then(v => {
          this.queryAll();
          this.$message.success("删除成功");
        })
      },
      updates(val) {
        this.$get("/kbdj/updates/" + JSON.stringify(val)).then(v => {
          this.queryAll();
          this.$message.success("提交审批成功");
        })
      },
      updates1(val) {
        this.$get("/kbdj/updates1/" + JSON.stringify(val)).then(v => {
          this.queryAll();
          this.$message.success("提交审批成功");
        })
      },
      updates2(val) {
        this.$get("/kbdj/updates2/" + JSON.stringify(val)).then(v => {
          this.queryAll();
          this.$message.success("提交审批成功");
        })
      },
      selects(val) {
        this.$get("/kbdj/selects/" + JSON.stringify(val)).then(v => {
          this.ruleForm = v.data.content;
          this.$message.success("数据传输成功");
        })
      }

    },
    created() {
      this.queryAll()
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
