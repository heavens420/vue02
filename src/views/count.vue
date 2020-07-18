<template>
  <div>
    <el-button type="primary" @click="inc()">+</el-button>
    <el-button type="info" @click="inc2()">inc 异步</el-button>
    <el-button type="info" @click="addcount()">inc 异步 Mutation</el-button>
<!--    Current Number : {{this.$store.state.count}}-->
    {{this.$store.getters.getnum}} ||
    {{getnum}}
    <el-button type="danger" @click="dec()">-N</el-button>
    <el-button type="info" @click="inc3()">incN 异步</el-button>
    <el-button type="info" @click="asyncdecN(3)">incN 异步 直接用</el-button>

<!--    修改默认值，不改的地方使用默认值-->
    <HelloWorld>
<!--      v-slot 在2.6.0开始替代 slot和slot-scope,但是v-slot必须在template或component中使用-->
      <template v-slot:first>
        <h4>change First slot</h4>
      </template>

      <template>
        <h4 slot="third">change Third slot</h4>
      </template>
    </HelloWorld>

<!--    通过作用域插槽 获取子组件的值-->
    <HelloWorld>
<!--      v-slot:first="scope" 等价于 slot=“first” slot-scope="scope"-->
      <template v-slot:first="scope">
        {{scope.data.join('--')}}
<!--        {{ scope.data}}-->
      </template>
      <p slot="second"></p>
      <p slot="third"></p>
    </HelloWorld>

    <h4>{{fcon}}</h4>
    <h4 id="life">{{lifeVale}}</h4>

    <ShowMoreOrLess ref="smol">
      <template v-slot:kk="scope" >
        <h4>{{scope.mydata}}</h4>
      </template>
    </ShowMoreOrLess>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
import HelloWorld from '@/components/HelloWorld'
import ShowMoreOrLess from '@/components/ShowMoreOrLess'

export default {
  data () {
    return {
      fcon: 'kkkkkkk',
      lifeVale: 'life'
    }
  },
  components: {
    HelloWorld,
    ShowMoreOrLess
  },
  methods: {
    // 该页面可以直接使用 'count','addcount' 等参数和函数
    // mutations和actions的函数 在methods中定义后 可直接用
    ...mapMutations(['addcount', 'deccount']),
    ...mapActions(['asyncadd', 'asyncdecN']),

    // mutations 操作用commit
    inc () {
      this.$store.commit('addcount')
    },
    dec () {
      this.$store.commit('deccount', 5)
    },

    // actions 操作用dispatch
    inc2 () {
      this.$store.dispatch('asyncadd')
    },
    inc3 () {
      this.$store.dispatch('asyncdecN', 3)
    },
    life () {
      console.log('生命周期测试')
    },
    getCon () {
      this.fcon = this.$refs.smol.con
      // this.$refs.smol.getContent()
      console.log(this.$refs.smol.con)
    }
  },

  // 该页面可以直接使用 'count','addcount' 等参数和函数
  // getter 和 state 的参数 在computed中 定义之后可直接用
  computed: {
    ...mapState(['count']),
    ...mapGetters(['getnum'])
  },

  // 第一个生命周期函数，也是实例创建期间的第一个生命周期函数
  beforeCreate () {
    // 在vue实例未被完全创建出来之前调用次函数，此时data和methods都未被初始化
    // 下面两行会报错
    // console.log(this.fcon)
    // this.getCon()
  },

  // 第二个生命周期函数
  created () {
    // vue实例中的数据和方法最早在此初始化，若要操作vue实例的数据和方法，最早在此
    console.log(this.fcon)
    this.life()
    // 涉及到子组件的创建过程，方法本身可被调用，但是无法获取子组件数据和方法，因为此时子组件方法和数据尚未初始化
    // this.getCon()
  },

  // 第三个生命周期函数
  beforeMount () {
    // 此方法执行之前，此时vue实例的模板已经编译完成，存在内存中，尚未渲染到页面中
    // 此时页面中的数据还是之前的数据，新的数据尚未对旧数据进行替换

    // 此时执行下面语句无法得到lifeValue的值，因为lifeValue尚未渲染到页面中去，但已加载到内存中
    // console.log(document.getElementById('life').innerText)

    // 此时子组件的数据和方法被初始化完成，父组件可以获得子组件的数据和方法
    // this.getCon()
  },

  // 第四个生命周期函数，也是实例创建期间的最后一个 生命周期函数
  mounted () {
    // 此时，内存中的模板已经挂载到页面中去，用户可以看到渲染好的页面
    // 此时再执行该语句能正常输出页面中的lifeValue值
    console.log(document.getElementById('life').innerText)

    this.getCon()
  },

  // 第五个生命周期函数，也是运行时第一个生命周期函数
  beforeUpdate () {
    // 当data中的数据发生改变时，就会触发此函数，
    // 若data中的数据不改变，此函数不会触发
    // 在执行此函数的时候，页面中的数据已经发生改变，但是页面中的数据是未改变的旧数据，新数据尚未渲染到页面
  },

  // 第六个生命周期函数，也是组后一个运行时生命周期函数
  updated () {
    // 该函数执行的时候，页面中显示的已经是更改之后的数据
    // 在beforeUpdate()和updated()函数之间，vue的虚拟dom将改变后的新数据同步到页面
  },

  // 第七个生命周期函数，也是第一个销毁阶段的生命周期函数
  beforeDestroy () {
    // 当执行到此函数的时候，页面中的所有data，methods，过滤器等都还未销毁，还处于可用阶段
  },

  // 第八个生命周期函数，也是最后一个销毁阶段的生命周期函数
  destroyed () {
    // 当执行到此函数时，vue实例所有的方法，数据和过滤器等都会失效，已被销毁
  }
}
</script>
<style>

</style>
