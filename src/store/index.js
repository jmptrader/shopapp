import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    // 公共
    comm: {
      loading: false,
      back2top: false,
      login: {
        memberId: '',
        userData: ''
      },
      apiUrl: 'http://localhost:8080/static/',
      imgUrl: 'http://localhost:8080/static/img',
      indexConf: {
        isHeader:true,// 是否显示头部
        isSearch: true, // 是否显示搜索
        isLogo : true, // 是否显示logo
        title: '' ,// 标题
        isFooter: true, // 是否显示底部
      }
    }
  },
  mutations: {
    
    /*
     * loading的显示
     * */
    isLoading: (state, status) => {
      state.comm.loading = status
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
      localStorage.setItem('memberId',data.result.userid)
      localStorage.setItem('userMsg',JSON.stringify(data))
      state.comm.login.memberId = localStorage.getItem('memberId')
      state.comm.login.userData = JSON.parse(localStorage.getItem('userMsg'))
    },
    logout: (state,data) => {
      localStorage.removeItem('memberId')
      localStorage.removeItem('userMsg')
      state.comm.login.memberId = ''
      state.comm.login.userData = ''
    }
  },
  actions: {
    
  },
  getter: {

  }
})
export default store
