import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Search from '@/components/Search'
import Details from '@/components/Details'
import Main from '@/components/Map/Main'
import Report from '@/components/Map/Report'
// 导入二级路由
import More from '@/components/Map/More'
import TourRoute from '@/components/Map/TourRoute'
import TourRouteDetails from '@/components/Map/TourRouteDetails'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/main/more',
          name: 'More',
          component: More
        },
        {
          path: '/main/tourroute',
          name: 'TourRoute',
          component: TourRoute
        },
        {
          path: '/main/tourroutedetails',
          name: 'TourRouteDetails',
          component: TourRouteDetails
        }
      ]
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
      path: '/report',
      name: 'Report',
      component: Report
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
