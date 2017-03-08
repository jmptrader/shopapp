<template>
	
</template>

<script>
export default {
  data () {
    return {
    }
  },
  created:function () {
  	this.$store.commit('changeIndexConf',{
  		isFooter: true,
        isSearch: false,
        isBack: true,
        isShare: false,
        isHeader:true,
        title: '我的订单'
  	})
  }
}
</script>

