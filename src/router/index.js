import Vue from 'vue'
import Router from 'vue-router'

import App from '../app'
import Login from '@/page/login'
import Regist from '@/page/regist'
import User from '@/page/user'
import Cart from '@/page/cart'
import Order from '@/page/order'
import Index from '@/page/index'
import Goods from '@/page/goods'
import Seting from '@/page/set'

Vue.use(Router)

// 1、定义路由
const routes = [
  {
    path: '/',
    component: App, // 默认页面
    children: [
    // 动态路由匹配
      {path: '/login', name: 'login', component: Login},
      {path: '/User/:uid', name: 'user', component: User},
      {path: '/regist', name: 'regist', component: Regist},
      {path: '/cart', name: 'cart', component: Cart},
      {path: '/order/:id', name: 'order', component: Order},
      {path: '/index', name: 'index', component: Index},
      {path: '/goods/:id', name: 'goods', component: Goods},
      {path: '/set', name: 'set', component: Seting},
    ]
  }
]

// 2、创建路由实例，传配置
const router = new Router({
  routes, // short for routes: routes
  linkActiveClass: 'active',  // router-link的选中状态的class，也有一个默认的值
  history: true
})
router.beforeEach(function (to,from,next) {
  var userMsg = localStorage.getItem('userMsg')
  if(to.path === '/home'){
    if(!userMsg){
      next({ path: '/login' })
    }
  }
  next()
})

// 3、挂载根实例
export default router
