import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import pagesOne from '@/pages/pagesOne'
import pagesTwo from '@/pages/pagesTwo'
import PagesThree from '@/pages/pagesThree' //这里是子路由的配置现场
import PagesThree1 from '@/pages/pagesThree1'
import PagesThree2 from '@/pages/pagesThree2'
import Params from '@/pages/params' //有两种传参方式，一种标签
import Params1 from '@/pages/params1' //url传递
import Error from '@/pages/Error'
import Params2 from '@/pages/params2' //重定向到params1
import hookfunction from '@/pages/hookfunction' //钩子函数测试

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      components: { //这里表示主页面显示内容包括两个模块页的内容2.也就是单页面多路由区域操作3.一个页面两个router-view
        default: HelloWorld,
        left: pagesOne,
        right: pagesTwo
      }
    },
    {
      path: '/pagesOne', //路由地址
      name: 'pagesOne', //这个可以叫页面名称，会默认加载在该页面
      component: pagesOne //这个不能乱写会导致页面 无法显示并且,毫无报错
    },
    {
      path: '/pagesTwo', //路由地址
      name: 'pagesTwo', //这个可以叫页面名称，会默认加载在该页面
      component: pagesTwo //这个不能乱写会导致页面 无法显示并且,毫无报错
    },
    {
      path: '/pagesThree', //这里是子路由的配置现场，也就是说，就像是App目录一样的意思，app为母，其他页面都为子，也就是说子页面必须
      name: 'pagesThree', //显示母页面的内容+自己页面的内容,有几点注意1.子页面下path:"pagesThree1"不用写斜向
      component: PagesThree, //2.配置导航处必须把母页加在前面/pagesThree/pagesThree1  3.原页面不能自由访问/pagesThree1，访问不了
      children: [ //4.<router-view></router-view>母页必须加入
        {
          path: "/pagesThree",
          name: 'pagesThree',
          component: PagesThree
        },
        {
          path: "pagesThree1",
          name: 'pagesThree/pagesThree1',
          component: PagesThree1
        },
        {
          path: "pagesThree2",
          name: 'pagesThree/pagesThree2',
          component: PagesThree2
        },
      ]
    },
    {
      path: '/params', //使用了1. $route.name页面中使用，这是通过name传参数
      name: 'Params', //通过标签传参 1.注意name的大小写必须一致 2.注意标点符号 3.可以通过
      component: Params
    },
    {
      path: "/params1/:newId(\\d+)/:newTitle", //url传参 (\\表示只能传数字) 注意引用的时候为$route方法
      name: "Params1",
      component: Params1
    },
    {
      path: "*",
      component: Error
    },
    {
      path: "/params2/:newId/:newTitle", //1.重定向不能写component的，2.重地下到那个页面地址必须也带参数
      // component: params2,      //也就是用不同的地址访问同一个页面
      redirect: '/params1/:newId/:newTitle'
    },
    {
      path: "/", //1.和重定向redirect相比这个在url会显示别名地址/home 2.注意component必须写别名前地址的component地址
      component: HelloWorld,
      alias: "/home"
    },
    {
      path: "/hookfunction",
      component: hookfunction,
      beforeEnter: (to, from, next) => {
        console.log(to),
          console.log(from),
          next() //写了这个就是允许模块的跳转 or(false)
        //还可以加ture//也可以加入路径next(path:"/")
      }
    }
  ],
  mode: "history"
})
