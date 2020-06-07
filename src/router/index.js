import Vue from 'vue'
import VueRouter from 'vue-router'
import UserProfile from '../views/UserProfile.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/improvments-list',
    name: 'Improvments',
    component: () => import(/* webpackChunkName: "ImprovmentsList" */ '../views/Improvments.vue')
  },
  {
    path: '/create-improvment',
    name: 'CreateImprovment',
    component: () => import(/* webpackChunkName: "CreateImprovment" */ '../views/CreateImprovment.vue')
  }
  ,
  {
    path: '/improvment/:id',
    name: 'ImprovmentItem',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/ImprovmentItem.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
