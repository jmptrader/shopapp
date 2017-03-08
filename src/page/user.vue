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

  <div class="ui-row">
    <div class="ui-col ui-col-25"><router-link to="/order/123"><i class="ui-icon-order"></i>订单</router-link></div>
    <div class="ui-col ui-col-25"><i class="ui-icon-emo"></i>我的菜谱</div>
    <div class="ui-col ui-col-25"><i class="ui-icon-collect"></i>我的收藏</div>
    <div class="ui-col ui-col-25"><i class="ui-icon-add"></i>更多</div>
  </div>
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
        isSet:true,
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
</style>
