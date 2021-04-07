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
        <div style="text-align: center;"><h1>设备领用申请</h1></div>
      </div>
      <br>
      <div>
        <div
          style="width:1579px;line-height: 40px;background-color: #f1f6ff;height: 40px;border: 1px solid #a6c9e2;border-bottom-style:none;">
          <p>基本信息</p>
        </div>
        <table border="1" bordercolor="#a6c9e2" cellspacing="0" cellpadding="0">
          <tbody>
          <tr>
            <td width="150px" height="50px" align="right" bgcolor="#f1f9fe">申请日期：</td>
            <td width="240px" align="center">
              <el-date-picker
                type="date"
                format="yyyy-MM-dd" value-format="yyyy-MM-dd"
                v-model="equipmentRequisitionData.receiveDateOfService"
                placeholder="选择日期">
              </el-date-picker>
            </td>
            <td width="150px" height="50px" align="right" bgcolor="#f1f9fe">领用编号：</td>
            <td width="240px" align="center">
              <el-input placeholder="保存后自动生成" disabled style="width: 219.44px"></el-input>
            </td>
            <td width="150px" align="right" bgcolor="#f1f9fe">设备名称：</td>
            <td width="240px" align="center">
              <el-input placeholder="请选择" v-model="equipmentRequisitionData.equipmentName"
                        style="width: 219.44px"
                        @focus="getDeviceName"><i
                slot="suffix"
                class="el-input__icon el-icon-search"></i>
              </el-input>
            </td>
            <td width="150px" align="right" bgcolor="#f1f9fe">规格型号：</td>
            <td width="240px" align="center">
              <el-input style="width: 219.44px" v-model="equipmentRequisitionData.receiveModelNumber"></el-input>
            </td>
          </tr>
          <tr>
            <td width="150px" height="50px" align="right" bgcolor="#f1f9fe">单位：</td>
            <td width="240px" align="center">
              <el-input style="width: 219.44px" v-model="equipmentRequisitionData.receiveCompany"></el-input>
            </td>
            <td width="150px" align="right" bgcolor="#f1f9fe"><span style="color: red">*</span>&nbsp;所属项目：</td>
            <td width="240px" align="center">
              <el-input placeholder="请选择" style="width: 219.44px"><i slot="suffix"
                                                                     class="el-input__icon el-icon-search"></i>
              </el-input>
            </td>
            <td width="150px" align="right" bgcolor="#f1f9fe">时长（时）：</td>
            <td width="240px" align="center">
              <el-input style="width: 219.44px" v-model="equipmentRequisitionData.receiveDuration"></el-input>
            </td>
            <td width="150px" align="right" bgcolor="#f1f9fe"><span style="color: red">*</span>&nbsp;紧急程度：</td>
            <td width="240px" align="center">
              <el-select v-model="equipmentRequisitionData.receiveUrgency" placeholder="请选择">
                <el-option label="平急" value="1"></el-option>
                <el-option label="紧急" value="2"></el-option>
                <el-option label="特急" value="3"></el-option>
              </el-select>
            </td>
          </tr>
          <tr>
            <td width="150px" height="50px" align="right" bgcolor="#f1f9fe"><span style="color: red">*</span>&nbsp;使用类型：
            </td>
            <td width="240px" align="center">
              <el-select v-model="equipmentRequisitionData.receiveTypeOfUse" placeholder="请选择">
                <el-option label="领用" value="1"></el-option>
                <el-option label="借用" value="2"></el-option>
              </el-select>
            </td>
            <td width="150px" align="right" bgcolor="#f1f9fe">部门：</td>
            <td width="240px" align="center">
              <el-input style="width: 219.44px" v-model="equipmentRequisitionData.departmentNumber"></el-input>
            </td>
            <td width="150px" align="right" bgcolor="#f1f9fe">申请人：</td>
            <td width="240px" align="center">
              <el-input style="width: 219.44px" v-model="equipmentRequisitionData.userNumber"></el-input>
            </td>
            <td width="150px" align="right" bgcolor="#f1f9fe">使用日期：</td>
            <td width="240px" align="center">
              <el-date-picker
                type="date"
                format="yyyy-MM-dd" value-format="yyyy-MM-dd"
                v-model="equipmentRequisitionData.receiveApplicationDate"
                placeholder="选择日期">
              </el-date-picker>
            </td>
          </tr>
          <tr>
            <td width="150px" align="right" bgcolor="#f1f9fe" height="120px">申请原因：</td>
            <td width="240px" align="center" colspan="7">
              <textarea style="height: 100px;width: 1400px;resize:none; border-color: #a6c9e2;outline-color:#a6c9e2; "/>
            </td>
          </tr>
          <tr>
            <td width="150px" align="right" bgcolor="#f1f9fe" height="120px">配置要求：</td>
            <td width="240px" align="center" colspan="7">
              <textarea style="height: 100px;width: 1400px;resize:none; border-color: #a6c9e2;outline-color:#a6c9e2; "/>
            </td>
          </tr>
          </tbody>
        </table>
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
        receiveDateOfService: '',
        equipmentName: '',
        equipmentCategoryNumber: '',
        receiveModelNumber: '',
        receiveCompany: '',
        receiveApplicationDate: '',
        receiveTypeOfUse: '',
        departmentNumber: '',
        userNumber: '',
        receiveDuration: '',
        receiveUrgency: ''
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
      this.$post('/requisition/addRequisitionApplication', this.equipmentRequisitionData).then(r => {
        console.log(r.data)
      })
    }
  }
}
</script>
<style scoped>

</style>

