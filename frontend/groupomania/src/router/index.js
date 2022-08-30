import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/AllPostView.vue'


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
  mode: 'history',
  path: '*',
  routes
})

export default router
