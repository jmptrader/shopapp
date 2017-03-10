<template>
<section class="ui-container ui-center">
<div class="app-user">
  <div class="ui-flex ui-flex-pack-center">
      <div class="ui-avatar-lg ">
          <span v-bind:style="{ background:'url(' + avatar +')' }">
          </span>
      </div>
  </div>

  <div class="ui-flex ui-flex-pack-center">
    <p class="app-user-name">
    {{uname}}
    </p>
  </div>

  <ul class="ui-list-text border-list ui-border-t app-user-text">
      <li class=" ui-border-b ui-arrowlink" @click='logout'>退出登陆</li>
  </ul>

  
</div>
</section>
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
      }
  }
}
</script>
<style lang='scss'>
$maincolor:#FED000;
$fontcolor:#333;
.app-user{
  width: 100%;
  padding-top: 50px;
}
.app-user-name{
  color: $fontcolor;
  margin: 10px 0 50px;
}
.app-user-text{
  text-align: left;
  text-indent: 20px;
}
</style>
