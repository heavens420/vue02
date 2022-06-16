import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/list',
    name: 'Googlist',
    component: () => import('../views/googlist.vue')
  },
  {
    path: '/count',
    name: 'count',
    component: () => import('../views/count.vue')
  },
  {
    path: '/upload',
    name: 'upload',
    component: () => import('../views/upload.vue')
  },
  {
    path: '/table',
    name: 'table',
    component: () => import('../views/table.vue')
  },
  {
    path: '/table2',
    name: 'table2',
    component: () => import('../views/table2')
  },
  {
    path: '/echarts',
    name: 'echarts',
    component: () => import('../views/MyEcharts')
  },
  {
    path: '/demo1',
    name: 'demo1',
    component: () => import('../views/Demo1')
  }
]

const router = new VueRouter({
  routes
})

export default router
