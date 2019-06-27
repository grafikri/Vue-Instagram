import Vue from 'vue'
import Router from 'vue-router'
import VHome from '@/components/pages/VHome'
import VAuthProfile from '@/components/pages/VAuthProfile'
import VExplorePage from '@/components/pages/VExplorePage'
import VProfilePage from '@/components/pages/VProfilePage'



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
      component: VProfilePage
    },
    {
      path: '/explore',
      name: 'explore',
      component: VExplorePage
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: VProfilePage
    }
  ]
})
