import Vue from 'vue'
import VueRouter from 'vue-router'
import login from "@/views/login";
import home from "@/views/home";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/home.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
