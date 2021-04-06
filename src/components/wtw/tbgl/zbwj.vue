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

      <h2 style="text-align: center;">招标文件购买申请</h2>

      <h3 style="text-align: left;">基本信息</h3>

      <el-row>
        <el-col :span="8">
          <el-form-item label="日期:" prop="zbwjGmrq">
            <el-date-picker v-model="ruleForm.zbwjGmrq" align="right" type="date" placeholder="选择日期"
              :picker-options="pickerOptions" :disabled="true">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="标书购买编号:" prop="zbwjBsgmbh">
            <el-input placeholder="添加后自动生成" v-model="ruleForm.zbwjBsgmbh" :disabled="true">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="项目名称:" prop="zbwjSmmc">
            <el-select v-model="ruleForm.zbwjSmmc" placeholder="请选择">
              <el-option v-for="item in this.tbxx" :key="item.tbxxId" :label="item.tbxxName" :value="item.tbxxName">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>


      <el-row>
        <el-col :span="8">
          <el-form-item label="项目类型:" prop="zbwjXmlx">
            <el-input v-model="ruleForm.zbwjXmlx">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="建设单位:" prop="zbwjJsdw" clearable>
            <el-input v-model="ruleForm.zbwjJsdw">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="招标文件费:" prop="zbwjZbwjf">
            <el-input type="number" v-model="ruleForm.zbwjZbwjf" @mousewheel.native.prevent></el-input>

          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="申请人:" prop="zbwjSqr">
            <el-input v-model="ruleForm.zbwjSqr">
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <el-form-item label="备注:" prop="zbwjBz">
            <el-input type="textarea" placeholder="请输入内容" v-model="ruleForm.zbwjBz" rows="5" maxlength="500"
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
          zbwjSmmc: [{
            required: true,
            message: '请选择项目名称',
            trigger: 'blur'
          }, ],
          zbwjZbwjf: [{
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
        ruleForm: {
          zbwjGmrq: '',
          zbwjBsgmbh: '',
          zbwjSmmc: '',
          zbwjXmlx: '',
          zbwjJsdw: '',
          zbwjZbwjf: '',
          zbwjSqr: '江小北',
          zbwjBz: '',
          zbwjSpjg: 0,
          tbxxBh: '',
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
            this.$post("/zbwj/zbwjAdd/" + JSON.stringify(this.ruleForm)).then(v => {
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
      this.ruleForm.zbwjGmrq = new Date();
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
