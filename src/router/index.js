import Vue from 'vue'
import VueRouter from 'vue-router'
import login from "@/views/login";

Vue.use(VueRouter)

const routes = [
  {
    path: '/report',
    name: 'report',
    component: () => import(/* webpackChunkName: "about" */ '../views/report.vue')
  },
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/home.vue')
  },
  {
    path: '/report',
    name: 'report',
    component: () => import(/* webpackChunkName: "about" */ '../views/report.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
