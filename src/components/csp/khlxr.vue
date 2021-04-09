<template>
  <div>
    <div>
      <el-row>
        <el-button :gutter="0" type="primary" @click="$router.push('/khlxrf')" plain>新增</el-button>
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
        <el-col :span="5">
          <el-input placeholder="请输入客户名称或负责人名称" v-model="scyh" clearable>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-date-picker v-model="value1" type="date" placeholder="选择录入时间" format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd">
          </el-date-picker>
        </el-col>
      </el-row>
    </div>
    <div>
      <el-table border max-height="700" stripe :data="lxr">
        <!-- <el-table-column type="selection" width="60"> ></el-table-column> -->
        <!-- ref="multipleTable" @selection-change="handleSelectionChange" -->
        <el-table-column prop="lxrBh" label="客户编号"></el-table-column>
        <el-table-column prop="khxxXm" label="客户姓名"></el-table-column>
        <el-table-column prop="lxrXm" label="联系人姓名"></el-table-column>
        <el-table-column prop="lxrDh" label="联系人电话" width="200px"></el-table-column>
        <el-table-column prop="lxrZw" label="联系人职位"></el-table-column>
        <el-table-column prop="lxrYxl" label="联系人影响力"></el-table-column>
        <el-table-column prop="lxrZt" label="联系人状态"></el-table-column>
        <el-table-column prop="cz" label="操作" width="200px" fixed="right">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" size="mini" plain >编辑</el-button>
            <el-button type="danger" icon="el-icon-delete" size="mini" @click="sclxr(scope.row)" plain>删除</el-button>
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

    name: 'khlxr',
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
        lxr: [{
            lxrBh: '',
            khxxBh:'',
            khxxXm: '',
            lxrXm: '',
            lxrDh: '',
            lxrZw: '',
            lxrYxl: '',
            lxrZt: '',
          },
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
      queryAll(){
        this.$get("/lxr/queryAll").then(v => {
          console.log(v.data);
          this.lxr = v.data.content;
        });
      },
      //删除信息
      sclxr: function(row) {
        this.$confirm('确认删除？')
          .then(_ => {
            /* alert(row.khxxBh) */
            this.$get("/lxr/dellxr/"+ JSON.stringify(row.lxrBh)).then(v => {
              console.log(v.data);
              this.lxr = v.data.content;
              this.$message.success("修改成功!");
            });
          })
          .catch(_ => {});
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
