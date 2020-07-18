<template>
  <div class="ss" align="center">
    <div class="my-table">
      <el-table
        align="center"
        border
        stripe
        :data="tableData"
        :header-cell-class-name="headerStyle"
        :cell-style="cellStyle"
        style="width: 70%">
        <el-table-column
          align="center"
          prop="date">
          <template slot="header">
            <div class="a" style="margin:auto; width: 15px;height: 15px;border: green;background: green;border-radius: 3px"></div>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="name">
          <template slot="header" >
            <div class="a" style="margin:auto; width: 15px;height: 15px;border: blue;background: blue;border-radius: 3px"></div>
          </template>
        </el-table-column>
        <el-table-column
          align="center"
          prop="address">
          <template slot="header" >
            <div class="a" style="margin:auto; width: 15px;height: 15px;border: black;background: black;border-radius: 3px"></div>
          </template>
        </el-table-column>

        <el-table-column
          align="center"
          prop="phone">
          <template slot="header" >
            <div class="a" style="margin:auto; width: 15px;height: 15px;border: burlywood;background: burlywood;border-radius: 3px"></div>
          </template>
        </el-table-column>

        <!--      <el-table-column-->
        <!--        align="right">-->
        <!--        <template slot="header" slot-scope="scope">-->
        <!--          <el-input @click="jjj(scope.row)"-->
        <!--            v-model="search"-->
        <!--            size="mini"-->
        <!--            placeholder="输入关键字搜索"/>-->
        <!--        </template>-->
        <!--        <template slot-scope="scope">-->
        <!--          <el-button-->
        <!--            size="mini"-->
        <!--            @click="handleEdit(scope.$index, scope.row)">Edit</el-button>-->
        <!--          <el-button-->
        <!--            size="mini"-->
        <!--            type="danger"-->
        <!--            @click="handleDelete(scope.$index, scope.row)">Delete</el-button>-->
        <!--        </template>-->
        <!--      </el-table-column>-->
      </el-table>
    </div>
    <div class="bottom" style="width: 70%;margin-top: 10px " align="left">
      <div class="kk" style="width: 13px;height: 13px;border: #008000;background: green;display: inline-block;" /> 日期
      <div class="kk" style="width: 13px;height: 13px;border: blue;background: blue;display: inline-block; margin-left: 20px" /> 姓名
      <div class="kk" style="width: 13px;height: 13px;border: black;background: black;display: inline-block; margin-left: 20px" /> 地址
      <div class="kk" style="width: 13px;height: 13px;border: burlywood;background: burlywood;display: inline-block; margin-left: 20px" /> 电话
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'table',
  data () {
    return {
      tableData: []
    }
  },
  methods: {
    cellStyle ({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        return 'background: lightskyblue'
      }
      // else {
      //   return 'background: white'
      // }
    },
    rowStyle ({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 2) {
        return 'background: lightskyblue'
      } else {
        return 'background:black'
      }
    },
    headerStyle ({ row, column, rowIndex, columnIndex }) {
      return 'header-style'
    },
    headerRowStyle ({ row, rowIndex }) {
      if (rowIndex % 2 === 0) {
        return 'warning-row'
      } else {
        return 'success-row'
      }
    },
    async getTableData () {
      const { data: res } = await axios.get('/api/tableData')
      this.tableData = res.data
      console.log(this.tableData)
    }
  },
  created () {
    this.getTableData()
  }
}
</script>

<style scoped>
  .el-table /deep/ .header-style {
    background: antiquewhite;
    color: cornflowerblue;
  }
  .el-table >>> .warning-row th {
    background: antiquewhite;
  }
  .el-table /deep/ .success-row th {
    background: aqua;
  }
</style>
