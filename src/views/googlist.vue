<template>
  <div class="good">
    <el-row>
      <el-button @click="search()" type = "primary">search</el-button>
      <el-button @click="add()" type="success">AddUser</el-button>
      <el-button @click="getUser()" type="info">getUser</el-button>
      <el-button @click="getAll()" type="warning">getALL</el-button>
      <el-button @click="sendUser()" type="danger">sendUser</el-button>
      <el-button @click="find()" type="success">Find</el-button>
      <el-button @click="One()" type="warning">One</el-button>
      <el-button @click="ApiGet(2)" type="primary">ApiGet</el-button>
    </el-row>

    <div class="a">
      <el-table :data="list" stripe style="width: 70% ;margin: auto" >
        <el-table-column label="id" prop="id"></el-table-column>
        <el-table-column label="name" prop="name"></el-table-column>
        <el-table-column label="price" prop="price"></el-table-column>
        <el-table-column label="pic" prop="pic" ><img :src="picurl"></el-table-column>
        <el-table-column label="date" prop="date"></el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        background
        :current-page=pageNum
        :page-sizes="[10, 20, 30, 40]"
        :page-size=pageSize
        layout="total, sizes, prev, pager, next, jumper"
        :total=list.length>
      </el-pagination>
    </div>

  </div>

</template>

<script>
import axios from 'axios'
// import request from '../utils/request'
import queryuser from '../api/queryuser'

export default {
  data () {
    return {
      list: [],
      pageNum: 1,
      pageSize: 10,
      picurl: 'http://dummyimage.com/70x50'
    }
  },
  methods: {
    handleSizeChange (val) {
      this.list.pageSize = val
      this.search()
    },
    handleCurrentChange (val) {
      this.list.pageNum = val
      this.search()
    },
    async search () {
      try {
        const { data: res } = await axios.get('/api/goodlist')
        this.list = res.data
        // this.picurl = res.data.pic
        console.log(this.list)
      } catch (e) {
        console.log(e)
      }
    },
    async add () {
      const { data: res } = await axios.post('/api/addgood', {
        id: 45,
        name: 'khufu',
        age: 88
      })
      console.log(res)
    },
    async getUser () {
      await queryuser.findaddone({ a: 'james', b: 233 }, { 'X-requested-With': 'nihaoazheshijie' })
        .then(res => {
          console.log(res.data)
        })
    },
    getAll () {
      axios
        .post('http://localhost:8102/2', {
          id: 2,
          name: 'hack',
          price: 34.54
        })
        .then(res => {
          console.log(res.data)
        })
        .catch(reason => console.error(reason))
    },
    // 传递数组对象
    async sendUser () {
      await axios.post('http://localhost:8102/3', [
        { id: 33, name: 'inii', age: 23.334 },
        { id: 34, name: 'nibv', age: 233.55 }])
    },

    async find () {
      try {
        const { data: res } = await axios.post('/api/find')
        console.log(res)
      } catch (e) {
        console.log(e)
      }
    },

    async One () {
      try {
        const { data: res } = await axios.post('/api/1')
        console.log(res)
      } catch (e) {
        console.log(e)
      }
    },

    async ApiGet (id) {
      try {
        const { data: res } = await axios.post(`/api/get/${id}`)
        console.log(res.data2)
      } catch (e) {
        console.log(e)
      }
    }
  },
  created () {
    this.search()
  }
}
</script>

<style></style>
