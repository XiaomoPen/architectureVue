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
        <el-form-item label="客户姓名" label-width="100px" prop="khxx_xm">
          <el-input v-model="khxx.khxx_xm" style="width: 300px;"></el-input>
        </el-form-item>
        <el-form-item label="客户类型" label-width="100px" prop="khxx_khlx">
          <!-- <el-input v-model="khxx.khxx_khlx" style="width: 300px;"></el-input> -->
          <el-select v-model="khxx.khxx_khlx" placeholder="请选择类型" style="width: 300px;">
            <el-option label="民营企业" value="民营企业"></el-option>
            <el-option label="外资企业" value="外资企业"></el-option>
            <el-option label="事业单位" value="事业单位"></el-option>
            <el-option label="政府单位" value="政府单位"></el-option>
          </el-select>
        </el-form-item><br />
        <el-form-item label="客户行业" label-width="100px" prop="khxx_khhy">
          <!-- <el-input v-model="khxx.khxx_khhy" style="width: 300px;"></el-input> -->
          <el-select v-model="khxx.khxx_khhy" placeholder="请选择行业" style="width: 300px;">
            <el-option label="办公文教" value="办公文教"></el-option>
            <el-option label="信息产业" value="信息产业"></el-option>
            <el-option label="石油化工" value="石油化工"></el-option>
            <el-option label="医药卫生" value="医药卫生"></el-option>
            <el-option label="交通运输" value="交通运输"></el-option>
            <el-option label="建筑建材" value="建筑建材"></el-option>
            <el-option label="服装纺织" value="服装纺织"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="客户来源" label-width="100px" prop="khxx_khly">
          <!-- <el-input v-model="khxx.khxx.khly" style="width: 300px;"></el-input> -->
          <el-select v-model="khxx.khxx_khly" placeholder="请选择来源" style="width: 300px;">
            <el-option label="电话营销" value="电话营销"></el-option>
            <el-option label="客户介绍" value="客户介绍"></el-option>
            <el-option label="朋友介绍" value="朋友介绍"></el-option>
            <el-option label="百度广告" value="百度广告"></el-option>
          </el-select>
        </el-form-item><br />
        <el-form-item label="客户等级" label-width="100px" prop="khxx_khdj">
          <!-- <el-select v-model="khxx.zzjgBm" placeholder="请选择部门" clearable >
            <el-option v-for="j in bmb" :label="j.bmbName" :value="j.bmbName" :key="j.bmbId"></el-option>
          </el-select> -->
          <el-select v-model="khxx.khxx_khdj" placeholder="请选择星级">
            <el-option label="1星" value="1星"></el-option>
            <el-option label="2星" value="2星"></el-option>
            <el-option label="3星" value="3星"></el-option>
            <el-option label="4星" value="4星"></el-option>
            <el-option label="5星" value="5星"></el-option>

          </el-select>
          <!-- <el-input v-model="RsYgjcxx.zzjgBm" style="width: 300px;" ></el-input> -->
          <!-- <el-cascader placeholder="试试搜索" :options="options" clearable filterable></el-cascader> -->
        </el-form-item>
        <el-form-item label="客户电话" label-width="100px" prop="khxx_khdh">
          <el-input v-model="khxx.khxx_khdh" style="width: 300px;"></el-input>
        </el-form-item><br />
        <el-form-item label="业务员名称" label-width="100px" prop="user_mc">
          <el-input v-model="khxx.user_mc" style="width: 300px;"></el-input>
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

    name: 'test2',
    data() {
      return {
        khxx: {
          khxx_bh: '',
          khxx_xm: '',
          khxx_khlx: '',
          khxx_khhy: '',
          khxx_khly: '',
          khxx_khdj: '',
          khxx_khdh: '',
          khxx_lrsj: '',
          user_number: '',
          user_mc: '',
        },
        rules: {
          khxx_xm: [{
            required: true,
            message: '请输入姓名',
            trigger: 'blur'
            },
          ],
          khxx_khlx: [{
              required: true,
              message: '请选择类型',
              trigger: 'change'
            },
          ],
          khxx_khhy: [{
              required: true,
              message: '请选择行业',
              trigger: 'change'
            },
          ],
          khxx_khly: [{
            required: true,
            message: '请选择来源',
            trigger: 'change'
          }, ],
          khxx_khdj: [{
            required: true,
            message: '请选择客户星级',
            trigger: 'change'
          }, ],
          /* khxx_khdh: [{
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
