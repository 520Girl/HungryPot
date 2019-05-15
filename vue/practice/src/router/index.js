import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Tab from '@/web/Tab'
import Tangxin from '@/web/Tangxin'
import Home from '@/web/Home'


Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }, {
    path: '/Tab',
    name: 'Tab',
    component: Tab
  }, {
    path: '/Tangxin',
    name: Tangxin,
    component: Tangxin
  }, {
    path: '/Home',
    name: Home,
    component: Home
  }],
  mode: 'history'
})
