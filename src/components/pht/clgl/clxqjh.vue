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
    <el-form :inline="true" ref="ruleForm" label-width="120px"
      class="demo-form-inline">
      <el-row>
        <el-col :span="24">
          <el-form-item>
            <el-button type="primary" size="small">添加</el-button>
          </el-form-item>
        </el-col>
      </el-row>
      <h2 style="text-align: center;margin-bottom: 20px;">材料需求计划</h2>
      <div style="font-size: 16px;">基本信息</div>
      <el-row>
        <el-col :span="8">
          <el-form-item label="日期:">
            <el-date-picker align="right" type="date" :value="tbxxDate" :disabled="true">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="计划编号:" prop="添加后自动生成">
            <el-input placeholder="添加后自动生成" :disabled="true">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="计划主题:" prop="请输入计划主题">
            <el-input v-model="plans.planName">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="项目名称">
            <el-select placeholder="请选择所属项目">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="编制人:" prop="请输入编制人">
            <el-input v-model="plans.planPerson">
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="备注:" prop="tbxxJj">
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
      <el-table-column prop="materialSum" width="140" label="总计划量">
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
        <el-form-item label="总计划量" :required='isRequired'>
          <el-input v-model="plansDetailds.materialSum" type="number"></el-input>
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
        plans:{planName:"",lxxxdjBh:"",planPerson:"",planMask:""},
        plansDetailds:{materialName:"",materialNumber:"",materialCompany:"",materialSum:"",materialMask:""},
        tableData: [],

      };
    },
    methods: {
      //添加材料明细
      addPlansDetailds(){
        if(this.plansDetailds.materialName.length==0){
          this.$message({showClose: true, message: '材料名称不能为空',type: 'warning'});
          return;
        }
        if(this.plansDetailds.materialSum.length==0||this.plansDetailds.materialSum.indexOf(".")!=-1){
          this.$message({showClose: true, message: '总计划量不能为空且必须是>=0的正整数',type: 'warning'});
          return;
        }
        this.tableData.push(this.plansDetailds);
        this.plansDetailds={materialName:"",materialNumber:"",materialCompany:"",materialSum:"",materialMask:""};
        this.drawer=false;
      },
      //删除材料明细
      delPlansDetailds(scope){
        this.tableData.splice(scope.$index,1);
      }
    },
    created() {
      this.tbxxDate = new Date();
    }
  }
</script>
