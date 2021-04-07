<template>
  <div>
    <div>
      <!-- <el-row>
        <el-button :gutter="0" type="primary" plain>新增</el-button>
      </el-row> -->
    </div>
    <div>
      <el-form :model="khxx" :rules="rules" ref="khxx" :inline="true" style="margin-left: 50px; margin-top: 50px;">
        <el-form-item style="margin-left: 400px;"><span style="font-size: 20px;font-weight:1000;">客户信息</span>
        </el-form-item><br />
        <el-form-item label="客户姓名" label-width="100px" prop="khxxXm">
          <el-input v-model="khxx.khxxXm" style="width: 300px;"></el-input>
        </el-form-item>
        <el-form-item label="客户类型" label-width="100px" prop="khxxKhlx">
          <!-- <el-input v-model="khxx.khxxKhlx" style="width: 300px;"></el-input> -->
          <el-select v-model="khxx.khxxKhlx" placeholder="请选择类型" style="width: 300px;">
            <el-option label="民营企业" value="民营企业"></el-option>
            <el-option label="外资企业" value="外资企业"></el-option>
            <el-option label="事业单位" value="事业单位"></el-option>
            <el-option label="政府单位" value="政府单位"></el-option>
          </el-select>
        </el-form-item><br />
        <el-form-item label="客户行业" label-width="100px" prop="khxxKhhy">
          <!-- <el-input v-model="khxx.khxxKhhy" style="width: 300px;"></el-input> -->
          <el-select v-model="khxx.khxxKhhy" placeholder="请选择行业" style="width: 300px;">
            <el-option label="办公文教" value="办公文教"></el-option>
            <el-option label="信息产业" value="信息产业"></el-option>
            <el-option label="石油化工" value="石油化工"></el-option>
            <el-option label="医药卫生" value="医药卫生"></el-option>
            <el-option label="交通运输" value="交通运输"></el-option>
            <el-option label="建筑建材" value="建筑建材"></el-option>
            <el-option label="服装纺织" value="服装纺织"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="客户来源" label-width="100px" prop="khxxKhly">
          <!-- <el-input v-model="khxx.khxx.khly" style="width: 300px;"></el-input> -->
          <el-select v-model="khxx.khxxKhly" placeholder="请选择来源" style="width: 300px;">
            <el-option label="电话营销" value="电话营销"></el-option>
            <el-option label="客户介绍" value="客户介绍"></el-option>
            <el-option label="朋友介绍" value="朋友介绍"></el-option>
            <el-option label="百度广告" value="百度广告"></el-option>
          </el-select>
        </el-form-item><br />
        <el-form-item label="客户等级" label-width="100px" prop="khxxKhdj">
          <!-- <el-select v-model="khxx.zzjgBm" placeholder="请选择部门" clearable >
            <el-option v-for="j in bmb" :label="j.bmbName" :value="j.bmbName" :key="j.bmbId"></el-option>
          </el-select> -->
          <el-select v-model="khxx.khxxKhdj" placeholder="请选择星级">
            <el-option label="1星" value="1星"></el-option>
            <el-option label="2星" value="2星"></el-option>
            <el-option label="3星" value="3星"></el-option>
            <el-option label="4星" value="4星"></el-option>
            <el-option label="5星" value="5星"></el-option>

          </el-select>
          <!-- <el-input v-model="RsYgjcxx.zzjgBm" style="width: 300px;" ></el-input> -->
          <!-- <el-cascader placeholder="试试搜索" :options="options" clearable filterable></el-cascader> -->
        </el-form-item>
        <el-form-item label="客户电话" label-width="100px" prop="khxxKhdh">
          <el-input v-model="khxx.khxxKhdh" style="width: 300px;"></el-input>
        </el-form-item><br />
        <el-form-item label="业务员名称" label-width="100px" prop="userMc">
          <el-input v-model="khxx.userMc" style="width: 300px;"></el-input>
        </el-form-item>
        <!-- <el-form-item label="业务员编号" label-width="100px" prop="ygjcxxRz">
          <el-date-picker v-model="RsYgjcxx.ygjcxxRz" type="date" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd"
            :picker-options="po1">
          </el-date-picker>
        </el-form-item><br /> -->
        <!-- <el-form-item label="登录密码" label-width="100px" prop="ygjcxxPwd" v-show="mmshow">
          <el-input v-model="RsYgjcxx.ygjcxxPwd" style="width: 300px;" v-show="mmshow"></el-input>
        </el-form-item> -->
      </el-form>
      <div slot="footer" class="dialog-footer" style="margin-left: 50px;height: 200px;">
        <el-button type="primary" @click="submitForm('khxx')">确 定</el-button>
        <el-button @click="resetForm('khxx')">取 消</el-button>
        <el-button @click="resetForm('khxx')">重置</el-button>
        <!-- @click="dialogFormVisible = false" -->
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  import qs from 'qs'

  export default {

    name: 'khxxf',
    data() {
      return {
        khxx: {
          khxxBh: '',
          khxxXm: '',
          khxxKhlx: '',
          khxxKhhy: '',
          khxxKhly: '',
          khxxKhdj: '',
          khxxKhdh: '',
          khxxLrsj: '',
          userNumber: '',
          userMc: '',
        },
        rules: {
          khxxXm: [{
            required: true,
            message: '请输入姓名',
            trigger: 'blur'
          }, ],
          khxxKhlx: [{
            required: true,
            message: '请选择类型',
            trigger: 'change'
          }, ],
          khxxKhhy: [{
            required: true,
            message: '请选择行业',
            trigger: 'change'
          }, ],
          khxxKhly: [{
            required: true,
            message: '请选择来源',
            trigger: 'change'
          }, ],
          khxxKhdj: [{
            required: true,
            message: '请选择客户星级',
            trigger: 'change'
          }, ],
          /* khxxKhdh: [{
              required: true,
              type: 'number',
              message: '请输入数字',
              trigger: 'blur'
            },
            {
              type: 'number',
              message: '必须为数字',
            },
          ], */
        },
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {

            this.$post("/khxx/addKhxx/" + JSON.stringify(this.khxx)).then(v => {
              console.log(v.data.info)
              this.$message.success(v.data.info);
            })

          } else {
            /* console.log('error 添加失败!!'); */
            this.$message.error("添加失败!");
            return false;
          }
        });
      },
      //重置添加表单方法
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },


    }

  }
