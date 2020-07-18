import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    addcount (state) {
      this.state.count++
    },
    deccount (state, n) {
      this.state.count -= n
    }
  },

  // 异步操作在action 同步操作在mutations
  actions: {
    asyncadd (content) {
      setTimeout(() => {
        content.commit('addcount')
      }, 1000)
    },

    asyncdecN (context, step) {
      setTimeout(() => {
        context.commit('deccount', step)
      }, 1000)
    }
  },

  // getters只包装state的值不修改state的值
  getters: {
    getnum (state) {
      return '当前的count值是[' + state.count + ']'
    }
  },
  modules: {
  }
})
