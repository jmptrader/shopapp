import Vue from 'vue'
import Router from 'vue-router'

import App from '../app'
import Login from '@/page/login'  // 登陆
import User from '@/page/user'   // 用户中心
import Publish from '@/page/publish' // 发布
import Index from '@/page/index'  // 首页
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
      // 添加meta 这个字段表示，进入这个路由是需要登录的
      {path: '/User', name: 'user', component: User,meta:{requiresAuth:true}},
      {path: '/publish', name: 'publish' , component: Publish,meta:{requiresAuth:true}},
      {path: '/login', name: 'login', component: Login},
      {path: '/Menu' , name: 'menu' , component:Menu},
    ]
  }
]

// 2、创建路由实例，传配置
const router = new Router({
  routes,
  linkActiveClass: 'active',
  history: true
})
/**
 * 全局导航钩子
 */
router.beforeEach(function (to,from,next) {
  var userMsg = localStorage.getItem('userMsg')
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!userMsg) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() 
  }
})


// 3、挂载根实例
export default router
