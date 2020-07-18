<template>
    <div class="a">
      <div class="b" :style="{height: unfold ? 'auto' : myheight}" style="overflow: hidden;width: 70%;margin: auto">
        <h3>三字不通</h3>
        <h4 style="margin-left: 50%">作者:mockJS</h4>
        <slot name="kk" :mydata=con></slot>
      </div>
      <div class="c">
        <el-button type="text" style="font-size: 20px" @click="moreOrless">{{unfold?less:more}}</el-button>
      </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ShowMoreOrLess',
  data () {
    return {
      unfold: false,
      myheight: '606px',
      con: 'nihaoa',
      more: '显示更多',
      less: '收起'
    }
  },
  methods: {
    moreOrless () {
      this.unfold = !this.unfold
    },
    async getContent () {
      const { data: res } = await axios.get('/api/getContent')
      this.con = res.data.con
      // console.log(res.data.con)
      // console.log(this.con)
    }
  },
  created () {
    this.getContent()
  }
}
</script>

<style scoped>

</style>
