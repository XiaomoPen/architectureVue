<template>
  <div>
    <el-form :inline="true" :rules="rules" :model="ruleForm" ref="ruleForm" label-width="120px"
      class="demo-form-inline">
      <el-row>
        <el-col :span="24">
          <el-form-item>
            <el-button type="primary" @click="onSubmit('ruleForm')">添加</el-button>
          </el-form-item>
        </el-col>
      </el-row>

      <h2 style="text-align: center;">中标结果登记</h2>

      <h3 style="text-align: left;">基本信息</h3>

      <el-row>
        <el-col :span="8">
          <el-form-item label="项目名称:" prop="zbjgdjXmmc">
            <el-select v-model="ruleForm.zbjgdjXmmc" placeholder="请选择">
              <el-option v-for="item in this.tbxx" :key="item.tbxxId" :label="item.tbxxName" :value="item.tbxxName">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="项目类型:" prop="zbjgdjXmlx">
            <el-input v-model="ruleForm.zbjgdjXmlx">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="中标单位:" prop="zbjgdjZbdw">
            <el-input v-model="ruleForm.zbjgdjZbdw">
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>


      <el-row>
        <el-col :span="8">
          <el-form-item label="中标金额:" prop="zbjgdjZbje">
            <el-input type="number" v-model="ruleForm.zbjgdjZbje" @mousewheel.native.prevent></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="登记人:" prop="zbjgdjDjr" clearable>
            <el-input v-model="ruleForm.zbjgdjDjr">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="登记时间:" prop="zbjgdjDjsj">
            <el-date-picker v-model="ruleForm.zbjgdjDjsj" align="right" type="date" placeholder="选择日期"
              :picker-options="pickerOptions">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '请选择',
          label: '请选择'
        }, {
          value: '自营',
          label: '自营'
        }, {
          value: '联营',
          label: '联营'
        }],

        rules: {
          tbbzjsqXmmc: [{
            required: true,
            message: '请选择项目名称',
            trigger: 'blur'
          }, ],
          tbbzjsqJkrq: [{
            required: true,
            message: '请输入招标文件费',
            trigger: 'blur'
          }, ],
          tbbzjsqYjthrq: [{
            required: true,
            message: '请输入招标文件费',
            trigger: 'blur'
          }, ],

        },

        pickerOptions: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          },
        },
        ruleForm: {
          zbjgdjXmmc: '',
          zbjgdjXmlx: '',
          zbjgdjZbdw: '',
          zbjgdjZbje: '',
          zbjgdjDjr: '',
          zbjgdjDjsj: '',
          zbjgdjSplc: 0,
          tbxxBh: ''
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
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      onSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            /* alert('添加成功!'); */
            console.log(this.ruleForm);
            this.$post("/zbjgdj/add/" + JSON.stringify(this.ruleForm)).then(v => {
              this.$message.success("添加成功!");
            })
          } else {
            /* console.log('error 添加失败!!'); */
            this.$message.error("必填信息请提交完整!");
            return false;
          }
        });


      }
    },
    created() {
      this.$get("/tbxx/queryAll").then(v => {
        console.log(v.data);
        this.tbxx = v.data.content;
      });
    }
  }
</script>

<style>
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
