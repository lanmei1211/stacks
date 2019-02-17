import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    component: () =>
      import ('@/views/Home.vue')
  }, {
    path: '/bmap',
    name: 'bmap',
    component: () =>
      import ('@/views/bmap.vue')
  }]
})
