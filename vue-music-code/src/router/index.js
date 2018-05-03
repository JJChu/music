import Vue from 'vue'
import Router from 'vue-router'

import Recommend from '../views/recommend/recommend'
import Singer from '../views/singer/singer'
import Rank from '../views/rank/rank'
import Search from '../views/search/search'
import SingerDetail from '../views/singer-detail/singer-detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/singer',
      component: Singer,
      children: [{
        path: ':id',
        component: SingerDetail
      }]
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
