<template>
  <div>
    <div>
      <!-- <el-row>
        <el-button :gutter="0" type="primary" plain>新增</el-button>
      </el-row> -->
    </div>
    <div>
      <el-form :model="khfp" :rules="rules" ref="khfp" :inline="true" style="margin-left: 50px; margin-top: 50px;">
        <el-form-item style="margin-left: 400px;"><span style="font-size: 20px;font-weight:1000;">客户分配</span>
        </el-form-item><br />
        <el-form-item label="分配编号"  label-width="100px" prop="khfpBh">
          <el-input v-model="khfp.khfpBh" disabled style="width: 300px;" placeholder="系统自动生成" ></el-input>
        </el-form-item>
        <el-form-item label="客户姓名" label-width="100px" prop="khxxXm">
          <!-- <el-input v-model="khfp.khxxXm" style="width: 300px;"></el-input> -->
          <el-select v-model="khfp.khxxXm" placeholder="请选择客户" style="width: 300px;">
            <el-option label="民营企业" value="民营企业"></el-option>
            <el-option label="外资企业" value="外资企业"></el-option>
            <el-option label="事业单位" value="事业单位"></el-option>
            <el-option label="政府单位" value="政府单位"></el-option>
          </el-select>
        </el-form-item><br />
        <el-form-item label="客户类型" label-width="100px" prop="khxxKhlx">
          <!-- <el-input v-model="khfp.khxxKhlx" style="width: 300px;"></el-input> -->
          <el-input v-model="khfp.khxxKhlx"  style="width: 300px;"></el-input>
        </el-form-item>
        <el-form-item label="客户行业" label-width="100px" prop="khxxKhhy">
          <el-input v-model="khfp.khxxKhhy" style="width: 300px;"></el-input>
        </el-form-item><br />
        <el-form-item label="业务员编号" label-width="100px" prop="userNumber">
          <!-- <el-select v-model="khfp.zzjgBm" placeholder="请选择部门" clearable >
            <el-option v-for="j in bmb" :label="j.bmbName" :value="j.bmbName" :key="j.bmbId"></el-option>
          </el-select> -->
          <el-select v-model="khfp.userNumber" placeholder="请选择业务员" style="width: 300px;">
            <el-option label="民营企业" value="民营企业"></el-option>
            <el-option label="外资企业" value="外资企业"></el-option>
            <el-option label="事业单位" value="事业单位"></el-option>
            <el-option label="政府单位" value="政府单位"></el-option>
          </el-select>

          <!-- <el-input v-model="RsYgjcxx.zzjgBm" style="width: 300px;" ></el-input> -->
          <!-- <el-cascader placeholder="试试搜索" :options="options" clearable filterable></el-cascader> -->
        </el-form-item>
        <el-form-item label="业务员名称" label-width="100px" prop="userMc">
          <!-- <el-input v-model="khfp.userMc" style="width: 300px;"></el-input> -->
          <el-input v-model="khfp.userMc" style="width: 300px;"></el-input>
        </el-form-item><br />
        <!-- <el-form-item label="登录密码" label-width="100px" prop="ygjcxxPwd" v-show="mmshow">
          <el-input v-model="RsYgjcxx.ygjcxxPwd" style="width: 300px;" v-show="mmshow"></el-input>
        </el-form-item> -->
      </el-form>
      <div slot="footer" class="dialog-footer" style="margin-left: 50px;height: 200px;">
        <el-button type="primary" @click="submitForm('khfp')">确 定</el-button>
        <el-button @click="resetForm('khfp')">取 消</el-button>
        <el-button @click="resetForm('khfp')">重置</el-button>
        <!-- @click="dialogFormVisible = false" -->
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  import qs from 'qs'

  export default {

    name: 'khfpf',
    data() {
      return {
        khfp: {
          khfpBh: '',
          khxxXm: '',
          khxxKhlx: '',
          khxxKhhy: '',
          userNumber: '',
          khBh: '',
          userMc: '',
        },
        rules: {
          khxxXm: [{
            required: true,
            message: '请选择客户',
            trigger: 'blur'
            },
          ],
          userNumber: [{
            required: true,
            message: '请选择业务员',
            trigger: 'change'
          }, ],
          /* khfp_khdh: [{
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
            /* alert('添加成功!'); */
              this.$post("/khfp/addKhfp/" + JSON.stringify(this.khfp)).then(v => {
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
