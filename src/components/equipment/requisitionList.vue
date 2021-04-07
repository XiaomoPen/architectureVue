<template>
  <div>
    <el-card>
      <div>
        <el-row>
          <el-button style="background-color: #DFEFFC" size="small">新增</el-button>
          <el-button style="background-color: #DFEFFC" size="small">修改</el-button>
          <el-button style="background-color: #DFEFFC" size="small" @click="deleteTheEquipmentRecord"
                     :disabled="disable">删除
          </el-button>
          <el-button style="background-color: #DFEFFC" size="small">过滤</el-button>
          <el-button style="background-color: #DFEFFC" size="small">还原</el-button>
          <el-button style="background-color: #DFEFFC" size="small">打印</el-button>
          <el-button style="background-color: #DFEFFC" size="small">导入</el-button>
          <el-button style="background-color: #DFEFFC" size="small">导出</el-button>
        </el-row>
      </div>
      <el-divider></el-divider>
      <div>
        <el-form :inline="true" :model="queryConditions" class="demo-form-inline">
          <el-form-item label="部门：">
            <el-input v-model="queryConditions.departmentName" placeholder="请选择或输入"></el-input>
          </el-form-item>
          <el-form-item label="使用日期：">
            <el-date-picker
              v-model="useDate"
              format="yyyy-MM-dd" value-format="yyyy-MM-dd"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="审批状态：">
            <el-select v-model="queryConditions.region" placeholder="全部">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="领用编号：">
            <el-input v-model="queryConditions.number"></el-input>
          </el-form-item>
          <el-form-item label="设备名称：">
            <el-input v-model="queryConditions.equipmentName" placeholder="请选择或输入"></el-input>
          </el-form-item>
          <el-form-item label="申请人：">
            <el-input v-model="queryConditions.userName" placeholder="请选择或输入"></el-input>
          </el-form-item>
          <el-form-item label="申请日期：">
            <el-date-picker
              v-model="applicationDate"
              format="yyyy-MM-dd" value-format="yyyy-MM-dd"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="searchForEquipment">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div>
        <div style="text-align: center;"><h1>设备领用列表</h1></div>
      </div>
      <br>
      <div>
        <el-table
          :data="requisitionListData"
          border
          ref="multipleTable"
          @selection-change="handleSelectionChange"
          :header-cell-style="{background:'#dfeffc',color:'#2e6e9e'}"
          style="width: 100%">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            prop="receiveDrawingNumber"
            label="领用编号"
            width="145">
          </el-table-column>
          <el-table-column
            prop="equipment.equipmentName"
            label="设备名称"
            width="120">
          </el-table-column>
          <el-table-column
            prop="receiveCompany"
            label="单位"
            width="100">
          </el-table-column>
          <el-table-column
            prop="receiveModelNumber"
            label="规格型号"
            width="100">
          </el-table-column>
          <el-table-column
            prop="users.userName"
            label="申请人"
            width="100">
          </el-table-column>
          <el-table-column
            prop="departments.departmentName"
            label="部门"
            width="100">
          </el-table-column>
          <el-table-column
            prop="receiveDateOfService"
            label="申请日期"
            width="137">
          </el-table-column>
          <el-table-column
            prop="receiveDuration"
            label="时长（时）"
            width="100">
          </el-table-column>
          <el-table-column
            prop="receiveApplicationDate"
            label="使用日期"
            width="120">
          </el-table-column>
          <el-table-column
            prop="receiveProcessState"
            label="流程状态"
            width="120">
          </el-table-column>
        </el-table>
      </div>
      <div class="block">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page=pageNum
          :page-sizes=pageSizes
          :page-size=pageSize
          layout="total, sizes, prev, pager, next, jumper"
          :total=total>
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "requisitionList",
  data() {
    return {
      queryConditions: {},
      requisitionListData: [],
      multipleSelection: [],
      empAndDeptAndPosData: {},
      empAndDeptAndPosTableData: [],
      useDate: '',
      applicationDate: '',
      total: 0,
      pageNum: 0,
      pageSize: 0,
      pageSizes: [],
      disable: true,
    }
  },
  methods: {
    searchForEquipment() {
      this.initialRequisitionEquipmentList(this.pageNum, this.pageSize)
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      this.disable = this.multipleSelection.length === 0;
    },
    deleteTheEquipmentRecord() {
      let ids = [];
      this.multipleSelection.forEach(v => {
        ids.push(v.receiveDrawingNumber)
      })
      this.$del('/requisition/delRequisitionById', {id: ids}).then(r => {
        this.initialRequisitionEquipmentList(this.pageNum, this.pageSize)
      })
    },
    initialRequisitionEquipmentList(page, limit) {
      this.queryConditions.page = page;
      this.queryConditions.limit = limit;
      this.queryConditions.useDateStart = this.useDate[0];
      this.queryConditions.endOfUseDate = this.useDate[1];
      this.queryConditions.applicationDateStarts = this.applicationDate[0];
      this.queryConditions.endOfApplicationDate = this.applicationDate[1];

      this.$post('requisition/findReceiveAll', this.queryConditions).then(r => {
          console.log(r.data)
          this.requisitionListData = r.data.data.list;
          this.total = r.data.data.total
          this.pageNum = r.data.data.pageNum;
          this.pageSize = r.data.data.pageSize;
          for (let i = 10; i < 100; i++) {
            //判断当前数组下标为i的元素是否已经保存到数组
            //如果已保存，则跳过，否则将此元素保存到数组中
            if (this.pageSizes.indexOf(i) === -1) {
              if (i % 10 === 0) this.pageSizes.push(i);
            }
          }
        }
      )
    },
//每页条数
    handleSizeChange(val) {
      this.pageSize = val;
      console.log(`每页${val}条`)
      this.initialRequisitionEquipmentList(this.pageNum, val)
    }
    ,
//当前页码
    handleCurrentChange(val) {
      this.pageNum = val;
      console.log(`当前第${val}页`)
      this.initialRequisitionEquipmentList(val, this.pageSize)
    },
  },
  created() {
    this.initialRequisitionEquipmentList();
  },
  // watch: {
  //   multipleSelection: {
  //     handler(newVal) {
  //       console.log(newVal)
  //     },
  //     deep:true
  //   }
  // }
}
</script>

<style scoped>

</style>
