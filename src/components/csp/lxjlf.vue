<template>
  <div>
    <div>
      <!-- <el-row>
        <el-button :gutter="0" type="primary" plain>新增</el-button>
      </el-row> -->
    </div>
    <div>
      <el-form :model="lxjl" :rules="rules" ref="lxjl" :inline="true" style="margin-left: 50px; margin-top: 50px;">
        <el-form-item style="margin-left: 400px;"><span style="font-size: 20px;font-weight:1000;">合同信息</span>
        </el-form-item><br />
        <el-form-item label="客户姓名" label-width="100px" prop="lxjl_xm">
          <!-- <el-input v-model="lxjl.lxjl_xm" style="width: 300px;"></el-input> -->
          <el-select v-model="lxjl.lxjl_xm" placeholder="请选择" style="width: 300px;">
            <el-option label="需求定义" value="需求定义"></el-option>
            <el-option label="选择比较" value="选择比较"></el-option>
            <el-option label="购买决定" value="购买决定"></el-option>
            <el-option label="合同签订" value="合同签订"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="负责人名称" label-width="100px" prop="user_mc">
          <!-- <el-input v-model="lxjl.lxjl_khlx" style="width: 300px;"></el-input> -->
          <el-select v-model="lxjl.user_mc" placeholder="请选择" style="width: 300px;">
            <el-option label="需求定义" value="需求定义"></el-option>
            <el-option label="选择比较" value="选择比较"></el-option>
            <el-option label="购买决定" value="购买决定"></el-option>
            <el-option label="合同签订" value="合同签订"></el-option>
          </el-select>
        </el-form-item><br />
        <el-form-item label="记录阶段" label-width="100px" prop="lxjl_jd">
          <!-- <el-input v-model="lxjl.lxjl_khhy" style="width: 300px;"></el-input> -->
          <el-select v-model="lxjl.lxjl_jd" placeholder="请选择行业" style="width: 300px;">
            <el-option label="需求定义" value="需求定义"></el-option>
            <el-option label="选择比较" value="选择比较"></el-option>
            <el-option label="购买决定" value="购买决定"></el-option>
            <el-option label="合同签订" value="合同签订"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="记录时间" label-width="100px" prop="lxjl_sj">
          <!-- <el-input v-model="lxjl.lxjl.khly" style="width: 300px;"></el-input> -->
            <el-date-picker v-model="lxjl.lxjl_sj" type="date" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd">
            </el-date-picker>
        </el-form-item><br />
        <el-form-item label="记录方式" label-width="100px" prop="lxjl_fs">
          <!-- <el-select v-model="lxjl.zzjgBm" placeholder="请选择部门" clearable >
            <el-option v-for="j in bmb" :label="j.bmbName" :value="j.bmbName" :key="j.bmbId"></el-option>
          </el-select> -->
          <el-select v-model="lxjl.lxjl_fs" placeholder="请选择星级">
            <el-option label="上门拜访" value="上门拜访"></el-option>
            <el-option label="电话沟通" value="电话沟通"></el-option>
            <el-option label="QQ联系" value="QQ联系"></el-option>
          </el-select>
          <!-- <el-input v-model="RsYgjcxx.zzjgBm" style="width: 300px;" ></el-input> -->
          <!-- <el-cascader placeholder="试试搜索" :options="options" clearable filterable></el-cascader> -->
        </el-form-item><br />
        <el-form-item label="联系记录" label-width="100px" prop="lxjl_xq">
            <el-input type="textarea" style="width: 650px;" v-model="lxjl.lxjl_xq"></el-input>
          </el-form-item><br />
        <el-form-item label="下次记录时间" label-width="100px" prop="lxjl_xcsj">
          <!-- <el-input v-model="lxjl.lxjl.khly" style="width: 300px;"></el-input> -->
            <el-date-picker v-model="lxjl.lxjl_xcsj" type="date" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd">
            </el-date-picker>
        </el-form-item>
        <el-form-item label="下次联系目标" label-width="100px" prop="lxjl_xcmb">
          <el-input v-model="lxjl.lxjl_xcmb" style="width: 300px;"></el-input>
        </el-form-item><br />
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
        <el-button type="primary" @click="submitForm('lxjl')">确 定</el-button>
        <el-button @click="resetForm('lxjl')">取 消</el-button>
        <el-button @click="resetForm('lxjl')">重置</el-button>
        <!-- @click="dialogFormVisible = false" -->
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  import qs from 'qs'

  export default {

    name: 'lxjlf',
    data() {
      return {
        lxjl: {
          lxjl_bh: '',
          khxx_xm: '',
          user_number: '',
          lxjl_jd: '',
          lxjl_sj: '',
          lxjl_fs: '',
          lxjl_xq: '',
          lxjl_xcsj: '',
          lxjl_xcmb: '',
          user_mc: '',
          khxx_bh:'',
        },
        rules: {
          lxjl_xm: [{
            required: true,
            message: '请选择',
            trigger: 'change'
            },
          ],
          user_mc: [{
              required: true,
              message: '请选择',
              trigger: 'change'
            },
          ],
          lxjl_jd: [{
              required: true,
              message: '请选择',
              trigger: 'change'
            },
          ],
          lxjl_sj: [{
            required: true,
            message: '请选择',
            trigger: 'blur'
          }, ],
          lxjl_fs: [{
            required: true,
            message: '请选择',
            trigger: 'change'
          }, ],
          lxjl_xq: [{
            required: true,
            message: '请写入记录',
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
