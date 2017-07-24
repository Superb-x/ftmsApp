import Vue from 'vue'
import Router from 'vue-router'

// component
import Home from '@/views/Home'
import Exhibition from '@/views/Exhibition'
import Car from '@/views/Car'
import Service from '@/views/Service'
import My from '@/views/My'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
