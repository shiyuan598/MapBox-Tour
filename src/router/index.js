import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Search from '@/components/Search'
import Details from '@/components/Details'
import Main from '@/components/Map/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/details',
      name: 'Details',
      component: Details
    },
    {
      path: '*',
      name: 'Main',
      component: Main
    }
  ]
})
