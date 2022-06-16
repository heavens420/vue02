<template>
  <div class="el-main">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        label="日期"
        width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px" v-if="scope.row.date === tableData[0].date">{{ scope.row.date }}</span>
          <span style="margin-left: 10px;background-color: palegreen" v-else>{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px" v-if="scope.row.name === tableData[0].name">{{ scope.row.name}}</span>
          <span style="margin-left: 10px;background-color: green" v-else>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
        <template slot-scope="scope">
          <span style="margin-left: 10px" v-if="scope.row.address === tableData[0].address">{{ scope.row.address}}</span>
          <span style="margin-left: 10px;background-color: cadetblue" v-else>{{ scope.row.address }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'table2',
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王er虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王san虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1512 弄'
      }]
    }
  }
}
</script>

<style scoped>

</style>
