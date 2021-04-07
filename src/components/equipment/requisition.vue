<template>
  <div class="app-container" style="padding:0;">
    <el-card>
      <div>
        <el-row>
          <el-button style="background-color: #DFEFFC" size="small" @click="preserve">保存</el-button>
          <el-button style="background-color: #DFEFFC" size="small">保存且新增</el-button>
          <el-button style="background-color: #DFEFFC" size="small">提交审批</el-button>
          <el-button style="background-color: #DFEFFC" size="small">流程图</el-button>
          <el-button style="background-color: #DFEFFC" size="small">导入</el-button>
        </el-row>
      </div>
      <el-divider></el-divider>
      <div>
        <div style="text-align: center;"><h1 style="font-size: 25px">设备领用申请</h1></div>
      </div>
      <br>
      <div>
        <div style="width: 100%;height:100%">
          <table border="1" bordercolor="#a6c9e2" cellspacing="0" cellpadding="0">
            <thead>
            <tr>
              <td class="basicInformation" colspan="8">基本信息</td>
            </tr>

            </thead>
            <tbody>
            <tr>
              <td class="preset">申请日期：</td>
              <td class="width160" align="center">
                <el-date-picker
                  type="date"
                  class="inputBox"
                  format="yyyy-MM-dd" value-format="yyyy-MM-dd"
                  v-model="equipmentRequisitionData.receiveDateOfService"
                  :picker-options="{
                  disabledDate: time => {
                    return time.getTime() < Date.now()- 3600 * 1000 * 24
                  },
                }"
                  placeholder="选择日期">
                </el-date-picker>
              </td>
              <td class="preset">领用编号：</td>
              <td class="width160" align="center">
                <el-input class="inputBox" placeholder="保存后自动生成" disabled></el-input>
              </td>
              <td class="preset"><span style="color: red">*</span>&nbsp;设备名称：</td>
              <td class="width160" align="center">
                <el-input class="inputBox" placeholder="请选择" v-model="equipmentRequisitionData.equipmentName"
                          @focus="getDeviceName"><i
                  slot="suffix"
                  class="el-input__icon el-icon-search"></i>
                </el-input>
              </td>
              <td class="preset">规格型号：</td>
              <td class="width160" align="center">
                <el-input class="inputBox" v-model="equipmentRequisitionData.receiveModelNumber"></el-input>
              </td>
            </tr>
            <tr>
              <td class="preset">单位：</td>
              <td class="width160" align="center">
                <el-input class="inputBox" v-model="equipmentRequisitionData.receiveCompany"></el-input>
              </td>
              <td class="preset"><span style="color: red">*</span>&nbsp;所属项目：</td>
              <td class="width160" align="center">
                <el-input placeholder="请选择" class="inputBox" v-model="equipmentRequisitionData.lxxxdjBh"><i
                  slot="suffix"
                  class="el-input__icon el-icon-search"></i>
                </el-input>
              </td>
              <td class="preset">时长（时）：</td>
              <td class="width160" align="center">
                <el-input class="inputBox" v-model="equipmentRequisitionData.receiveDuration"></el-input>
              </td>
              <td class="preset">紧急程度：</td>
              <td class="width160" align="center">
                <el-select class="inputBox" v-model="equipmentRequisitionData.receiveUrgency" placeholder="请选择">
                  <el-option label="平急" value="1"></el-option>
                  <el-option label="紧急" value="2"></el-option>
                  <el-option label="特急" value="3"></el-option>
                </el-select>
              </td>
            </tr>
            <tr>
              <td class="preset">使用类型：</td>
              <td class="width160" align="center">
                <el-select class="inputBox" v-model="equipmentRequisitionData.receiveTypeOfUse" placeholder="请选择">
                  <el-option label="领用" value="1"></el-option>
                  <el-option label="借用" value="2"></el-option>
                </el-select>
              </td>
              <td class="preset"><span style="color: red">*</span>&nbsp;部门：</td>
              <td class="width160" align="center">
                <el-input class="inputBox" v-model="equipmentRequisitionData.departmentNumber"></el-input>
              </td>
              <td class="preset"><span style="color: red">*</span>&nbsp;申请人：</td>
              <td class="width160" align="center">
                <el-input class="inputBox" v-model="equipmentRequisitionData.userNumber"></el-input>
              </td>
              <td class="preset">使用日期：</td>
              <td class="width160" align="center">
                <el-date-picker
                  type="date"
                  class="inputBox"
                  format="yyyy-MM-dd" value-format="yyyy-MM-dd"
                  :picker-options="{
                  disabledDate: time => {
                    return time.getTime() < Date.now()- 3600 * 1000 * 24
                  },
                }"
                  v-model="equipmentRequisitionData.receiveApplicationDate"
                  placeholder="选择日期">
                </el-date-picker>
              </td>
            </tr>
            <tr>
              <td class="preset">申请原因：</td>
              <td class="width160 height200" align="center" colspan="7">
                <el-input
                  type="textarea"
                  :rows="5"
                  v-model="equipmentRequisitionData.receiveReason">
                </el-input>
              </td>
            </tr>
            <tr>
              <td class="preset">配置要求：</td>
              <td class="width160 height200" align="center" colspan="7">
                <el-input
                  type="textarea"
                  :rows="5"
                  v-model="equipmentRequisitionData.reRequireeceiv">
                </el-input>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

      </div>
      <device-information :parentDialogTableVisible="dialogTableVisible"
                          ref="childDeviceInformation" @name="childData" @number="childNumber"></device-information>
    </el-card>
  </div>
</template>

<script>
import deviceInformation from "../current/deviceInformation";

export default {
  components: {deviceInformation},
  data() {
    return {
      formInline: {
        user: '',
        region: ''
      },
      equipmentRequisitionData: {
        receiveDateOfService: new Date(),
        equipmentName: '',
        equipmentCategoryNumber: '',
        receiveModelNumber: '',
        receiveCompany: '',
        receiveApplicationDate: '',
        receiveTypeOfUse: '',
        departmentNumber: '101',
        userNumber: '20210405',
        receiveDuration: '',
        receiveUrgency: '',
        receiveReason: '',
        receiveRequire: '',
        lxxxdjBh: '2021040001',
      },
      dialogTableVisible: false,
      equipmentTableData: [],
    }
  },
  methods: {
    onSubmit() {
    },
    getDeviceName() {
      const formFieldName = {
        equipmentName: '设备名称',
        number: '设备编号'
      }
      let params = {};
      this.$get('/equipment/findEquipmentAll', params).then(r => {
        this.equipmentTableData = r.data.data.list;
      })
      this.$refs.childDeviceInformation.d('设备名称', formFieldName, this.equipmentTableData);
    },
    childData(name) {
      this.equipmentRequisitionData.equipmentName = name
    },
    childNumber(number) {
      this.equipmentRequisitionData.equipmentCategoryNumber = number
    },
    preserve() {
      if (this.equipmentRequisitionData.equipmentCategoryNumber !== '' && this.equipmentRequisitionData.departmentNumber !== '' && this.equipmentRequisitionData.userNumber !== '' && this.equipmentRequisitionData.lxxxdjBh !== '') {
        this.$put('/requisition/addRequisitionApplication', this.equipmentRequisitionData).then(r => {
          console.log(r.data)
        })
      } else {
        this.$message('请将必填项填写完成！')
      }
    }
  }
}
</script>
<style scoped>
@import "../../../static/css/equipment.css";
</style>

