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

      <h2 style="text-align: center;">投标保证金申请</h2>

      <h3 style="text-align: left;">基本信息</h3>

      <el-row>
        <el-col :span="8">
          <el-form-item label="保证金编号:" prop="tbbzjsqBh">
            <el-input placeholder="添加后自动生成" v-model="ruleForm.tbbzjsqBh" :disabled="true">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="项目名称:" prop="tbbzjsqXmmc">
            <el-select v-model="ruleForm.tbbzjsqXmmc" placeholder="请选择">
              <el-option v-for="item in this.tbxx" :key="item.tbxxId" :label="item.tbxxName" :value="item.tbxxName">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="项目类型:" prop="tbbzjsqXmlx">
            <el-input v-model="ruleForm.tbbzjsqXmlx">
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>


      <el-row>
        <el-col :span="8">
          <el-form-item label="收取单位:" prop="tbbzjsqSqdw">
            <el-input v-model="ruleForm.tbbzjsqSqdw">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="开户行:" prop="tbbzjsqKhh" clearable>
            <el-select v-model="ruleForm.tbbzjsqKhh" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="账号:" prop="tbbzjsqZh">
            <el-input v-model="ruleForm.tbbzjsqZh">
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="保证金金额:" prop="tbbzjsqBzjje">
            <el-input type="number" v-model="ruleForm.tbbzjsqBzjje" @mousewheel.native.prevent></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="交款日期:" prop="tbbzjsqJkrq">
            <el-date-picker v-model="ruleForm.tbbzjsqJkrq" align="right" type="date" placeholder="选择日期"
              :picker-options="pickerOptions">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="预计退回日期:" prop="tbbzjsqYjthrq">
            <el-date-picker v-model="ruleForm.tbbzjsqYjthrq" align="right" type="date" placeholder="选择日期"
              :picker-options="pickerOptions">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="申请人:" prop="tbbzjsqSqr">
            <el-input v-model="ruleForm.tbbzjsqSqr">
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <el-form-item label="备注:" prop="tbbzjsqBz">
            <el-input type="textarea" placeholder="请输入内容" v-model="ruleForm.tbbzjsqBz" rows="5" maxlength="500"
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
          value: '请选择',
          label: '请选择'
        }, {
          value: '中国农业银行',
          label: '中国农业银行'
        }, {
          value: '中国建设银行',
          label: '中国建设银行'
        }],

        rules: {
          tbbzjsqXmmc: [{
            required: true,
            message: '请选择项目名称',
            trigger: 'blur'
          }, ],
          tbbzjsqBzjje: [{
            required: true,
            message: '请输入保证金额',
            trigger: 'blur'
          }, ],
          tbbzjsqYjthrq: [{
            required: true,
            message: '请选择预计退回日期',
            trigger: 'blur'
          }, ],

        },

        pickerOptions: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          },
        },
        ruleForm: {
          tbbzjsqBh: '',
          tbbzjsqXmmc: '',
          tbbzjsqXmlx: '',
          tbbzjsqSqdw: '',
          tbbzjsqKhh: '',
          tbbzjsqZh: '',
          tbbzjsqBzjje: 0,
          tbbzjsqJkrq: '',
          tbbzjsqYjthrq: '',
          tbbzjsqSqr: '江小北',
          tbbzjsqBz: '',
          tbbzjsqSpjg: 0,
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
            this.$post("/tbbzj/add/" + JSON.stringify(this.ruleForm)).then(v => {
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
