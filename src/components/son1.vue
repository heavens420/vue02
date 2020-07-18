<template>
    <div class="cp1">
      <h3>这是组件Son1</h3>
      <h4>number:{{number}}</h4>
      <h4>name:{{name}}</h4>
      <el-button type="danger" size="mini" @click="getFatherValue()">getFatherValue By $parent</el-button>
      <el-button type="info" size="mini" @click="changeFatherValue()">changeFatherValue By $parent</el-button>
      <h4 v-if = "this.fatherName != ''">FatherName: {{fatherName}}</h4>
      <h4 v-if = "this.fatherNumber != ''">FatherNumber: {{fatherNumber}}</h4>
      <h4>通过props方式获取父组件数据</h4>
      <h5>fatherName: {{fatherAttributeName}}</h5>
      <h5>fatherNumber: {{fatherAttributeNumber}}</h5>
      <el-button type="primary" size="mini" @click="changeFatherValueBySync()">ChangeFatherValueBySync</el-button>
      <hr>
    </div>
</template>

<script>
export default {
  name: 'son1',
  data () {
    return {
      number: 11,
      name: 'son1',
      fatherName: '',
      fatherNumber: ''
    }
  },
  // eslint-disable-next-line vue/no-dupe-keys
  props: ['fatherAttributeName', 'fatherAttributeNumber'],
  methods: {
    changeFatherValue () {
      this.$parent.fatherName = 'change Father Name'
      this.$parent.fatherNumber = 888888
    },
    getFatherValue () {
      this.fatherName = this.$parent.fatherName
      this.fatherNumber = this.$parent.fatherNumber
    },
    changeFatherValueBySync () {
      this.$emit('update:fatherAttributeName', 'chagneFatherNameBySync')
      this.$emit('update:fatherAttributeNumber', 'chagneFatherNumberBySync')
    }

  }
}
</script>

<style scoped>

</style>
