<template>
  <div>
    <el-form :inline="true" :rules="rules" :model="ruleForm" ref="ruleForm" label-width="120px"
             class="demo-form-inline">
      <el-row>
        <el-col :span="24">
          <el-form-item>
            <el-button type="primary" @click="addContract()">添加</el-button>
          </el-form-item>
        </el-col>
      </el-row>

      <h2 style="text-align: center;">劳动合同</h2>

      <h3 style="text-align: left;">基本信息</h3>

      <el-row>
        <el-col :span="8">
          <el-form-item label="合同编号:" prop="contractNumber">
            <el-input v-model="ruleForm.contractNumber" :disabled="true"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="员工:" prop="userNumber">
            <el-select v-model="ruleForm.userNumber" :value-key="userNumber">
              <el-option v-for="item in userList" :key="item.userNumber" :label="item.userName" :value="item.userNumber"></el-option>
            </el-select>

          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="合同名称:" prop="contractName">
            <el-input v-model="ruleForm.contractName"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="合同类型:" prop="contractLeix">
           <el-select v-model="ruleForm.contractLeix" :value-key="value">
             <el-option v-for="item in options" :key="item.value"  :label="item.label" :value="item.label">

             </el-option>

           </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="试用结束时间:" prop="contactJieshu">
            <el-date-picker v-model="ruleForm.contactJieshu" align="right" type="date" placeholder="选择日期"
                            :picker-options="pickerOptions">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="合同状态:" prop="contractState">
            <el-select v-model="ruleForm.contractState" :value-key="value">
              <el-option v-for="item in state" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="试用工资:" prop="contractSy" clearable>
            <el-input  v-model.number="ruleForm.contractSy" @mousewheel.native.prevent></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="转正工资:" prop="contractPositive">
            <el-input  v-model.number="ruleForm.contractPositive" @mousewheel.native.prevent></el-input>

          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="签约时间:" prop="contractSigning">
            <el-date-picker v-model="ruleForm.contractSigning" align="right" type="date" placeholder="选择日期"
                            :picker-options="pickerOptions">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="生效时间:" prop="contractEffect">
            <el-date-picker v-model="ruleForm.contractEffect" align="right" type="date" placeholder="选择日期"
                            :picker-options="pickerOptions">
            </el-date-picker>

          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="失效时间:" prop="contractFailure">
            <el-date-picker v-model="ruleForm.contractFailure" align="right" type="date" placeholder="选择日期"
                            :picker-options="pickerOptions">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>


      <!-- <el-row>
        <el-col :span="24">
          <el-form-item label="备注:" prop="tbxxSpjg">
            <el-input type="textarea" placeholder="请输入内容" v-model="ruleForm.tbxxSpjg" rows="5" maxlength="500"
              style="width: 1200px;" show-word-limit>
            </el-input>
          </el-form-item>
        </el-col>
      </el-row> -->
    </el-form>
  </div>
</template>

<script>
export default {
  name: "addcontract",
  data() {
    return {
      userList:[],
      options: [{
        value: '新签合同',
        label: '新签合同'
      }, {
        value: '续签合同',
        label: '续签合同'
      }, {
        value: '变更合同',
        label: '变更合同'
      }],
      state: [{
        value: '请选择',
        label: '请选择'
      }, {
        value: '失效',
        label: '失效'
      }, {
        value: '有效',
        label: '有效'
      },{
        value: '终止',
        label: '终止'
      }, {
        value: '已签订',
        label: '已签订'
      }, {
        value: '未签订',
        label: '未签订'
      }],
      rules: {
        tbxxTbrq: [{
          required: true,
          message: '请选择投标日期',
          trigger: 'blur'
        }, ],
        tbxxDz: [{
          required: true,
          message: '请输入项目地址',
          trigger: 'blur'
        }, ],
        tbxxYjtbfy: [{
          required: true,
          message: '请输入预计投标费',
          trigger: 'blur'
        }, ],
        tbxxLx: [{
          required: true,
          message: '请选择项目类型',
          trigger: 'blur'
        }, ],
        tbxxLxr: [{
          required: true,
          message: '请输入联系人',
          trigger: 'blur'
        }, ],
        tbxxName: [{
          required: true,
          message: '请输入项目名称',
          trigger: 'blur'
        }, ],
        tbxxXz: [{
          required: true,
          message: '请选择项目性质',
          trigger: 'blur'
        }, ],
        tbxxYjhtje: [{
          required: true,
          message: '请输入预计合同金额',
          trigger: 'blur'
        }, ],
        tbxxJsdw: [{
          required: true,
          message: '请输入建设单位',
          trigger: 'blur'
        }, ],
        tbxxFzr: [{
          required: true,
          message: '请输入投标负责人',
          trigger: 'blur'
        }, ],
        tbxxLxdh: [{
          required: true,
          message: '请输入联系电话',
          trigger: 'blur'
        }, ],
        tbxxLrr: [{
          required: true,
          message: '请输入录入人',
          trigger: 'blur'
        }, ],
      },

      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        },
      },
      ruleForm: {
        contractNumber: '',
        userNumber: '',
        contractName: '',
        contractLeix: '',
        contractState: '',
        contractSy: '',
        contractPositive: '',
        contractSigning: '',
        contractEffect: "",
        contractFailure: "",
        contactJieshu:'',

      },

    };
  },
  methods: {
    addContract() {

      this.$axios.post("http://localhost:7777/tpm/add-content", this.ruleForm)
        .then((v) => {
          this.$message('添加成功！');

        })
    },


  },
  created() {
    // this.$get("/tbxx/queryAll").then(v => {
    //   console.log(v.data);
    //   this.ruleForm = v.data.content[0];
    // });
    this.$axios.post("http://localhost:7777/tpm/find-userList")
      .then((v) => {
       this.userList=v.data.content;

      })
  }
}
</script>

<style scoped>
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

}
</style>
