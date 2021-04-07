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

      <h2 style="text-align: center;">资格自审</h2>

      <h3 style="text-align: left;">基本信息</h3>

      <el-row>
        <el-col :span="8">
          <el-form-item label="日期:" prop="zgzsRq">
            <el-date-picker v-model="ruleForm.zgzsRq" align="right" type="date" placeholder="选择日期"
              :picker-options="pickerOptions" :disabled="true">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="自审编号:" prop="zgzsZsbh">
            <el-input placeholder="添加后自动生成" v-model="ruleForm.zgzsZsbh" :disabled="true">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="项目名称:" prop="zgzsXmmc">
            <el-select v-model="ruleForm.zgzsXmmc" placeholder="请选择">
              <el-option v-for="item in this.tbxx" :key="item.tbxxId" :label="item.tbxxName" :value="item.tbxxName">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="建设单位:" prop="zgzsJsdw">
            <el-input v-model="ruleForm.zgzsJsdw">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="申请人:" prop="zgzsSqr" clearable>
            <el-input v-model="ruleForm.zgzsSqr">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="项目类型:" prop="zgzsXmlx">
            <el-input v-model="ruleForm.zgzsXmlx">
            </el-input>
          </el-form-item>
        </el-col>

      </el-row>

      <el-row>
        <el-col :span="24">
          <el-form-item label="备注:" prop="zgzsBz">
            <el-input type="textarea" placeholder="请输入内容" v-model="ruleForm.zgzsBz" rows="5" maxlength="500"
              style="width: 1200px;" show-word-limit>
            </el-input>
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
        rules: {
          zgzsXmmc: [{
            required: true,
            message: '请选择项目名称',
            trigger: 'blur'
          }, ],
          zgzsSqr: [{
            required: true,
            message: '请输入申请人',
            trigger: 'blur'
          }, ],
        },

        pickerOptions: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          },
        },
        ruleForm: {
          zgzsRq: '',
          zgzsZsbh: '',
          zgzsXmmc: '',
          zgzsXmlx: '',
          zgzsJsdw: '',
          zgzsSqr: '',
          zgzsBz: '',
          zgzsSpjg: 0,
          tbxxBh: '',
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
            this.$post("/zgzs/add/" + JSON.stringify(this.ruleForm)).then(v => {
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
      this.ruleForm.zgzsRq = new Date();
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
