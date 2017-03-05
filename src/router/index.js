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

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: App, // 默认页面
    children: [
    // 动态路由匹配
      {path: '/login', name: 'login', component: Login},
      {path: '/User/:id', name: 'user', component: User},
      {path: '/regist', name: 'regist', component: Regist},
      {path: '/cart', name: 'cart', component: Cart},
      {path: '/order/:id', name: 'order', component: Order},
      {path: '/index/:type', name: 'index', component: Index},
      {path: '/goods/:id', name: 'goods', component: Goods},
    ]
  }
]
const router = new Router({
  routes, // short for routes: routes
  linkActiveClass: 'active',  // router-link的选中状态的class，也有一个默认的值
  history: true
})
// router.beforeEach(function (to,from,next) {
//   var userMsg = localStorage.getItem('userMsg')
//   if(to.path === '/home'){
//     if(!userMsg){
//       next({ path: '/login' })
//     }
//   }
//   next()
// })
export default router
