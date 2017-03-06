<template>
<p>{{msg}}</p>
</template>

<script>
export default {
  data () {
    return {
      msg: 'cart'
    }
  },
  created:function () {
  	// head的修改
	this.$store.commit('changeIndexConf', {
		isFooter: true,
		isSearch: false,
		isBack: true,
		title: '购物车'
	})
  }
}
</script>

