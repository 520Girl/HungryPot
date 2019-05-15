import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Time from '@/web/time'
import Index from '@/web/Index'
import Demo from '@/web/Demo'
import DataForm from '@/web/DataForm'
import Es from '@/web/Es'
import Es62 from '@/web/Es62'

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: "/time",
      name: "Time",
      component: Time
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/Demo',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/DataForm',
      name: 'DataForm',
      component: DataForm
    },
    {
      path: '/Es',
      name: 'Es',
      component: Es
    },
    {
      path: '/Es62',
      name: 'Es62',
      component: Es62
    }
  ],
  mode: 'history'
})
