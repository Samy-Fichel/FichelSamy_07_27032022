import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'
import HomeView from '../views/AllPostView.vue'
// import Signup from '../views/SignupView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "signup" */ '../views/SignupView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "signup" */ '../views/LoginView.vue')
  }

]

const router = new VueRouter({
  redirect: '/home',
  mode: 'history',
  path: '*',
  routes
})

export default router
