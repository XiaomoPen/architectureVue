<template>
  <div>
    <el-form :inline="true" :rules="rules" :model="ruleForm" ref="ruleForm" label-width="120px"
             class="demo-form-inline">
      <el-row>
        <el-col :span="24">
          <el-form-item>
            <el-button type="primary" @click="addUser(ruleForm)">添加</el-button>
          </el-form-item>
        </el-col>
      </el-row>

      <h2 style="text-align: center;">人员档案</h2>

      <h3 style="text-align: left;">基本信息</h3>

      <el-row>
        <el-col :span="8">
          <el-form-item label="编号:" prop="userNumber">
            <el-input v-model="ruleForm.userNumber" :disabled="true"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="工号:" prop="userJobNumber">
            <el-input placeholder="添加后自动生成" v-model="ruleForm.userJobNumber" :disabled="true">
            </el-input>
          </el-form-item>
        </el-col>

      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="姓名:" prop="userName">
            <el-input v-model="ruleForm.userName">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="性别:" prop="userSex" clearable>
           <el-select v-model="ruleForm.userSex" value-key="label">
            <el-option v-for="item in options" :key="item.label" :label="item.value":value="item.value"></el-option>
           </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="出生日期:" prop="userBirthday">
            <el-date-picker v-model="ruleForm.userBirthday" align="right" type="date" placeholder="选择日期"
                            :picker-options="pickerOptions">
            </el-date-picker>

          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="入职日期:" prop="tbxxName">
            <el-date-picker v-model="ruleForm.userIntime" align="right" type="date" placeholder="选择日期"
                            :picker-options="pickerOptions">
            </el-date-picker>

          </el-form-item>
        </el-col>
      </el-row>
<el-row>
  <el-col :span="8">
  <el-form-item label="转正日期:" prop="userPositive">
    <el-date-picker v-model="ruleForm.userPositive" align="right" type="date" placeholder="选择日期"
                    :picker-options="pickerOptions">
    </el-date-picker>
  </el-form-item>
  </el-col>
  <el-col :span="8">
    <el-form-item label="职位:" prop="positionNumber" clearable>
      <el-select v-model="ruleForm.positionNumber"></el-select>
    </el-form-item>
  </el-col>
</el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="部门:" prop="departmentNumber" clearable>
            <el-select v-model="ruleForm.departmentNumber"></el-select>
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
        value: '男',
        label: '男'
      }, {
        value: '女',
        label: '女'
      }],

      rules: {
        userName: [{
          required: true,
          message: '请填写姓名',
          trigger: 'blur'
        }, ],
        userSex: [{
          required: true,
          message: '请选择性别',
          trigger: 'blur'
        }, ],
        userBirthday: [{
          required: true,
          message: '请输入入职日期',
          trigger: 'blur'
        }, ],
        positionNumber: [{
          required: true,
          message: '请选择职位',
          trigger: 'blur'
        }, ],
        departmentNumber: [{
          required: true,
          message: '请选择部门',
          trigger: 'blur'
        }, ],

      },

      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        },
      },
      ruleForm: {
        userNumber: '',
        userJobNumber: '',
        userName: '',
        userSex: '男',
        userBirthday: '',
        userIntime: '',
        userPositive: '',
        userDeparture: '',
        positionNumber: '1',
        departmentNumber: '1',
        userState: 0,

      },

    };
  },
  methods: {
    addUser() {

      this.$axios.post("http://localhost:7777/tpm/add-user", this.ruleForm)
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
    this.ruleForm.tbxxDate = new Date();
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
  appearance: textfield;
}
</style>
