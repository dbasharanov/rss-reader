import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    { 
      path: '/login', 
      component: Login 
    },
    { 
      path: '/signup', 
      component: Signup 
    },
    { 
      path: '*', 
      redirect: '/' 
    }
  ]
})

