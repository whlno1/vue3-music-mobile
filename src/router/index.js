import { createRouter, createWebHashHistory } from 'vue-router'
import Singer from '@/views/singer/Singer'
import TopList from '@/views/top-list/TopList'
import Search from '@/views/search/Search'
import UserCenter from '@/views/user-center/UserCenter'
const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    name: 'Recommend',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/recommend/Recommend.vue')
  },
  {
    path: '/singer',
    name: 'Singer',
    component: Singer
  },
  {
    path: '/top-list',
    name: 'TopList',
    component: TopList
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/user',
    name: 'User',
    component: UserCenter
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
