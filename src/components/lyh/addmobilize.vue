<template>
  <div>
    <el-form :inline="true" :rules="rules" :model="ruleForm" ref="ruleForm" label-width="120px"
             class="demo-form-inline">
      <el-row>
        <el-col :span="24">
          <el-form-item>
            <el-button type="primary" @click="addMobilize()">添加</el-button>
          </el-form-item>
        </el-col>
      </el-row>

      <h2 style="text-align: center;">人事调动</h2>

      <h3 style="text-align: left;">基本信息</h3>

      <el-row>
        <el-col :span="8">
          <el-form-item label="单据编号:" prop="mobilizeSerial">
            <el-input v-model="ruleForm.mobilizeSerial" :disabled="true"></el-input>
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
          <el-form-item label="调动类型:" prop="mobilizeLeix">
           <el-select v-model="ruleForm.mobilizeLeix">
             <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">

             </el-option>
           </el-select>
          </el-form-item>
        </el-col>

      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="调动日期:" >
            <el-date-picker v-model="ruleForm.mobilizeTime" align="right" type="date" placeholder="选择日期"
                            :picker-options="pickerOptions" :aria-disabled="true">
            </el-date-picker>
          </el-form-item>
        </el-col>



        <el-col :span="8">
          <el-form-item label="目前部门:" prop="mobilizeDept">
           <el-input v-model="ruleForm.mobilizeDept" :disabled="true"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="8">
          <el-form-item label="调至部门:" prop="departmentNumber">
           <el-select v-model="ruleForm.departmentNumber">
             <el-option v-for="item in deptList" :key="item.departmentNumber" :label="item.departmentName" :value="item.departmentNumber"></el-option>
           </el-select>
          </el-form-item>
        </el-col>
      </el-row>


      <el-row>



        <el-col :span="8">
          <el-form-item label="目前岗位:" prop="mobilizeGw">
            <el-input v-model="ruleForm.mobilizeGw"></el-input>
          </el-form-item>
        </el-col>


        <el-col :span="8">
          <el-form-item label="调至岗位:" prop="positionNumber">
           <el-select v-model="ruleForm.positionNumber">
              <el-option v-for="item in gwList" :key="item.positionNumber" :label="item.positionName" :value="item.positionNumber"></el-option>
           </el-select>
          </el-form-item>
        </el-col>

      </el-row>


      <el-row>
        <el-col :span="8">
          <el-form-item label="备注:" prop="mobilizeNote">
            <el-input type="textarea" placeholder="请输入内容" v-model="ruleForm.mobilizeNote"  maxlength="500"
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
  name: "addmobilize",
  data() {
    return {
      deptList:[],
      gwList:[],
      userList:[],
      createList:[],
      options: [{
        value: '请选择',
        label: '请选择'
      }, {
        value: '平调',
        label: '平调'
      }, {
        value: '晋升',
        label: '晋升'
      },{
        value: '降职',
        label: '降职'
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
        mobilizeSerial: '',
        userNumber: '',
        userName2: '',
        mobilizeLeix: '',
        mobilizeDept: '',
        mobilizeGw:'',
        departmentNumber:'',
        positionNumber:'',
        mobilizeNote:"",
        mobilizeTime:'',
        mobilizeState:0,

      },

    };
  },
  methods: {
    addMobilize() {

      this.$axios.post("http://localhost:7777/tpm/add-mobilize", this.ruleForm)
        .then((v) => {
          this.$message('添加成功！');

        })
    },
    findById(){

      this.$axios.get("http://localhost:7777/tpm/find-userId", {params: {userNumber:this.ruleForm.userNumber}})
        .then((v) => {
          this.createList=v.data.content;
          this.ruleForm.mobilizeDept=this.createList[0].department.departmentName;
          this.ruleForm.mobilizeGw=this.createList[0].tPmPosition.positionName;
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

    this.$axios.get("http://localhost:7777/tpm/find-dept")
      .then((v) => {
        this.deptList=v.data.content;
      })
    this.$axios.get("http://localhost:7777/tpm/find-gw")
      .then((v) => {
        this.gwList=v.data.content;
      })
  }
}
</script>

<style scoped>

</style>
