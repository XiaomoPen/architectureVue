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
            <el-button type="primary" size="small" @click="push()" v-if="isAdd">添加</el-button>
          </el-form-item>
        </el-col>
      </el-row>
      <h2 style="text-align: center;margin-bottom: 20px;">材料合同</h2>
      <div style="font-size: 16px;">基本信息</div>
      <el-row>
        <el-col :span="8">
          <el-form-item label="签约日期:">
            <el-date-picker align="right" type="date" :value="tbxxDate" :disabled="true">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="合同编号:">
            <el-input placeholder="添加后自动生成"  v-model="contract.contractNumber" :disabled="true">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="合同名称:" :required='isRequired'>
            <el-input v-model="contractDetailed.contractName">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="项目名称" :required='isRequired'>
            <el-select placeholder="请选择所属项目" v-model="contract.lxxxdjBh">
              <el-option v-for="item in projects" :key="item.lxxxdjBh" :label="item.lxxxdjXmmc" :value="item.lxxxdjBh">
              </el-option>
            </el-select>
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
            <el-select placeholder="请选择" v-model="contract.planNumber">
              <el-option v-for="item in source" :key="item.planNumber" :label="item.planName" :value="item.planNumber">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="供应商" :required='isRequired'>
            <el-select placeholder="请选择" v-model="contract.gysBh">
              <el-option v-for="item in gys" :key="item.gysBh" :label="item.gysMc" :value="item.gysBh">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="合同类型">
            <el-select placeholder="请选择" v-model="contractDetailed.contractType">
              <el-option key="材料合同" label="材料合同" value="材料合同"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="开始时间">
            <el-date-picker v-model="contractDetailed.contractStartTime" type="date" placeholder="选择日期"
              :picker-options="pickerOptions">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="结束时间">
            <el-date-picker v-model="contractDetailed.contractEndTime" type="date" placeholder="选择日期"
              :picker-options="pickerOptions">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="合同金额:" :required='isRequired'>
            <el-input v-model="contractDetailed.contractMoney" type="number">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="预付款:">
            <el-input v-model="contractDetailed.contractAdvanceCharge" type="number">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="保证金:">
            <el-input v-model="contractDetailed.contractbond" type="number">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="供应商签约人:">
            <el-input v-model="contractDetailed.contractSupplierPeople">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="支付方式" :required='isRequired'>
            <el-select placeholder="请选择" v-model="contractDetailed.contractPayment">
              <el-option key="0" label="现金" value="0"></el-option>
              <el-option key="1" label="转账" value="1"></el-option>
              <el-option key="2" label="支票" value="2"></el-option>
              <el-option key="3" label="微信" value="3"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="结算方式" :required='isRequired'>
            <el-select placeholder="请选择" v-model="contractDetailed.contractSettlement">
              <el-option key="0" label="分段结算" value="0"></el-option>
              <el-option key="1" label="合同结算" value="1"></el-option>
              <el-option key="2" label="进度结算" value="2"></el-option>
              <el-option key="3" label="竣工后一次性结算" value="3"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="交货方式" :required='isRequired'>
            <el-select placeholder="请选择" v-model="contractDetailed.contractDelivery">
              <el-option key="0" label="一次性交货" value="0"></el-option>
              <el-option key="1" label="分批交货" value="1"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="签约地点:">
            <el-input v-model="contractDetailed.contractAppointmentAddress">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="我方签约人:">
            <el-input v-model="contractDetailed.contractBookPeople">
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="付款条件:">
            <el-input type="textarea" placeholder="请输入内容" v-model="contractDetailed.contractPaymentCondition" rows="5"
              maxlength="254" style="width: 1000px;" show-word-limit>
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="主要条款:">
            <el-input type="textarea" placeholder="请输入内容" v-model="contractDetailed.contractMainRequirement" rows="5"
              maxlength="254" style="width: 1000px;" show-word-limit>
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="备注:">
            <el-input type="textarea" placeholder="请输入内容" v-model="contractDetailed.contractMask" rows="5"
              maxlength="254" style="width: 1000px;" show-word-limit>
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div style="font-size: 16px;margin: 10px 0;display: flex;justify-content: space-between;align-items: center;">
      材料明细
      <el-button type="primary" @click="drawer = true" size="mini" v-if="isAdd">添加</el-button>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="clcrkmxName" width="140" label="材料名称" fixed>
      </el-table-column>
      <el-table-column prop="clcrkmxNumber" width="140" label="规格型号">
      </el-table-column>
      <el-table-column prop="clcrkmxCompany" width="140" label="单位">
      </el-table-column>
      <el-table-column prop="clcrkmxSum" width="140" label="采购数量">
      </el-table-column>
      <el-table-column prop="clcrkmxIncluded" width="140" label="采购价格">
      </el-table-column>
      <el-table-column prop="clcrkmxTaxRate" width="140" label="税率">
      </el-table-column>
      <el-table-column prop="clcrkmxNoMoney" label="含税金额">
      </el-table-column>
      <el-table-column prop="clcrkmxMoney" label="不含税金额">
      </el-table-column>
      <el-table-column prop="clcrkmxNoIncluded" label="小计">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope" v-if="isAdd">
          <el-button type="danger" size="mini" @click="delPlansDetailds(scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-drawer title="添加材料明细" :visible.sync="drawer">
      <el-form label-width="100px" class="demo-ruleForm">
        <el-form-item label="材料名称" :required='isRequired'>
          <el-input v-model="clcrkmx.clcrkmxName"></el-input>
        </el-form-item>
        <el-form-item label="规格型号">
          <el-input v-model="clcrkmx.clcrkmxNumber"></el-input>
        </el-form-item>
        <el-form-item label="单位">
          <el-input v-model="clcrkmx.clcrkmxCompany"></el-input>
        </el-form-item>
        <el-form-item label="采购数量" :required='isRequired'>
          <el-input v-model="purNum" type="number"></el-input>
        </el-form-item>
        <el-form-item label="采购价格" :required='isRequired'>
          <el-input v-model="purPrice" type="number"></el-input>
        </el-form-item>
        <el-form-item label="税率">
          <el-input v-model="taxrate" type="number"></el-input>
        </el-form-item>
        <el-form-item label="含税金额" :required='isRequired'>
          <el-input v-model="rateMoney" type="number"></el-input>
        </el-form-item>
        <el-form-item label="不含税金额">
          <el-input v-model="norateMoney" type="number"></el-input>
        </el-form-item>
        <el-form-item label="小计">
          <el-input v-model="clcrkmx.clcrkmxNoIncluded" type="number" disabled></el-input>
        </el-form-item>
        <div style="text-align: right;padding-right: 20px;">
          <el-button type="primary" @click="addPlansDetailds" size="small" v-if="isAdd">添加</el-button>
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
        isAdd:true,
        pid:this.$route.query.data,
        tbxxDate: "",
        drawer: false,
        isRequired: true,
        contract: {
          lxxxdjBh: "",
          gysBh: "",
          planNumber: "",
          userNumber: '2020111111'
        },
        contractDetailed: {
          contractName: "",
          contractType: "",
          contractStartTime: "",
          contractEndTime: 0,
          contractMoney: 0,
          contractAdvanceCharge: 0,
          contractbond: "",
          contractSupplierPeople: "",
          contractPayment: "",
          contractSettlement: "",
          contractDelivery: "",
          contractAppointmentAddress: "",
          contractBookPeople: "",
          contractPaymentCondition: "",
          contractMainRequirement: "",
          contractMask: "",
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
        purPrice: 0,
        taxrate: 0,
        rateMoney: 0,
        norateMoney: 0,
        sourceType: "",
        gys: []
      };
    },
    watch: {
      purNum(val) {
        this.rateMoney = val * this.purPrice;
        this.norateMoney = this.rateMoney * (1 - this.taxrate / 100);
        this.clcrkmx.clcrkmxNoIncluded = this.rateMoney;
      },
      purPrice(val) {
        this.rateMoney = val * this.purNum;
        this.norateMoney = this.rateMoney * (1 - this.taxrate / 100);
        this.clcrkmx.clcrkmxNoIncluded = this.rateMoney;
      },
      taxrate(val) {
        this.rateMoney = this.purNum * this.purPrice;
        this.norateMoney = this.rateMoney * (1 - val / 100);
        this.clcrkmx.clcrkmxNoIncluded = this.rateMoney;
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
      // 添加材料合同
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
        if (this.purPrice == 0 || this.purPrice < 0 || this.purPrice.substring("-") == -1) {
          this.$message({
            showClose: true,
            message: '采购价格必须是大于0的正数',
            type: 'warning'
          });
          return;
        }
        this.clcrkmx.clcrkmxSum = parseInt(this.purNum);
        this.clcrkmx.clcrkmxIncluded = parseFloat(this.purPrice);
        this.clcrkmx.clcrkmxTaxRate = parseFloat(this.taxrate);
        this.clcrkmx.clcrkmxNoMoney = parseFloat(this.rateMoney);
        this.clcrkmx.clcrkmxMoney = parseFloat(this.norateMoney);
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
        this.purPrice = 0;
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
        if (this.contractDetailed.contractName.length == 0) {
          this.$message({
            showClose: true,
            message: '合同名称不能为空',
            type: 'warning'
          });
          return;
        }
        if (this.contract.lxxxdjBh.length == 0) {
          this.$message({
            showClose: true,
            message: '项目名称不能为空',
            type: 'warning'
          });
          return;
        }
        if (this.contract.planNumber.length == 0) {
          this.$message({
            showClose: true,
            message: '源单号不能为空',
            type: 'warning'
          });
          return;
        }
        if (this.contract.gysBh.length == 0) {
          this.$message({
            showClose: true,
            message: '供应商不能为空',
            type: 'warning'
          });
          return;
        }
        if (this.contractDetailed.contractMoney.substring("-") == -1) {
          this.$message({
            showClose: true,
            message: '合同金额不能为负数',
            type: 'warning'
          });
          return;
        }
        if (this.contractDetailed.contractAdvanceCharge.substring("-") == -1) {
          this.$message({
            showClose: true,
            message: '预付款不能为负数',
            type: 'warning'
          });
          return;
        }
        if (this.contractDetailed.contractbond.substring("-") == -1) {
          this.$message({
            showClose: true,
            message: '保证金不能为负数',
            type: 'warning'
          });
          return;
        }
        var data = {
          contract: this.contract,
          detailed: this.contractDetailed,
          clcrkmxs: this.tableData
        };
        this.loading = true;
        this.$axios.post("/material/addMaterialContract", data).then(res => {
          this.loading = false;
          if (res.data.state == 200) {
            this.$message({
              showClose: true,
              message: '新增材料合同信息成功',
              type: 'success'
            });
            this.contract = {
              lxxxdjBh: "",
              gysBh: "",
              planNumber: "",
              userNumber: '2020111111'
            };
            this.contractDetailed = {
              contractName: "",
              contractType: "",
              contractStartTime: "",
              contractEndTime: 0,
              contractMoney: 0,
              contractAdvanceCharge: 0,
              contractbond: "",
              contractSupplierPeople: "",
              contractPayment: "",
              contractSettlement: "",
              contractDelivery: "",
              contractAppointmentAddress: "",
              contractBookPeople: "",
              contractPaymentCondition: "",
              contractMainRequirement: "",
              contractMask: "",
            }
            this.tableData = [];
            this.sourceType="";
          }
        });
      }
    },
    created() {
      this.tbxxDate = new Date();
      if(this.pid==undefined){
        this.isAdd=true;
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
      }else{
        this.isAdd=false;
        this.loading=true;
        this.$axios.get("/material/getMCvo/"+this.pid).then(res => {
          this.loading=false;
          if (res.data.state == 200) {
            var data=res.data.content;
            this.contract=data.contract;
            this.contractDetailed=data.detailed;
            this.tableData=data.clcrkmxs;
            if(this.tableData==undefined||this.tableData.length==0){
               this.tableData.push({});
            }
          }
        });
      }
    }
  }
</script>
