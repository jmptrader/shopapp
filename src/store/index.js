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
     * 评论回复
     * @param name 回复的用户名
     * */
    reply: (state, data) => {
      if (data.name === state.reply.name && state.reply.isComment && data.commentId === state.reply.commentId) {
        state.reply.isComment = false
      } else {
        state.reply.name = data.name
        state.reply.commentId = data.commentId
        state.reply.isComment = true
      }
    },
    /*
     * loading的显示
     * */
    isLoading: (state, status) => {
      state.comm.loading = status
    },
    /*
     * 修改header的信息
     *
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
