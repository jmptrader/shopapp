import Vue from 'vue'
import Router from 'vue-router'

import App from '../app'
import Login from '@/page/login'  // 登陆
import Regist from '@/page/regist' // 注册
import User from '@/page/user'   // 用户中心
import Cart from '@/page/cart'   // 购物车
import Order from '@/page/order'   // 订单
import Index from '@/page/index'  // 首页
import Goods from '@/page/goods'  // 商品详情页

Vue.use(Router)

// 1、定义路由
const routes = [
  {
    path: '/',
    component: App, // 默认页面
    children: [
    // 动态路由匹配
      {path: '/login', name: 'login', component: Login},
      {path: '/User', name: 'user', component: User},
      {path: '/regist', name: 'regist', component: Regist},
      {path: '/cart', name: 'cart', component: Cart},
      {path: '/order/:id', name: 'order', component: Order},
      {path: '/index', name: 'index', component: Index},
      {path: '/goods/:id', name: 'goods', component: Goods},
    ]
  }
]

// 2、创建路由实例，传配置
const router = new Router({
  routes,
  linkActiveClass: 'active',
  history: true
})
router.beforeEach(function (to,from,next) {
  var userMsg = localStorage.getItem('userMsg')
  if(to.path === '/user'){
    if(!userMsg){
      next({ path: '/login' })
    }
  }
  next()
})

// 3、挂载根实例
export default router
