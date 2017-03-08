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
      <li class=" ui-border-b ui-arrowlink">
        <router-link to="/order/123">我的订单</router-link>
      </li>
      <li class=" ui-border-b ui-arrowlink">退出登陆</li>
  </ul>

  
</div>
</section>
</template>
<script>
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
        isSearch: false,
        isBack: true,
        isShare: false,
        isHeader:true,
        title: '个人中心'
      })
      let userMsg = localStorage.getItem("userMsg");
      this.avatar = this.$store.state.comm.apiUrl + JSON.parse(userMsg).result.avatar;
      this.uname = JSON.parse(userMsg).result.username;
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
