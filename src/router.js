import Vue from 'vue'
import Router from 'vue-router'
import VHome from '@/components/pages/VHome'
import VAuthProfile from '@/components/pages/VAuthProfile'
import VExplorePage from '@/components/pages/VExplorePage'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: VHome
    },
    {
      path: '/auth',
      name: 'auth',
      component: VAuthProfile
    },
    {
      path: '/explore',
      name: 'explore',
      component: VExplorePage
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: VAuthProfile
    }
  ]
})
