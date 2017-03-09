import Vue from 'vue'
import Router from 'vue-router'

import App from '../app'
import Login from '@/page/login'  // 登陆
import Regist from '@/page/regist' // 注册
import User from '@/page/user'   // 用户中心
import Publish from '@/page/publish' // 发布
import Index from '@/page/index'  // 首页
import List from '@/page/list'  // 菜谱
import Menu from '@/page/menu'  // 菜谱
Vue.use(Router)

// 1、定义路由
const routes = [
  {
    path: '/',
    component: App, // 默认页面
    children: [
    // 动态路由匹配
      {path: '/index', name: 'index', component: Index},
      {path: '/User', name: 'user', component: User},
      {path: '/login', name: 'login', component: Login},
      {path: '/regist', name: 'regist', component: Regist},
      {path: '/publish', name: 'publish' , component: Publish},
      {path: '/Menu' , name: 'menu' , component:Menu},
      {path: '/List' , name: 'list' , component:List}
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
