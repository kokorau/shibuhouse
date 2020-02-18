import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

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
      component: () => import('./views/About.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    },
    {
      path: '/member',
      name: 'member',
      component: () => import('./views/Member.vue')
    },
    {
      path: '/archive',
      name: 'archive',
      component: () => import('./views/Archive.vue')
    },
    {
      path: '/archive/:slug',
      name: 'archive_detail',
      component: () => import('./views/Archive_detail.vue')
    }
  ]
})
