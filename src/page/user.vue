<template>
<div class=" app-color-dark">

  <div class="app-wbox app-padding-20 app-bg-white app-bottom-margin">
    <div class="ui-avatar">
      <img class='app-img' :src="avatar">
    </div>
    <div class="app-flex-1 app-vcenter app-padding app-font-middle"> 
      <span>{{uname}}</span> 
    </div>
  </div>

  <!-- 用户功能 -->
  <div class="app-bg-white app-wbox  app-padding ">
    <div class="app-flex-1" @click='go2list'>
      <p class=" app-acenter"><i class="ui-icon-checked"></i></p>
      <p class="app-font-middle app-acenter">我的发布</p>
    </div>
    <div class="app-flex-1" @click='go2collect'>
      <p class="app-acenter"><i class="ui-icon-collected"></i></p>
      <p class="app-font-middle app-acenter">我的收藏</p>
    </div>
    <div class="app-flex-1" @click='go2publish'>
      <p class="app-acenter"><i class="ui-icon-add-group"></i></p>
      <p class="app-font-middle app-acenter">去发布</p>
    </div>
    <div class="app-flex-1" @click='logout'>
      <p class="app-acenter"><i class="ui-icon-warn"></i></p>
      <p class="app-font-middle app-acenter">退出</p>
    </div>
  </div>

</div>
</template>
<script>
import axios from 'axios'
import router from '../router'
export default {
  data () {
    return {
      avatar:'',
      uname:'',
    }
  },
  created: function () {
      this.$store.commit('changeIndexConf', {
        isFooter: true,
        isHeader: true,
        isSearch: false,
        title: '个人中心'
      })
      let userMsg = localStorage.getItem("userMsg");
      this.avatar = this.$store.state.comm.apiUrl + JSON.parse(userMsg).result.avatar;
      this.uname = JSON.parse(userMsg).result.username;
  },
  methods:{
    logout:function () {
      let vm = this
      let url = this.$store.state.comm.apiUrl + 'islogin.json';
      axios.get(url).then(function (res) {
        console.log(res.data.status)
        if(res.data.status === 1){
          vm.$store.commit('logout')
          router.push('index')
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
    go2publish: function () {
      router.push('publish');
    },
    go2collect: function () {
      router.push('menu');
    },
    go2list: function () {
      router.push('index')
    }
  }
}
</script>

