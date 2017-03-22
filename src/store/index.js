import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    // menu
    menu:{
      menuData:'',
    },
    // 公共
    comm: {
      dialog:{
        isShow:false,
        type:'loading', //  'ok' 'warning' 'loading'  三种状态
        text:'加载中..', 
        lazy:null,
      },
      login: {
        memberId: '',
        userData: ''
      },
      apiUrl: 'http://localhost:8080/static/',
      imgUrl: 'http://localhost:8080/static/img',
      indexConf: {
        isHeader:true,// 是否显示头部
        isSearch: true, // 是否显示搜索
        isFooter: true, // 是否显示底部
        title: '' ,// 标题
      }
    }
  },
  mutations: {
    
    /*
     * loading的显示
     * */
    dialog: (state, data) => {
      Object.assign(state.comm.dialog, data)
    },
    /*
     * 修改header的信息
     *Object.assign() 方法用于将所有可枚举的属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
     *Object.assign(target, ...sources)
     * */
    changeIndexConf: (state, data) => {
      Object.assign(state.comm.indexConf, data)
    },
    isLogin: (state,data) => {
      // 存入用户信息到本地
      localStorage.setItem('memberId',data.userid)
      localStorage.setItem('userMsg',JSON.stringify(data))
      state.comm.login.memberId = localStorage.getItem('memberId')
      state.comm.login.userData = JSON.parse(localStorage.getItem('userMsg'))
    },
    logout: (state,data) => {
      localStorage.removeItem('memberId')
      localStorage.removeItem('userMsg')
      state.comm.login.memberId = ''
      state.comm.login.userData = ''
      localStorage.removeItem('menuData')
      state.menu.menuData = ''
    },
    menuList :(state,data) => {
      localStorage.setItem('menuData',JSON.stringify(data)); // 对象-> 字符串
      state.menu.menuData = JSON.parse(localStorage.getItem('menuData')) // 字符串-> 对象
    }
  },
  actions: {
    
  },
  getter: {

  }
})
export default store
