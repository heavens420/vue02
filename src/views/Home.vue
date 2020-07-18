<template>
  <div class="body">
    <div class="home"  style=" width: 70px;height: 70px;border-radius: 70px; border:black 10px;background: green;margin: auto" >
      <img alt="Vue logo" src="../assets/logo.png"
           style=" width: 50px;height: 50px;border-radius: 400%;border: 1px;background: white;margin: 10px 0 0;">
    </div>
    <div class="bottom">
      <hr>
      <h3>这是父组件</h3>
      <h4>fatherNumber:{{fatherNumber}}</h4>
      <h4>fatherName:{{fatherName}}</h4>
      <el-button type="success" size="mini" @click="changeSon1Value()">change son1's Name By $refs</el-button>
      <el-button type="warning" size="mini" @click="changeSon2Value()">change son2's Number By $refs</el-button>
      <el-button type="warning" size="mini" @click="getSon1Value()">get son1's Name By $refs</el-button>
      <el-button type="warning" size="mini" @click="getSon2Value()">get son2's Number By $refs</el-button>
      <h4 v-if = "this.name != ''">son1's Name: {{name}}</h4>
      <h4 v-if = "this.number != ''">son2's Number: {{number}}</h4>
    </div>
    <div class="middle">
<!--      ref 将子组件的data和方法注册到$refs中去  父组件可以使用$refs.son1.Son1data,或$refs.son1.Son1method()-->
      <Son1 ref="son1" :fatherAttributeName.sync="fatherName" :fatherAttributeNumber.sync="fatherNumber"></Son1>
      <Son2 ref="son2"></Son2>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src

// import Table from './table'
import Son1 from '@/components/son1'
import Son2 from '@/components/son2'
// import { Button } from 'element-ui'

export default {
  name: 'Home',
  components: {
    Son1,
    Son2
  },
  data () {
    return {
      fatherNumber: '999',
      fatherName: 'Father',
      number: '',
      name: ''
    }
  },
  methods: {
    changeSon1Value () {
      this.$refs.son1.name = 'change Son1'
      console.log(this.$refs.son1.name)
    },
    changeSon2Value () {
      this.$refs.son2.number = 666666
      console.log(this.$refs.son1.number)
    },
    getSon1Value () {
      this.name = this.$refs.son1.name
      console.log(this.name)
    },
    getSon2Value () {
      this.number = this.$refs.son2.number
    }
  }
}
</script>
