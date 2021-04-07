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

      <h2 style="text-align: center;">投标项目信息登记</h2>

      <h3 style="text-align: left;">基本信息</h3>

      <el-row>
        <el-col :span="8">
          <el-form-item label="日期:" prop="tbxxDate">
            <el-date-picker v-model="ruleForm.tbxxDate" align="right" type="date" placeholder="选择日期"
              :picker-options="pickerOptions" :disabled="true">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="项目编号:" prop="tbxxBh">
            <el-input placeholder="添加后自动生成" v-model="ruleForm.tbxxBh" :disabled="true">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="投标日期:" prop="tbxxTbrq">
            <el-date-picker v-model="ruleForm.tbxxTbrq" align="right" type="date" placeholder="选择日期"
              :picker-options="pickerOptions">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="项目简介:" prop="tbxxJj">
            <el-input type="textarea" placeholder="请输入内容" v-model="ruleForm.tbxxJj" rows="5" maxlength="500"
              style="width: 1200px;" show-word-limit>
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="项目地址:" prop="tbxxDz">
            <el-input v-model="ruleForm.tbxxDz">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="预计投标费:" prop="tbxxYjtbfy" clearable>
            <el-input type="number" v-model="ruleForm.tbxxYjtbfy" @mousewheel.native.prevent></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="项目类型:" prop="tbxxLx">
            <el-select v-model="ruleForm.tbxxLx" placeholder="请选择">
              <el-option v-for="item in type" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="联系人:" prop="tbxxLxr">
            <el-input v-model="ruleForm.tbxxLxr">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="项目名称:" prop="tbxxName">
            <el-input v-model="ruleForm.tbxxName">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="项目性质:" prop="tbxxXz">
            <el-select v-model="ruleForm.tbxxXz" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="预计合同金额:" prop="tbxxYjhtje" clearable>
            <el-input type="number" v-model="ruleForm.tbxxYjhtje" @mousewheel.native.prevent></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="建设单位:" prop="tbxxJsdw">
            <el-input v-model="ruleForm.tbxxJsdw">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="投标负责人:" prop="tbxxFzr">
            <el-select v-model="ruleForm.tbxxFzr" filterable placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="联系电话:" prop="tbxxLxdh">
            <el-input v-model="ruleForm.tbxxLxdh" type="number" @mousewheel.native.prevent>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="录入人:" prop="tbxxLrr">
            <el-input v-model="ruleForm.tbxxLrr">
            </el-input>
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
        type: [{
          value: '选项1',
          label: '请选择'
        }, {
          value: '房建',
          label: '房建'
        }, {
          value: '市政',
          label: '市政'
        }, {
          value: '电力',
          label: '电力'
        }, {
          value: '水利',
          label: '水利'
        }, {
          value: '铁路6',
          label: '铁路'
        }, {
          value: '电梯',
          label: '电梯'
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
          }, {
            pattern: /^\d+(\.\d+)?$/,
            message: '请输入正确的数字',
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
          }, {
            pattern: /^\d+(\.\d+)?$/,
            message: '请输入正确的金额',
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
            }, {
              pattern: /^\d+(\.\d+)?$/,
              message: '请输入正确的金额',
              trigger: 'blur'
            },
            {
              pattern: /^1[3|4|5|7|8][0-9]\d{8}$/,
              message: '请输入正确的手机号码',
              trigger: 'blur'
            },
          ],
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
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      onSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            /* alert('添加成功!'); */
            console.log(this.ruleForm);
            this.$post("/tbxx/tbxxAdd/" + JSON.stringify(this.ruleForm)).then(v => {
              console.log(v.data.info)
              this.$message.success(v.data.info)
              this.ruleForm = {
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
      // this.$get("/tbxx/queryAll").then(v => {
      //   console.log(v.data);
      //   this.ruleForm = v.data.content[0];
      // });
      this.ruleForm.tbxxDate = new Date();
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
