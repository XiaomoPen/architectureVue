<style scoped="scoped">
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
    -moz-appearance: none !important;
    -o-appearance: none !important;
    -ms-appearance: none !important;
    appearance: none !important;
    margin: 0;
  }

  input[type="number"] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    -o-appearance: textfield;
    -ms-appearance: textfield;
    appearance: textfield;
  }
</style>
<template>
  <div>
    <el-form :inline="true" ref="ruleForm" :model="ruleForm" :rules="rules" label-width="120px" class="demo-form-inline">
      <el-row>
        <el-col :span="24">
          <el-form-item>
            <el-button type="primary" size="small" @click="push()">添加</el-button>
          </el-form-item>
        </el-col>
      </el-row>
      <h2 style="text-align: center;margin-bottom: 20px;">开标登记</h2>
      <div style="font-size: 16px;">基本信息</div>
      <el-row>
        <el-col :span="8">
          <el-form-item label="日期:" prop="kbdjRq">
            <el-date-picker v-model="ruleForm.kbdjRq" align="right" type="date" placeholder="选择日期"
              :picker-options="pickerOptions" :disabled="true">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="录入编号:" prop="kbdjBh">
            <el-input placeholder="添加后自动生成" v-model="ruleForm.kbdjBh" :disabled="true">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="开标时间:" prop="kbdjKbsj">
            <el-date-picker v-model="ruleForm.kbdjKbsj" align="right" type="date" placeholder="选择日期"
              :picker-options="pickerOptions">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="项目名称:" prop="kbdjXmmc">
            <el-select v-model="ruleForm.kbdjXmmc" placeholder="请选择">
              <el-option v-for="item in tbxx" :key="item.tbxxId" :label="item.tbxxName" :value="item.tbxxName">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="项目类型:" prop="kbdjXmlx">
            <el-input v-model="ruleForm.kbdjXmlx">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="开标地点:" prop="kbdjKbdd">
            <el-input v-model="ruleForm.kbdjKbdd">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="拟中标人:" prop="kbdjYzbr">
            <el-input v-model="ruleForm.kbdjYzbr">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="录入人:" prop="kbdjLrr">
            <el-input v-model="ruleForm.kbdjLrr">
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="备注:" prop="kbdjBz">
            <el-input type="textarea" placeholder="请输入内容" v-model="ruleForm.kbdjBz" rows="5" maxlength="500"
              style="width: 1200px;" show-word-limit>
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div style="font-size: 16px;margin: 10px 0;display: flex;justify-content: space-between;align-items: center;">
      竞争对手明细
      <el-button type="primary" @click="drawer = true" size="mini">添加</el-button>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="jzdsmxGsmc" width="140" label="公司名称" fixed>
      </el-table-column>
      <el-table-column prop="jzdsmxTbbj" width="140" label="投标报价">
      </el-table-column>
      <el-table-column prop="jzdsmxPcl" label="偏差率(%)">
      </el-table-column>
      <el-table-column prop="jzdsmxPm" label="排名">
      </el-table-column>
      <el-table-column prop="jzdsmxBz" label="备注">
      </el-table-column>

      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="danger" size="mini" @click="delPlansDetailds(scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-drawer title="竞争对手明细" :visible.sync="drawer">
      <el-form label-width="100px" class="demo-ruleForm">
        <el-form-item label="公司名称" :required='isRequired'>
          <el-input v-model="plansDetailds.jzdsmxGsmc"></el-input>
        </el-form-item>
        <el-form-item label="投标报价">
          <el-input v-model="plansDetailds.jzdsmxTbbj"></el-input>
        </el-form-item>
        <el-form-item label="偏差率(%)" :required='isRequired'>
          <el-input v-model="plansDetailds.jzdsmxPcl" type="number"></el-input>
        </el-form-item>

        <el-form-item label="排名">
          <el-input v-model="plansDetailds.jzdsmxPm"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="plansDetailds.jzdsmxBz"></el-input>
        </el-form-item>

        <div style="text-align: right;padding-right: 20px;">
          <el-button type="primary" @click="addPlansDetailds" size="small">添加</el-button>
        </div>
      </el-form>
    </el-drawer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tbxxDate: "",
        drawer: false,
        isRequired: true,
        ruleForm: {
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
        },
        tbxx: {
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
          tbxxSpjg: 0
        },
        rules: {
          kbdjXmmc: [{
            required: true,
            message: '请选择项目名称',
            trigger: 'blur'
          }, ],
          kbdjKbsj: [{
            required: true,
            message: '请输入开标时间',
            trigger: 'blur'
          }],
          kbdjKbdd: [{
            required: true,
            message: '请选择开标地点',
            trigger: 'blur'
          }, ],

        },
        plansDetailds: {
          jzdsmxGsmc: "",
          jzdsmxTbbj: "",
          jzdsmxPcl: "",
          jzdsmxPm: "",
          jzdsmxBz: ""
        },
        tableData: [],
        projects: []
      };
    },
    methods: {
      //添加材料明细
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        },
      },
      addPlansDetailds() {
        if (this.plansDetailds.jzdsmxGsmc.length == 0) {
          this.$message({
            showClose: true,
            message: '公司名称不能为空',
            type: 'warning'
          });
          return;
        }
        // if (this.plansDetailds.materialSum.length == 0 || this.plansDetailds.materialSum.indexOf(".") != -1 || this
        //   .plansDetailds.materialSum.indexOf("-") != -1) {
        //   this.$message({
        //     showClose: true,
        //     message: '总计划量不能为空且必须是>=0的正整数',
        //     type: 'warning'
        //   });
        //   return;
        // }
        this.tableData.push(this.plansDetailds);
        this.plansDetailds = {
          jzdsmxGsmc: "",
          jzdsmxTbbj: "",
          jzdsmxPcl: "",
          jzdsmxPm: "",
          jzdsmxBz: ""
        };
        this.drawer = false;
      },
      //删除材料明细
      delPlansDetailds(scope) {
        this.tableData.splice(scope.$index, 1);
      },
      //提交
      push() {
        if (this.ruleForm.kbdjXmmc.length == 0) {
          this.$message({
            showClose: true,
            message: '项目名称不能为空',
            type: 'warning'
          });
          return;
        }
        var data = {
          tPjKbdj: this.ruleForm,
          tPjJzdsmx: this.tableData
        };
        this.loading = true;
        this.$axios.post("/kbdj/dataVo", data).then(res => {
          this.loading = false;
          if (res.data.state == 200) {
            this.$message({
              showClose: true,
              message: '数据添加成功',
              type: 'success'
            });
            this.tableData = [];
            this.ruleForm = {
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
            }
          }
        });
      }
    },
    created() {
      this.ruleForm.kbdjRq = new Date();
      this.$axios.get("/lxxx/queryAll").then(res => {
        if (res.data.state == 200) {
          this.projects = res.data.content;
        } else {
          this.$message({
            showClose: true,
            message: '项目信息获取失败',
            type: 'warning'
          });
        }
      });
      this.$get("/tbxx/queryAll").then(v => {
        console.log(v.data);
        this.tbxx = v.data.content;
      });
    }
  }
</script>
