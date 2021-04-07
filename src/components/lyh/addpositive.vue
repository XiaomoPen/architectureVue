<template>
  <div>
    <el-form :inline="true" :rules="rules" :model="ruleForm" ref="ruleForm" label-width="120px"
             class="demo-form-inline">
      <el-row>
        <el-col :span="24">
          <el-form-item>
            <el-button type="primary" @click="addPositive()">添加</el-button>
          </el-form-item>
        </el-col>
      </el-row>

      <h2 style="text-align: center;">转正申请</h2>

      <h3 style="text-align: left;">基本信息</h3>

      <el-row>
        <el-col :span="8">
          <el-form-item label="单据编号:" prop="positiveSerial">
            <el-input v-model="ruleForm.positiveSerial" :disabled="true"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="员工:" prop="userNumber">
            <el-select v-model="ruleForm.userNumber" :value-key="userNumber" @change="findById(ruleForm.userNumber)">
              <el-option v-for="item in userList" :key="item.userNumber" :label="item.userName" :value="item.userNumber"></el-option>
            </el-select>

          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="部门名称:" prop="contractName">
            <el-input v-model="xx" :disabled="true"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="申请时间:" prop="positiveTime">
            <el-date-picker v-model="ruleForm.positiveTime" align="right" type="date" placeholder="选择日期"
                            :picker-options="pickerOptions">
            </el-date-picker>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="申请转正日期:" prop="positiveSqpositive">
            <el-date-picker v-model="ruleForm.positiveSqpositive" align="right" type="date" placeholder="选择日期"
                            :picker-options="pickerOptions">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="备注:" prop="positiveNote">
            <el-input type="textarea" placeholder="请输入内容" v-model="ruleForm.positiveNote"  maxlength="500"
                      style="width: 1200px;" show-word-limit>
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
name: "addpositive",
  data() {
    return {
      xx:'',
      userList:[],
      createList:[],
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
        positiveSerial: '',
        userNumber: '',
        positiveTime: '',
        positiveSqpositive: '',
        positiveNote: '',
        positiveState: 0,
      },

    };
  },

  methods: {
    addPositive() {

      this.$axios.post("http://localhost:7777/tpm/add-positive", this.ruleForm)
        .then((v) => {
          this.$message('添加成功！');

        })
    },
  findById(){

    this.$axios.get("http://localhost:7777/tpm/find-userId", {params: {userNumber:this.ruleForm.userNumber}})
      .then((v) => {
        this.createList=v.data.content;
      this.xx=this.createList[0].department.departmentName;
      })
  },

  },
  created() {
    // this.$get("/tbxx/queryAll").then(v => {
    //   console.log(v.data);
    //   this.ruleForm = v.data.content[0];
    // });
    this.$axios.get("http://localhost:7777/tpm/find-userList")
      .then((v) => {

        this.userList=v.data.content;

      })
  }
}
</script>

<style scoped>

</style>
