<template>
  <div>
    <el-form :inline="true" :rules="rules" :model="ruleForm" ref="ruleForm" label-width="120px"
             class="demo-form-inline">
      <el-row>
        <el-col :span="24">
          <el-form-item>
            <el-button type="primary" @click="addDeparture()">添加</el-button>
          </el-form-item>
        </el-col>
      </el-row>

      <h2 style="text-align: center;">离职申请单</h2>

      <h3 style="text-align: left;">基本信息</h3>

      <el-row>
        <el-col :span="8">
          <el-form-item label="单据编号:" prop="departureErial">
            <el-input v-model="ruleForm.departureErial" :disabled="true"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="姓名:" prop="userNumber">
            <el-select v-model="ruleForm.userNumber" :value-key="userNumber" @change="findById(ruleForm.userNumber)">
              <el-option v-for="item in userList" :key="item.userNumber" :label="item.userName" :value="item.userNumber"></el-option>
            </el-select>

          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="申请时间:" prop="departureTime">
            <el-date-picker v-model="ruleForm.departureTime" align="right" type="date" placeholder="选择日期"
                            :picker-options="pickerOptions">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="所在部门:" >
            <el-input v-model="xx" :disabled="true"></el-input>
          </el-form-item>
        </el-col>


        <el-col :span="8">
          <el-form-item label="所在职位:" >
          <el-input v-model="zw" :disabled="true"></el-input>
          </el-form-item>
        </el-col>


        <el-col :span="8">
          <el-form-item label="入职日期:">
            <el-date-picker v-model="rz" align="right" type="date" placeholder="选择日期"
                            :picker-options="pickerOptions" :aria-disabled="true">
            </el-date-picker>
          </el-form-item>
        </el-col>

      </el-row>


      <el-row>
        <el-col :span="8">
          <el-form-item label="离职日期:" prop="departureLztime">
            <el-date-picker v-model="ruleForm.departureLztime" align="right" type="date" placeholder="选择日期"
                            :picker-options="pickerOptions" :aria-disabled="true">
            </el-date-picker>
          </el-form-item>
        </el-col>


        <el-col :span="8">
          <el-form-item label="离职类型:" prop="departureLeix">
            <el-select v-model="ruleForm.departureLeix" >
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>

            </el-select>
          </el-form-item>
        </el-col>


        <el-col :span="8">
          <el-form-item label="离职原因:" prop="departureReason">
           <el-select v-model="ruleForm.departureReason">
          <el-option v-for="item in state" :key="item.value" :label="item.label" :value="item.value"></el-option>
           </el-select>
          </el-form-item>
        </el-col>

      </el-row>


      <el-row>
        <el-col :span="8">
          <el-form-item label="备注:" prop="positiveNote">
            <el-input type="textarea" placeholder="请输入内容" v-model="ruleForm.departureNote"  maxlength="500"
                      style="width: 1200px;height: 120px" show-word-limit>
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
name: "adddeparture",
  data() {
    return {
      xx:'',
      rz:"",
      zw:'',
      userList:[],
      createList:[],
      options: [{
        value: '主动离职',
        label: '主动离职'
      }, {
        value: '辞退',
        label: '辞退'
      }, {
        value: '合同期满',
        label: '合同期满'
      },{
        value: '退休',
        label: '退休'
      },{
        value: '病退',
        label: '病退'
      },{
        value: '辞职',
        label: '辞职'
      }],


      state: [{
        value: '另外找工作',
        label: '另外找工作'
      }, {
        value: '无法胜任工作',
        label: '无法胜任工作'
      }, {
        value: '身体原因',
        label: '身体原因'
      },{
        value: '年龄到期',
        label: '年龄到期'
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
        departureErial: '',
        userNumber: '',
        departureTime: '',
        departureLztime: '',
        departureLeix: '',
        departureReason: '',
        departureNote:'',
        departureState:0
      },

    };
  },
  methods: {
    addDeparture() {

      this.$axios.post("http://localhost:7777/tpm/add-departure", this.ruleForm)
        .then((v) => {
          this.$message('添加成功！');

        })
    },
    findById(){

      this.$axios.get("http://localhost:7777/tpm/find-userId", {params: {userNumber:this.ruleForm.userNumber}})
        .then((v) => {
          this.createList=v.data.content;
          this.xx=this.createList[0].department.departmentName;
          this.rz=this.createList[0].userIntime;
          this.zw=this.createList[0].tPmPosition.positionName;
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
