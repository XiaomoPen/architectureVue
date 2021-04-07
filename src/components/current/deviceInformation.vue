<template>
  <div>
    <!--    <el-button type="text" @click="d">打开嵌套表格的 Dialog</el-button>-->

    <el-dialog width="1200px" :title="title" :visible.sync="dialogTableVisible">
      <div>
        <el-row>
          <el-button style="background-color: #DFEFFC" size="medium" @click="preserve">保存</el-button>
          <el-button style="background-color: #DFEFFC" size="medium" @click="cancel">取消</el-button>
          <el-input placeholder="请输入设备名称" v-model="nameSearch" style="width: 300px;"></el-input>
          <el-button style="background-color: #DFEFFC" size="medium" @click="inquiry">查询</el-button>
        </el-row>

      </div>
      <div>
        <el-table
          :data="tabularData"
          border
          ref="multipleTable"
          @row-click="singleElection"
          style="width: 100%">
          <el-table-column
            width="55">
            <template slot-scope="scope">
              <el-radio class="radio" v-model="templateSelection" :label="scope.$index">&nbsp;</el-radio>
            </template>
          </el-table-column>
          <el-table-column
            prop="equipmentName"
            :label="formFieldName.equipmentName"
            width="220.8">
          </el-table-column>
          <el-table-column
            prop="equipmentNumber"
            :label="formFieldName.number"
            width="220.8">
          </el-table-column>
          <el-table-column
            prop="equipmentBrand"
            label="品牌"
            width="220.8">
          </el-table-column>
          <el-table-column
            prop="equipmentModel"
            label="规格型号"
            width="220.8">
          </el-table-column>
          <el-table-column
            prop="equipmentUnit"
            label="单位"
            width="220.8">
          </el-table-column>
        </el-table>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "deviceInformation",
  props: {parentDialogTableVisible: Boolean},
  data() {
    return {
      dialogTableVisible: false,
      title: '',
      nameSearch: '',
      formFieldName: {},
      tabularData: [],
      templateSelection: '',
      templateRadio: '',
      templateNumber: '',
    }
  },
  methods: {
    d(title, formFieldName, tabularData) {
      this.formFieldName = formFieldName
      this.title = title
      this.tabularData = tabularData
      this.dialogTableVisible = true
    },
    singleElection(row) {
      this.templateSelection = this.tabularData.indexOf(row);
      this.templateRadio = row.equipmentName;
      this.templateNumber = row.equipmentCategoryNumber;
    },
    cancel() {
      this.dialogTableVisible = false
    },
    preserve() {
      this.dialogTableVisible = false
      this.$emit('name', this.templateRadio)
      this.$emit('number', this.templateNumber)
    },
    inquiry() {
      this.$get('/equipment/findEquipmentAll', {equipmentName: this.nameSearch}).then(r => {
        this.tabularData = r.data.data.list
      })
    }
  }
}
</script>

<style scoped>

</style>
