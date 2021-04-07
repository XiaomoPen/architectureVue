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
  <div v-loading="loading">
    <el-form :inline="true" ref="ruleForm" label-width="120px" class="demo-form-inline">
      <el-row>
        <el-col :span="24">
          <el-form-item>
            <el-button type="primary" size="small" @click="push()">添加</el-button>
          </el-form-item>
        </el-col>
      </el-row>
      <h2 style="text-align: center;margin-bottom: 20px;">材料入库</h2>
      <div style="font-size: 16px;">基本信息</div>
      <el-row>
        <el-col :span="8">
          <el-form-item label="日期:">
            <el-date-picker align="right" type="date" :value="tbxxDate" :disabled="true">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="入库编号:">
            <el-input placeholder="添加后自动生成" :disabled="true">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="入库主题:" :required='isRequired'>
            <el-input v-model="clcrk.clcrkName">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="源单类型" :required='isRequired'>
            <el-select placeholder="请选择所属源单号" v-model="sourceType">
              <el-option key="0" label="材料总计划" value="0"></el-option>
              <el-option key="1" label="材料需用计划" value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="源单号">
            <el-select placeholder="请选择" v-model="clcrk.contractNumber">
              <el-option v-for="item in source" :key="item.planNumber" :label="item.planName" :value="item.planNumber">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="所属项目" :required='isRequired'>
            <el-select placeholder="请选择所属项目" v-model="clcrk.lxxxdjBh">
              <el-option v-for="item in projects" :key="item.lxxxdjBh" :label="item.lxxxdjXmmc" :value="item.lxxxdjBh">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="供应商" :required='isRequired'>
            <el-select placeholder="请选择" v-model="clcrk.gysBh">
              <el-option v-for="item in gys" :key="item.gysBh" :label="item.gysMc" :value="item.gysBh">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="采购员" :required='isRequired'>
            <el-select placeholder="请选择" v-model="clcrk.clcrkPurchase">
              <el-option v-for="item in users" :key="item.userNumber" :label="item.userName" :value="item.userNumber"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="交货人" :required='isRequired'>
            <el-select placeholder="请选择" v-model="clcrk.clcrkDelivery">
              <el-option v-for="item in users" :key="item.userNumber" :label="item.userName" :value="item.userNumber"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="验收人" :required='isRequired'>
            <el-select placeholder="请选择" v-model="clcrk.clcrkAcceptance">
              <el-option v-for="item in users" :key="item.userNumber" :label="item.userName" :value="item.userNumber"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="入库人" :required='isRequired'>
            <el-select placeholder="请选择" v-model="clcrk.clcrkWarehousing">
              <el-option v-for="item in users" :key="item.userNumber" :label="item.userName" :value="item.userNumber"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="录入人:">
            <el-input v-model="clcrk.clcrkInput">
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div style="font-size: 16px;margin: 10px 0;display: flex;justify-content: space-between;align-items: center;">
      入库明细
      <el-button type="primary" @click="drawer = true" size="mini">添加</el-button>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="clcrkmxName" label="材料名称" fixed>
      </el-table-column>
      <el-table-column prop="clcrkmxNumber" label="规格型号">
      </el-table-column>
      <el-table-column prop="clcrkmxCompany" label="单位">
      </el-table-column>
      <el-table-column prop="clcrkmxWarehouse" label="仓库">
      </el-table-column>
      <el-table-column prop="clcrkmxSum" label="入库数量">
      </el-table-column>
      <el-table-column prop="clcrkmxIncluded" label="含税单价">
      </el-table-column>
      <el-table-column prop="clcrkmxNoIncluded" label="不含税单价">
      </el-table-column>
      <el-table-column prop="clcrkmxTaxRate" label="税率">
      </el-table-column>
      <el-table-column prop="clcrkmxNoMoney" label="不含税金额">
      </el-table-column>
      <el-table-column prop="clcrkmxMoney" label="含税金额">
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button type="danger" size="mini" @click="delPlansDetailds(scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-drawer title="添加入库明细" :visible.sync="drawer">
      <el-form label-width="100px" class="demo-ruleForm" style="overflow: scroll;height: 96%;width100%: absolute;">
        <el-form-item label="材料名称" :required='isRequired'>
          <el-input v-model="clcrkmx.clcrkmxName"></el-input>
        </el-form-item>
        <el-form-item label="规格型号">
          <el-input v-model="clcrkmx.clcrkmxNumber"></el-input>
        </el-form-item>
        <el-form-item label="单位">
          <el-input v-model="clcrkmx.clcrkmxCompany"></el-input>
        </el-form-item>
        <el-form-item label="仓库">
          <el-select placeholder="请选择" v-model="clcrkmx.clcrkmxWarehouse">
            <el-option key="一号仓库" label="一号仓库" value="一号仓库"></el-option>
            <el-option key="二号仓库" label="二号仓库" value="二号仓库"></el-option>
            <el-option key="三号仓库" label="三号仓库" value="三号仓库"></el-option>
            <el-option key="四号仓库" label="四号仓库" value="四号仓库"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="入库数量" :required='isRequired'>
          <el-input v-model="purNum" type="number"></el-input>
        </el-form-item>
        <el-form-item label="含税单价">
          <el-input v-model="ratePrice" type="number"></el-input>
        </el-form-item>
        <el-form-item label="不含税单价" :required='isRequired'>
          <el-input v-model="noratePrice" type="number"></el-input>
        </el-form-item>
        <el-form-item label="税率">
          <el-input v-model="taxrate" type="number"></el-input>
        </el-form-item>
        <el-form-item label="不含税金额">
          <el-input v-model="norateMoney" type="number" disabled></el-input>
        </el-form-item>
        <el-form-item label="含税金额">
          <el-input v-model="rateMoney" type="number" disabled></el-input>
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
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          },
        },
        tbxxDate: "",
        drawer: false,
        isRequired: true,
        clcrk: {
          clcrkName: "",
          contractNumber: "",
          lxxxdjBh: "",
          gysBh: "",
          clcrkPurchase: "",
          clcrkDelivery: "",
          clcrkAcceptance: "",
          clcrkWarehousing: "",
          clcrkInput: "",
          clcrkType: 0,
          clcrkApproval: 0
        },
        clcrkmx: {
          clcrkmxName: "",
          clcrkmxNumber: "",
          clcrkmxCompany: "",
          clcrkmxWarehouse: "",
          clcrkmxSum: "",
          clcrkmxIncluded: "",
          clcrkmxNoIncluded: "",
          clcrkmxTaxRate: "",
          clcrkmxNoMoney: "",
          clcrkmxMoney: ""
        },
        tableData: [],
        projects: [],
        loading: false,
        source: [],
        total: [],
        need: [],
        purNum: 0,
        ratePrice: 0,
        noratePrice: 0,
        taxrate: 0,
        rateMoney: 0,
        norateMoney: 0,
        sourceType: "",
        gys: [],
        users:[]
      };
    },
    watch: {
      purNum(val) {
        this.norateMoney = val * this.noratePrice;
        this.rateMoney = val * this.ratePrice;
      },
      noratePrice(val) {
        this.norateMoney = val * this.purNum;
      },
      ratePrice(val) {
        this.rateMoney = val * this.purNum;
      },
      sourceType(val) {
        if (val == '0') {
          this.source = this.total;
        } else {
          this.source = this.need;
        }
      }
    },
    methods: {

      addPlansDetailds() {
        if (this.clcrkmx.clcrkmxName.length == 0) {
          this.$message({
            showClose: true,
            message: '材料名称不能为空',
            type: 'warning'
          });
          return;
        }
        if (this.purNum == 0 || this.purNum < 0 || this.purNum.substring("-") == -1 || this.purNum.substring(".") == -
          1) {
          this.$message({
            showClose: true,
            message: '采购数量必须是大于0的正整数',
            type: 'warning'
          });
          return;
        }
        this.clcrkmx.clcrkmxSum = parseInt(this.purNum);
        this.clcrkmx.clcrkmxIncluded = parseFloat(this.ratePrice);
        this.clcrkmx.clcrkmxNoIncluded=parseFloat(this.noratePrice);
        this.clcrkmx.clcrkmxTaxRate = parseFloat(this.taxrate);
        this.clcrkmx.clcrkmxNoMoney = parseFloat(this.norateMoney);
        this.clcrkmx.clcrkmxMoney = parseFloat(this.rateMoney);
        this.tableData.push(this.clcrkmx);
        this.clcrkmx = {
          clcrkmxName: "",
          clcrkmxNumber: "",
          clcrkmxCompany: "",
          clcrkmxWarehouse: "",
          clcrkmxSum: "",
          clcrkmxIncluded: "",
          clcrkmxNoIncluded: "",
          clcrkmxTaxRate: "",
          clcrkmxNoMoney: "",
          clcrkmxMoney: ""
        };
        this.purNum = 0;
        this.ratePrice = 0;
        this.noratePrice=0;
        this.taxrate = 0;
        this.rateMoney = 0;
        this.norateMoney = 0;
        this.drawer = false;
      },
      //删除材料明细
      delPlansDetailds(scope) {
        this.tableData.splice(scope.$index, 1);
      },
      //提交
      push() {
        if (this.clcrk.clcrkName.length == 0) {
          this.$message({
            showClose: true,
            message: '入库主题不能为空',
            type: 'warning'
          });
          return;
        }
        if (this.clcrk.lxxxdjBh.length == 0) {
          this.$message({
            showClose: true,
            message: '所属项目不能为空',
            type: 'warning'
          });
          return;
        }
        if (this.clcrk.gysBh.length == 0) {
          this.$message({
            showClose: true,
            message: '供应商不能为空',
            type: 'warning'
          });
          return;
        }
        if (this.clcrk.clcrkPurchase.length == 0) {
          this.$message({
            showClose: true,
            message: '采购员不能为空',
            type: 'warning'
          });
          return;
        }
        if (this.clcrk.clcrkDelivery.length == 0) {
          this.$message({
            showClose: true,
            message: '交货人不能为空',
            type: 'warning'
          });
          return;
        }
        if (this.clcrk.clcrkAcceptance.length == 0) {
          this.$message({
            showClose: true,
            message: '验收人不能为空',
            type: 'warning'
          });
          return;
        }
        if (this.clcrk.clcrkWarehousing.length == 0) {
          this.$message({
            showClose: true,
            message: '入库人不能为空',
            type: 'warning'
          });
          return;
        }
        var data = {
          clcrk: this.clcrk,
          clcrkmxes: this.tableData
        };
        this.loading = true;
        this.$axios.post("/clcrl/addClcrl", data).then(res => {
          this.loading = false;
          if (res.data.state == 200) {
            this.$message({
              showClose: true,
              message: '新增材料入库信息成功',
              type: 'success'
            });
            this.clcrk={
              clcrkName: "",
              contractNumber: "",
              lxxxdjBh: "",
              gysBh: "",
              clcrkPurchase: "",
              clcrkDelivery: "",
              clcrkAcceptance: "",
              clcrkWarehousing: "",
              clcrkInput: "",
              clcrkType: 0,
              clcrkApproval: 0
            };
            this.tableData = [];
            this.sourceType = "";
          }
        });
      }
    },
    created() {
      this.tbxxDate = new Date();
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
      this.$axios.get("/material/getTotalMaterialno").then(res => {
        if (res.data.state == 200) {
          this.total = res.data.content
        } else {
          this.$message({
            showClose: true,
            message: '源单数据获取失败',
            type: 'warning'
          });
        }
      });
      this.$axios.get("/material/getNeedMaterialno").then(res => {
        if (res.data.state == 200) {
          this.need = res.data.content
        } else {
          this.$message({
            showClose: true,
            message: '源单数据获取失败',
            type: 'warning'
          });
        }
      });
      this.$axios.get("/gys/queryAll").then(res => {
        if (res.data.state == 200) {
          this.gys = res.data.content;
        }
      });
      this.$axios.get("/tpm/find-userList").then(res => {
        if (res.data.state == 200) {
          this.users=res.data.content;
        }
      });
    }
  }
</script>
