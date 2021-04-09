<template>
  <div>
    <div>
      <!-- <el-row>
        <el-button :gutter="0" type="primary" plain>新增</el-button>
      </el-row> -->
    </div>
    <div>
      <el-form :model="htxx" :rules="rules" ref="htxx" :inline="true" style="margin-left: 50px; margin-top: 50px;">
        <el-form-item style="margin-left: 400px;"><span style="font-size: 20px;font-weight:1000;">合同信息</span>
        </el-form-item><br />
        <el-form-item label="合同编号" label-width="100px" prop="htxxBh">
          <el-input v-model="htxx.htxxBh" disabled placeholder="自动生成" style="width: 300px;"></el-input>
        </el-form-item>
        <el-form-item label="合同名称" label-width="100px" prop="htxxMc">
          <el-input v-model="htxx.htxxMc" style="width: 300px;"></el-input>
        </el-form-item><br />
        <el-form-item label="客户名称" label-width="100px" prop="khxxXm">
          <!-- <el-input v-model="htxx.htxx_khhy" style="width: 300px;"></el-input> -->
          <el-select v-model="htxx.khxxXm" placeholder="请选择" style="width: 300px;">
            <el-option label="办公文教" value="办公文教"></el-option>
            <el-option label="信息产业" value="信息产业"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="负责人名称" label-width="100px" prop="userMc">
          <!-- <el-input v-model="htxx.htxx.khly" style="width: 300px;"></el-input> -->
          <el-select v-model="htxx.userMc" placeholder="请选择" style="width: 300px;">
            <el-option label="电话营销" value="电话营销"></el-option>
            <el-option label="客户介绍" value="客户介绍"></el-option>
          </el-select>
        </el-form-item><br />
        <el-form-item label="合同金额" label-width="100px" prop="thxxHtje">
          <!-- <el-select v-model="htxx.zzjgBm" placeholder="请选择部门" clearable >
            <el-option v-for="j in bmb" :label="j.bmbName" :value="j.bmbName" :key="j.bmbId"></el-option>
          </el-select> -->
          <el-input v-model="htxx.thxxHtje" style="width: 300px;"></el-input>
          <!-- <el-cascader placeholder="试试搜索" :options="options" clearable filterable></el-cascader> -->
        </el-form-item>
        <el-form-item label="签订时间" label-width="100px" prop="htxxQdrq">
          <el-date-picker v-model="htxx.htxxQdrq" type="date" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd">
          </el-date-picker>
          <!-- <el-input v-model="htxx.htxx_khdh" style="width: 300px;"></el-input> -->
        </el-form-item><br />
        <el-form-item label="合同备注" label-width="100px" prop="htxxBz">
          <el-input type="textarea" style="width: 650px;" v-model="htxx.htxxBz"></el-input>
        </el-form-item><br />

      </el-form>
      <div slot="footer" class="dialog-footer" style="margin-left: 50px;height: 200px;">
        <el-button type="primary" @click="submitForm('htxx')">确 定</el-button>
        <el-button @click="resetForm('htxx')">取 消</el-button>
        <el-button @click="resetForm('htxx')">重置</el-button>
        <!-- @click="dialogFormVisible = false" -->
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  import qs from 'qs'

  export default {

    name: 'htxxf',
    data() {
      return {
        htxx: {
          htxxBh: '',
          htxxMc: '',
          htxxQdrq: '',
          khxxXm: '',
          userNumber: '',
          thxxHtje: '',
          htxxBz: '',
          khBh: '',
          userMc: '',
        },
        rules: {
          htxxMc: [{
            required: true,
            message: '请输入合同名称',
            trigger: 'blur'
          }, ],
          htxxQdrq: [{
            required: true,
            message: '请选择日期',
            trigger: 'blur'
          }, ],
          khxxXm: [{
            required: true,
            message: '请选择',
            trigger: 'change'
          }, ],
          userMc: [{
            required: true,
            message: '请选择',
            trigger: 'change'
          }, ],
          thxxHtje: [{
            required: true,
            message: '请输入金额',
            trigger: 'blur'
          }, ],
        },
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            /* alert('添加成功!'); */
              this.$post("/xshtxx/addhtxx/" + JSON.stringify(this.htxx)).then(v => {
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
