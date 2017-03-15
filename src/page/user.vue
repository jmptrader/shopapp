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
      <p class=" app-acenter"><i class="ui-icon-checked app-color-dark"></i></p>
      <p class="app-font-middle app-acenter">我的发布</p>
    </div>
    <div class="app-flex-1" @click='go2collect'>
      <p class="app-acenter"><i class="ui-icon-collected app-color-dark"></i></p>
      <p class="app-font-middle app-acenter">我的收藏</p>
    </div>
    <div class="app-flex-1" @click='go2publish'>
      <p class="app-acenter"><i class="ui-icon-add-group app-color-dark"></i></p>
      <p class="app-font-middle app-acenter">去发布</p>
    </div>
    <div class="app-flex-1" @click='logout'>
      <p class="app-acenter"><i class="ui-icon-warn app-color-dark"></i></p>
      <p class="app-font-middle app-acenter">退出</p>
    </div>
  </div>

  <!-- loading -->
  <loading v-if='isloading'></loading>

</div>
</template>
<script>
import axios from 'axios'
import router from '../router'
import loading from '@/components/loading'
export default {
  data () {
    return {
      avatar:'',
      uname:'',
      isloading: false
    }
  },
  created () {
      this.$store.commit('changeIndexConf', {
        isFooter: true,
        isHeader: true,
        isSearch: false,
        title: '个人中心'
      })
      this.fetchData();
  },
  watch: {
    '$route': 'fetchData'
  },
  methods:{
    fetchData (){
      // this.isloading = true ;
      // 从localStorage中获取数据
      let userMsg = localStorage.getItem("userMsg");
      this.avatar = this.$store.state.comm.apiUrl + JSON.parse(userMsg).avatar;
      this.uname = JSON.parse(userMsg).username;
      // this.loading = false;
    },
    logout () {
      let vm = this;
      let url = this.$store.state.comm.apiUrl + 'data.json';
      axios.get(url).then(function (res) {
        if(res.data.status === 1){
          alert('退出账号');
          vm.$store.commit('logout');
          router.push('login');
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
    go2publish () {
      router.push('publish');
    },
    go2collect () {
      router.push('menu');
    },
    go2list () {
      router.push('menu');
    }
  },
  components:{
    loading,
  }
}
</script>

