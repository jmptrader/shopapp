<template>
<div class="ui-form ui-border-t">
	<section class="ui-placehold-img">
	    <span style="background-image:url(../../static/img/logo.png)"></span>
	</section>
    <form action="#">
        <div class="ui-form-item ui-form-item-show  ui-border-b">
            <label for="#">账号</label>
            <input type="text" value="" placeholder="输入账号">
        </div>
        <div class="ui-form-item ui-form-item-show ui-border-b">
            <label for="#">密码</label>
            <input type="text" value=""  placeholder="输入密码">
        </div>
        <div class="ui-btn-wrap">
        	<button class="ui-btn-lg ui-btn-login">
		        登录
		    </button>
        </div>
    </form>
    <div class="ui-flex ui-flex-pack-end ui-flex-align-center">
      <router-link class="go2register" 
      to="/regist">注册</router-link>
    </div>

</div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  created: function () {
      this.$store.commit('changeIndexConf', {
        isFooter: false,
        isSearch: false,
        isBack: false,
        isShare: false,
        isHeader:false,
        title: '登录'
      })
  }
}
</script>
<style lang='scss'>
$maincolor:#FED000;
$fontcolor:#333;
  body{
    background: white;
  }
	.ui-btn-login{
		background: $maincolor;
		color: $fontcolor;
	}
  .go2register{
    color:$fontcolor; 
  }
</style>