</script>

<style>
  .el-row {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
<template>
  <div>
    <div>
      <!-- <el-row>
        <el-button :gutter="0" type="primary" plain>新增</el-button>
      </el-row> -->
    </div>
    <div>
      <el-form :model="khxx" :rules="rules" ref="khxx" :inline="true" style="margin-left: 50px; margin-top: 50px;">
        <el-form-item style="margin-left: 400px;"><span style="font-size: 20px;font-weight:1000;">客户信息</span>
        </el-form-item><br />
        <el-form-item label="客户姓名" label-width="100px" prop="khxxXm">
          <el-input v-model="khxx.khxxXm" style="width: 300px;"></el-input>
        </el-form-item>
        <el-form-item label="客户类型" label-width="100px" prop="khxxKhlx">
          <!-- <el-input v-model="khxx.khxxKhlx" style="width: 300px;"></el-input> -->
          <el-select v-model="khxx.khxxKhlx" placeholder="请选择类型" style="width: 300px;">
            <el-option label="民营企业" value="民营企业"></el-option>
            <el-option label="外资企业" value="外资企业"></el-option>
            <el-option label="事业单位" value="事业单位"></el-option>
            <el-option label="政府单位" value="政府单位"></el-option>
          </el-select>
        </el-form-item><br />
        <el-form-item label="客户行业" label-width="100px" prop="khxxKhhy">
          <!-- <el-input v-model="khxx.khxxKhhy" style="width: 300px;"></el-input> -->
          <el-select v-model="khxx.khxxKhhy" placeholder="请选择行业" style="width: 300px;">
            <el-option label="办公文教" value="办公文教"></el-option>
            <el-option label="信息产业" value="信息产业"></el-option>
            <el-option label="石油化工" value="石油化工"></el-option>
            <el-option label="医药卫生" value="医药卫生"></el-option>
            <el-option label="交通运输" value="交通运输"></el-option>
            <el-option label="建筑建材" value="建筑建材"></el-option>
            <el-option label="服装纺织" value="服装纺织"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="客户来源" label-width="100px" prop="khxxKhly">
          <!-- <el-input v-model="khxx.khxx.khly" style="width: 300px;"></el-input> -->
          <el-select v-model="khxx.khxxKhly" placeholder="请选择来源" style="width: 300px;">
            <el-option label="电话营销" value="电话营销"></el-option>
            <el-option label="客户介绍" value="客户介绍"></el-option>
            <el-option label="朋友介绍" value="朋友介绍"></el-option>
            <el-option label="百度广告" value="百度广告"></el-option>
          </el-select>
        </el-form-item><br />
        <el-form-item label="客户等级" label-width="100px" prop="khxxKhdj">
          <el-select v-model="khxx.khxxKhdj" placeholder="请选择星级">
            <el-option label="1星" value="1星"></el-option>
            <el-option label="2星" value="2星"></el-option>
            <el-option label="3星" value="3星"></el-option>
            <el-option label="4星" value="4星"></el-option>
            <el-option label="5星" value="5星"></el-option>

          </el-select>
          <!-- <el-input v-model="RsYgjcxx.zzjgBm" style="width: 300px;" ></el-input> -->
          <!-- <el-cascader placeholder="试试搜索" :options="options" clearable filterable></el-cascader> -->
        </el-form-item>
        <el-form-item label="客户电话" label-width="100px" prop="khxxKhdh">
          <el-input v-model="khxx.khxxKhdh" style="width: 300px;"></el-input>
        </el-form-item><br />
        <el-form-item label="业务员名称" label-width="100px" prop="userMc">
          <!-- <el-input v-model="khxx.userMc" style="width: 300px;"></el-input> -->
		  <el-select v-model="khxx.userMc" placeholder="选择负责人" clearable >
		    <el-option v-for="j in user" :label="j.userName" :value="j.userNumber" :key="j.userNumber"></el-option>
		  </el-select>
        </el-form-item>
        <!-- <el-form-item label="业务员编号" label-width="100px" prop="ygjcxxRz">
          <el-date-picker v-model="RsYgjcxx.ygjcxxRz" type="date" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd"
            :picker-options="po1">
          </el-date-picker>
        </el-form-item><br /> -->
        <!-- <el-form-item label="登录密码" label-width="100px" prop="ygjcxxPwd" v-show="mmshow">
          <el-input v-model="RsYgjcxx.ygjcxxPwd" style="width: 300px;" v-show="mmshow"></el-input>
        </el-form-item> -->
      </el-form>
      <div slot="footer" class="dialog-footer" style="margin-left: 50px;height: 200px;">
        <el-button type="primary" @click="submitForm('khxx')">确 定</el-button>
        <el-button @click="resetForm('khxx')">取 消</el-button>
        <el-button @click="resetForm('khxx')">重置</el-button>
        <!-- @click="dialogFormVisible = false" -->
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  import qs from 'qs'

  export default {

    name: 'khxxf',
    data() {
      return {
        khxx: {
          khxxBh: '',
          khxxXm: '',
          khxxKhlx: '',
          khxxKhhy: '',
          khxxKhly: '',
          khxxKhdj: '',
          khxxKhdh: '',
          khxxLrsj: '',
          userNumber: '',
          userMc: '',
        },
        user:[{
          userNumber:'',
          userJobNumber:'',
          userName:'',
          userSex:'',
          userBirthday:'',
          userIntime:'',
          userPositive:'',
          userDeparture:'',
          positionNumber:'',
          departmentNumber:'',
          userState:'',
        }],
        rules: {
          khxxXm: [{
            required: true,
            message: '请输入姓名',
            trigger: 'blur'
          }, ],
          khxxKhlx: [{
            required: true,
            message: '请选择类型',
            trigger: 'change'
          }, ],
          khxxKhhy: [{
            required: true,
            message: '请选择行业',
            trigger: 'change'
          }, ],
          khxxKhly: [{
            required: true,
            message: '请选择来源',
            trigger: 'change'
          }, ],
          khxxKhdj: [{
            required: true,
            message: '请选择客户星级',
            trigger: 'change'
          }, ],
          /* khxxKhdh: [{
              required: true,
              type: 'number',
              message: '请输入数字',
              trigger: 'blur'
            },
            {
              type: 'number',
              message: '必须为数字',
            },
          ], */
        },
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.khxx)
            this.$post("/khxx/addKhxx/" + JSON.stringify(this.khxx)).then(v => {
              console.log(v.data.info)
              this.$message.success(v.data.info);
              this.$refs[formName].resetFields();
            })

          } else {
            /* console.log('error 添加失败!!'); */
            this.$message.error("添加失败!");
            return false;
          }
        });
      },
      //重置添加表单方法
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
       //查询全部的员工id和姓名，用于选择负责人
       alluser:function(){
         this.$get("/khxx/queryUserId").then(v => {
           console.log(v.data);
           this.user = v.data.content;
         });
       },
    },
    created: function() {
      this.alluser();
    }

  }
</script>

<style>
  .el-row {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
