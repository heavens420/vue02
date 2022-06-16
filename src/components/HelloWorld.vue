<template>
  <div class="hello" style="margin-top: 20px">
    <h2>标题2222222222222</h2>
<!--    给出默认值-->
<!--    绑定list 父组件通过slot-scope获取子组件的值-->
    <slot name="first" :data = list><h4>First slot</h4></slot>
    <slot name="second"><h4>it is default value Second slot</h4></slot>
    <slot name="third"><h4>Third slot</h4></slot>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      list: ['l', 'y', 'q', 'a', 'q']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
