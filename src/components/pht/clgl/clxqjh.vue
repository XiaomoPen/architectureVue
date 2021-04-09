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
    <el-form :inline="true" ref="ruleForm" label-width="120px"
      class="demo-form-inline" >
      <el-row>
        <el-col :span="24">
          <el-form-item>
            <el-button type="primary" size="small" @click="push()">添加</el-button>
          </el-form-item>
        </el-col>
      </el-row>
      <h2 style="text-align: center;margin-bottom: 20px;">材料需用计划</h2>
      <div style="font-size: 16px;">基本信息</div>
      <el-row>
        <el-col :span="8">
          <el-form-item label="日期:">
            <el-date-picker align="right" type="date" :value="tbxxDate" :disabled="true">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="计划编号:">
            <el-input placeholder="添加后自动生成" :disabled="true">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="计划主题:" :required='isRequired'>
            <el-input v-model="plans.planName">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="项目名称" :required='isRequired'>
            <el-select placeholder="请选择所属项目" v-model="plans.lxxxdjBh">
              <el-option v-for="item in projects" :key="item.lxxxdjBh" :label="item.lxxxdjXmmc" :value="item.lxxxdjBh"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="源单号">
            <el-select placeholder="请选择所属源单号" v-model="plans.planSource">
              <el-option v-for="item in source" :key="item.planNumber" :label="item.planName" :value="item.planNumber"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="编制人:">
            <el-input v-model="plans.planPerson">
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="备注:">
            <el-input type="textarea" placeholder="请输入内容" v-model="plans.planMask" rows="5" maxlength="254"
              style="width: 1000px;" show-word-limit>
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div style="font-size: 16px;margin: 10px 0;display: flex;justify-content: space-between;align-items: center;">
      材料明细
      <el-button type="primary" @click="drawer = true" size="mini">添加</el-button>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="materialName" width="140" label="材料名称" fixed>
      </el-table-column>
      <el-table-column prop="materialNumber" width="140" label="规格型号">
      </el-table-column>
      <el-table-column prop="materialCompany" width="140" label="单位">
      </el-table-column>
      <el-table-column prop="materialSum" width="140" label="常用数量">
      </el-table-column>
      <el-table-column prop="materialConsultMoney" width="140" label="参考价格">
      </el-table-column>
      <el-table-column prop="materialMoney" width="140" label="小计">
      </el-table-column>
      <el-table-column prop="materialMask" label="备注">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="danger" size="mini" @click="delPlansDetailds(scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-drawer title="添加材料明细" :visible.sync="drawer">
      <el-form label-width="100px" class="demo-ruleForm">
        <el-form-item label="材料名称" :required='isRequired'>
          <el-input v-model="plansDetailds.materialName"></el-input>
        </el-form-item>
        <el-form-item label="规格型号">
          <el-input v-model="plansDetailds.materialNumber"></el-input>
        </el-form-item>
        <el-form-item label="单位">
          <el-input v-model="plansDetailds.materialCompany"></el-input>
        </el-form-item>
        <el-form-item label="常用数量" :required='isRequired'>
          <el-input v-model="materialSum" type="number"></el-input>
        </el-form-item>
        <el-form-item label="参考价格" :required='isRequired'>
          <el-input v-model="materialConsultMoney" type="number"></el-input>
        </el-form-item>
        <el-form-item label="小计">
          <el-input v-model="materialMoney" type="number" disabled></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="plansDetailds.materialMask"></el-input>
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
        tbxxDate:"",
        drawer: false,
        isRequired: true,
        plans:{planName:"",lxxxdjBh:"",planPerson:"",planMask:"",planType:1,planSource:"",userNumber:sessionStorage.getItem("userId")},
        plansDetailds:{materialName:"",materialNumber:"",materialCompany:"",materialSum:0,materialConsultMoney:0,materialMoney:0,materialMask:""},
        tableData: [],
        projects:[],
        loading:false,
        materialSum:0,
        materialConsultMoney:0,
        materialMoney:0,
        source:[]
      };
    },
    watch:{
      materialSum(val){
        this.materialMoney=val*this.materialConsultMoney
      },
      materialConsultMoney(val){
        this.materialMoney=val*this.materialSum
      }
    },
    methods: {
      //添加材料明细
      addPlansDetailds(){
        if(this.plansDetailds.materialName.length==0){
          this.$message({showClose: true, message: '材料名称不能为空',type: 'warning'});
          return;
        }
        if(this.materialSum==0||this.materialSum<0||this.materialSum.substring(".")==-1){
          this.$message({showClose: true, message: '常用数量必须是大于0的正整数',type: 'warning'});
          return;
        }
        if(this.materialConsultMoney==0||this.materialConsultMoney<0){
          this.$message({showClose: true, message: '参考价格必须>0',type: 'warning'});
          return;
        }
        this.plansDetailds.materialSum=parseFloat(this.materialSum);
        this.plansDetailds.materialConsultMoney=parseFloat(this.materialConsultMoney);
        this.plansDetailds.materialMoney=this.materialMoney;
        this.tableData.push(this.plansDetailds);
        this.plansDetailds={materialName:"",materialNumber:"",materialCompany:"",materialSum:0,materialConsultMoney:0,materialMoney:0,materialMask:""};
        this.materialSum=0;
        this.materialConsultMoney=0;
        this.materialMoney=0;
        this.drawer=false;
      },
      //删除材料明细
      delPlansDetailds(scope){
		  this.$confirm('确认删除？')
		    .then(_ => {
		      this.tableData.splice(scope.$index,1);
		    })
		    .catch(_ => {});
      },
      //提交
      push(){
        if(this.plans.planName.length==0||this.plans.planName.length>64){
          this.$message({showClose: true, message: '计划主题不能为空并且必须位数<=64',type: 'warning'});
          return;
        }
        if(this.plans.lxxxdjBh.length==0){
          this.$message({showClose: true, message: '项目名称不能为空',type: 'warning'});
          return;
        }
        var data={plans:this.plans,detaileds:this.tableData};
        this.loading=true;
        this.$axios.post("/material/addMaterial",data).then(res=>{
          this.loading=false;
          if(res.data.state==200){
            this.$message({showClose: true, message: '新增材料总计划成功',type: 'success'});
            this.plans={planName:"",lxxxdjBh:"",planPerson:"",planMask:"",planType:0,userNumber:sessionStorage.getItem("userId")};
            this.tableData=[];
          }
        });
      }
    },
    created() {
      this.tbxxDate = new Date();
      this.$axios.get("/lxxx/queryAll").then(res=>{
        if(res.data.state==200){
          this.projects=res.data.content;
        }else{
          this.$message({showClose: true, message: '项目信息获取失败',type: 'warning'});
        }
      });
      this.$axios.get("/material/getTotalMaterialno").then(res=>{
        if(res.data.state==200){
          this.source=res.data.content
        }else{
          this.$message({showClose: true, message: '源单数据获取失败',type: 'warning'});
        }
      });
    }
  }
</script>
