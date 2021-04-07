<template>
  <div>
    <div>
      <!-- <el-row>
        <el-button :gutter="0" type="primary" plain>新增</el-button>
      </el-row> -->
    </div>
    <div>
      <el-form :model="lxr" :rules="rules" ref="lxr" :inline="true" style="margin-left: 50px; margin-top: 50px;">
        <el-form-item style="margin-left: 400px;"><span style="font-size: 20px;font-weight:1000;">客户联系人</span>
        </el-form-item><br />
        <el-form-item label="客户编号" label-width="100px" prop="khxxBh">
          <el-input v-model="lxr.khxxBh" disabled placeholder="自动生成" style="width: 300px;"></el-input>
        </el-form-item>
        <el-form-item label="客户姓名" label-width="100px" prop="khxxXm">
          <!-- <el-input v-model="lxr.lxr_khlx" style="width: 300px;"></el-input> -->
          <el-select v-model="lxr.khxxXm" placeholder="请选择客户" style="width: 300px;">
            <el-option label="民营企业" value="民营企业"></el-option>
            <el-option label="外资企业" value="外资企业"></el-option>
            <el-option label="事业单位" value="事业单位"></el-option>
            <el-option label="政府单位" value="政府单位"></el-option>
          </el-select>
        </el-form-item><br />
        <el-form-item label="联系人姓名" label-width="100px" prop="lxrXm">
          <el-input v-model="lxr.lxrXm" style="width: 300px;"></el-input>
          <!-- <el-select v-model="lxr.lxrXm" placeholder="请选择行业" style="width: 300px;">
            <el-option label="办公文教" value="办公文教"></el-option>
            <el-option label="信息产业" value="信息产业"></el-option>
            <el-option label="石油化工" value="石油化工"></el-option>
            <el-option label="医药卫生" value="医药卫生"></el-option>
            <el-option label="交通运输" value="交通运输"></el-option>
            <el-option label="建筑建材" value="建筑建材"></el-option>
            <el-option label="服装纺织" value="服装纺织"></el-option>
          </el-select> -->
        </el-form-item>
        <el-form-item label="联系人电话" label-width="100px" prop="lxrDh">
          <el-input v-model="lxr.lxrDh" style="width: 300px;"></el-input>
          <!-- <el-select v-model="lxr.lxrDh" placeholder="请选择来源" style="width: 300px;">
            <el-option label="电话营销" value="电话营销"></el-option>
            <el-option label="客户介绍" value="客户介绍"></el-option>
            <el-option label="朋友介绍" value="朋友介绍"></el-option>
            <el-option label="百度广告" value="百度广告"></el-option>
          </el-select> -->
        </el-form-item><br />
        <el-form-item label="联系人职位" label-width="100px" prop="lxrZw">
          <el-input v-model="lxr.lxrZw" style="width: 300px;"></el-input>
          <!-- <el-cascader placeholder="试试搜索" :options="options" clearable filterable></el-cascader> -->
        </el-form-item>
        <el-form-item label="影响力" label-width="100px" prop="lxrYxl">
          <!-- <el-input v-model="lxr.lxrYxl" style="width: 300px;"></el-input> -->
          <el-select v-model="lxr.lxrYxl" placeholder="请选择" style="width: 300px;">
            <el-option label="推荐者" value="推荐者"></el-option>
            <el-option label="决策者" value="决策者"></el-option>
            <el-option label="使用者" value="使用者"></el-option>
          </el-select>
        </el-form-item><br />
        <el-form-item label="联系人状态" label-width="100px" prop="lxrZt">
          <el-select v-model="lxr.lxrZt" placeholder="请选择" style="width: 300px;">
            <el-option label="在职" value="在职"></el-option>
            <el-option label="离职" value="离职"></el-option>
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
        <el-button type="primary" @click="submitForm('lxr')">确 定</el-button>
        <el-button @click="resetForm('lxr')">取 消</el-button>
        <el-button @click="resetForm('lxr')">重置</el-button>
        <!-- @click="dialogFormVisible = false" -->
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  import qs from 'qs'

  export default {

    name: 'khlxrf',
    data() {
      return {
        lxr: {
          lxrBh: '',
          khxxBh: '',
          lxrXm: '',
          lxrDh: '',
          lxrZw: '',
          lxrYxl: '',
          lxrZt: '',
          khxxXm: '',
        },
        rules: {
          lxrXm: [{
            required: true,
            message: '请输入联系人姓名',
            trigger: 'blur'
          }, ],
          lxrYxl: [{
            required: true,
            message: '请选择',
            trigger: 'change'
          }, ],
          lxrZt: [{
            required: true,
            message: '请选择',
            trigger: 'change'
          }, ],
          lxrDh: [{
            required: true,
            message: '请输入联系人电话',
            trigger: 'blur'
          }, ],
          khxxXm: [{
            required: true,
            message: '请选择客户',
            trigger: 'change'
          }, ],
        },
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            /* alert('添加成功!'); */
            this.$post("/lxr/addlxr/" + JSON.stringify(this.lxr)).then(v => {
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
