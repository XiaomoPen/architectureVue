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

      <h2 style="text-align: center;">投标文件审查</h2>

      <h3 style="text-align: left;">基本信息</h3>

      <el-row>
        <el-col :span="8">
          <el-form-item label="日期:" prop="tbwjscRq">
            <el-date-picker v-model="ruleForm.tbwjscRq" align="right" type="date" placeholder="选择日期"
              :picker-options="pickerOptions" :disabled="true">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="投标编号:" prop="thwjscTbbh">
            <el-input placeholder="添加后自动生成" v-model="ruleForm.thwjscTbbh" :disabled="true">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="项目名称:" prop="tbwjscXmmc">
            <el-select v-model="ruleForm.tbwjscXmmc" placeholder="请选择">
              <el-option v-for="item in tbxx" :key="item.tbxxId" :label="item.tbxxName" :value="item.tbxxName">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="项目类型:" prop="tbwjscXmlx">
            <el-input v-model="ruleForm.tbwjscXmlx">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="投标金额:" prop="tbwjscTbje" clearable>
            <el-input type="number" v-model="ruleForm.tbwjscTbje" @mousewheel.native.prevent></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="申请人:" prop="tbwjscSqr">
            <el-input v-model="ruleForm.tbwjscSqr">
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="建设单位:" prop="tbwjscJsdw">
            <el-input v-model="ruleForm.tbwjscJsdw">
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <el-form-item label="投标内容:" prop="tbwjscTbnr">
            <el-input type="textarea" placeholder="请输入内容" v-model="ruleForm.tbwjscTbnr" rows="5" maxlength="500"
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
        options: [{
          value: '选项1',
          label: '请选择'
        }, {
          value: '自营',
          label: '自营'
        }, {
          value: '联营',
          label: '联营'
        }],

        rules: {
          tbwjscXmmc: [{
            required: true,
            message: '请输入项目名称',
            trigger: 'blur'
          }, ],
          tbwjscTbje: [{
            required: true,
            message: '请输入投标金额',
            trigger: 'blur'
          }, {
              pattern: /^\d+(\.\d+)?$/,
              message: '请输入正确的金额',
              trigger: 'blur'
            },],
        },

        pickerOptions: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          },
        },
        ruleForm: {
          tbwjscRq: '',
          thwjscTbbh: '',
          tbwjscXmmc: '',
          tbwjscXmlx: '',
          tbwjscJsdw: '',
          tbwjscTbje: '',
          tbwjscSqr: '',
          tbwjscTbnr: '',
          tbwjscSpjg: 0,
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
            this.$post("/tbwjsc/add/" + JSON.stringify(this.ruleForm)).then(v => {
              this.$message.success("添加成功!");
              this.ruleForm={
                tbwjscRq: '',
                thwjscTbbh: '',
                tbwjscXmmc: '',
                tbwjscXmlx: '',
                tbwjscJsdw: '',
                tbwjscTbje: '',
                tbwjscSqr: '',
                tbwjscTbnr: '',
                tbwjscSpjg: 0,
                tbxxBh: '',
              }
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
      this.ruleForm.tbwjscRq = new Date();
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
