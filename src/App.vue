<template>
  <div>
    <div id="app">
      <div id="nav" v-if="show">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/list">Googlist</router-link> |
        <router-link to="/count">Count</router-link>  |
        <router-link to="/upload">Upload</router-link> |
        <router-link to="/table">Table</router-link> |
        <router-link to="/echarts">Echarts</router-link> |
        <router-link to="/demo1">Demo1</router-link>
      </div>
      <router-view/>
    </div>
    <button @click="showOrHidden" class="btn">show</button>
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      show: false
    }
  },
  methods: {
    showOrHidden () {
      this.show = !this.show
    }
  }
}
</script>
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
    position: relative;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
  .btn {
    background-color: aqua;
    position: absolute;
  }
</style>
