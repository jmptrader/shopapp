<template>
<div class="app-user">
	<div class="ui-flex ui-flex-pack-center">
	    <div class="ui-avatar-lg">
            <span style="background-image:url(http://placeholder.qiniudn.com/140x140)"></span>
        </div>
	</div>
	<div class="ui-flex ui-flex-pack-center">
		<p>{{msg}}</p>
	</div>
	
</div>
</template>

<script>
export default {
  data () {
    return {
      msg: '1990_ever'
    }
  },
  created: function () {
      this.$store.commit('changeIndexConf', {
        isFooter: false,
        isSearch: false,
        isBack: true,
        isShare: false,
        title: '个人信息'
      })
  }
}
</script>
<style lang='scss'>
	@import '../../static/css/user.scss'
</style>
