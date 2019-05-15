import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Jdm from '@/components/Jdm'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }, {
    path: '/jdm',
    name: 'Jdm',
    component: Jdm
  }],
  mode: "history"
})
