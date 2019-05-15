import Vue from 'vue' //引入vue
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/pages/index'
import Content from '@/pages/content'
import Sass from '@/pages/sass'
import Text from '@/components/text'
import Sass1 from '@/pages/sass1'
import Sass2 from '@/pages/sass2'
import Hi from '@/web/Hi'
import Hi1 from '@/web/Hi1'
import Hi2 from '@/web/Hi2'
import params from '@/web/params'
import Error from '@/web/Error'
import Demo from '@/web/Demo'
import Demo1 from '@/web/demo1'
import Demo2 from '@/web/Demo2'
import Test from '@/components/test'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/', //路由地址
      name: 'HelloWorld', //路由名称
      components: { //对应组件模块
        default: HelloWorld,
        left: Hi1,
        right: Hi2,
      },
      alias: "/home" //请别名
    },
    {
      path: '/ruan', //路由地址
      name: 'HelloWorld', //路由名称
      components: { //对应组件模块
        default: HelloWorld,
        left: Hi2,
        right: Hi1,
      }
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/content/:articleId', //表示在content页面传出id，只有当有id时才能生效http://localhost:8080/content/44
      name: 'Content',
      component: Content
    },
    {
      path: '/sass',
      component: Sass,
      children: [{
          path: "/sass1",
          component: Sass1
        },
        {
          path: "/sass2",
          component: Sass2
        }
      ]
    },
    {
      path: '/text',
      name: 'Text',
      component: Text,
      alias: "/text1" //请别名
    },
    {
      path: '/Hi',
      name: 'Hi',
      component: Hi,
      children: [{
          path: "/",
          name: "hello/Hi",
          component: Hi
        },
        {
          path: "Hi1",
          name: "Hi1",
          component: Hi1
        },
        {
          path: "Hi2",
          name: "Hi2",
          component: Hi2
        }
      ]
    },
    {
      path: '/params/:newsId(\\d+)/:newsTitle', //规定id只能传数字
      name: 'params',
      component: params,
      beforeEnter: (to, from, next) => {
        console.log(to),
          console.log(from),
          next() //写了这个就是允许模块的跳转 or(false)
        //还可以加ture//也可以加入路径next(path:"/")
      }
    }, {
      path: "/goHome",
      name: 'goHome',
      redirect: '/' //重定向到首页
    }, {
      path: "/goParams/:newsId(\\d+)/:newsTitle",
      name: 'goParams',
      redirect: '/params/:newsId(\\d+)/:newsTitle' //重定向到首页
    },
    { //404
      path: "*",
      component: Error
    },
    { //demo 测试
      path: "/demo",
      name: "Demo",
      component: Demo
    }, {
      path: "/demo1",
      name: "Demo1",
      component: Demo1
    }, {
      path: "/demo2",
      name: "Demo2",
      component: Demo2
    },
    {
      path: "/test",
      name: Test,
      component: Test
    }
  ],
  mode: 'history'
})
