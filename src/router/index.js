import Vue from 'vue'
import Router from 'vue-router'

// component
import Home from '@/views/Home/'
import Exhibition from '@/views/Exhibition/index'
import Car from '@/views/Car/index'
import Service from '@/views/Service/index'
import My from '@/views/My/index'
import Panel from '@/components/panel'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/exhibition',
      name: 'Exhibition',
      component: Exhibition
    },
    {
      path: '/car',
      name: 'Car',
      component: Car
    },
    {
      path: '/service',
      name: 'Service',
      component: Service
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/panel/:name',
      name: 'Panel',
      component: Panel
    }
  ]
})
